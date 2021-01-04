import React, { FC, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Character } from '../interfaces/character';
import CharacterCard from '../components/CharacterCard';
import { getCharacterById } from '../services/api';

import './CharacterDetailPage.css';
import {
  IonAvatar,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonSpinner,
} from "@ionic/react";


const CharacterDetailPage: FC= (): JSX.Element => {

  let { id }  = useParams<any>() 
  const [character, setCharacter] = useState(null as Character[] | null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCharacterById = (characterID: string) => {
    setLoading(true);
    getCharacterById(characterID).then((response) => {
      if (response && response.results) {
        setCharacter(response.results);
          console.log(response.results)
      }
    }).finally(() => {
      setLoading(false);
    });
  };
    
    useEffect(() => {
      fetchCharacterById(id);
    },[id])

      return (
        <IonPage>
        <IonHeader>
          {(character) && (
          <IonToolbar>
            {character.map((item) => (
              <div className="ion-padding character__header__wrapper">
              <IonAvatar>
              <img 
              alt={item.name}
              src={item.thumbnail.path && `${item.thumbnail.path}.${item.thumbnail.extension}`} 
              />
              </IonAvatar>
              <div className="character__header__title">
                <IonTitle>{item.name}</IonTitle>
              </div>
              </div>

            ))}
          </IonToolbar>
          )}
        </IonHeader>
  
          {loading ? (
            <IonContent>
                <div className="ion-text-center ion-padding">
                  <IonSpinner name="crescent" />
                </div>
            </IonContent>
          ) : (
            <IonContent>
          <IonGrid fixed>
            {(character) &&
              <IonRow>
                {character.map((item) => (
                 
                    <IonCol
                      key={item.id}
                      size="12" 
                      size-sm="12" 
                      size-md="12" 
                      size-lg="12" 
                      size-xl="12"
                    >
                  
                      <CharacterCard character={item} />
                    
                  </IonCol>
                     ))}
              </IonRow>
                }
            </IonGrid>
            </IonContent> 
          )}
    </IonPage>
    );
}

export default CharacterDetailPage;
