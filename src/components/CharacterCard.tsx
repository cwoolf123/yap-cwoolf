import React, { FC } from 'react';
import { Character } from '../interfaces/character';
import { 
  IonImg, 
  IonCard, 
  IonCol, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardHeader, 
  IonCardContent, 
  IonButton, 
  IonItemDivider, 
  IonItem, 
  IonFooter 
} from '@ionic/react';


type Props = {
    character: Character;
}

const CharacterCard: FC<Props> = (props): JSX.Element => {
    
    let { character } = props;

    return (
            <>
            <div className="character__bkgrnd__img">
                    <IonImg
                    alt={character.name}
                    src={character.thumbnail.path && `${character.thumbnail.path}.${character.thumbnail.extension}`}
                />
            </div>
            <IonCard>

        
            <div className="character__card__img">
                <IonImg
                    alt={character.name}
                    src={character.thumbnail.path && `${character.thumbnail.path}.${character.thumbnail.extension}`}
                />
            </div>
              
            <IonCardHeader>
              <div className="character__card__title">
                <IonCardTitle>
                    {character.name}
                </IonCardTitle>
                <IonCardSubtitle>
                    <IonCardSubtitle>
                      COMICS: {character.comics.available} | 
                      SERIES: {character.series.available} | 
                      STORIES: {character.stories.available} | 
                      EVENTS: {character.events.available}
                    </IonCardSubtitle>
                </IonCardSubtitle>
              </div>
              
            </IonCardHeader>
              

            <IonCardContent>
                <IonItemDivider>Description</IonItemDivider>  
                {character.description ? 
                (<p className="character__card__description" >
                  <em>{character.description}</em></p> 
                  ) : (
                <p className="character__card__description" >
                  <em>There is no description available for this character.</em></p>
                )}

            <IonItemDivider>Comics</IonItemDivider>  
                
              {character.comics.items.length !== 0 ? (
                <>
                  {character.comics.items.map((item, index) => (
                       <div className="character__card__detail">
                       <IonItem key={index}>
                       <p>
                         {item.name}
                      </p> 
                      </IonItem>  
                      </div>
                  ))} 
                </>
            ): <p className="character__card__description"><em>There are no comics available for this character.</em></p>}

            <IonItemDivider>Series</IonItemDivider>  
                
              {character.series.items.length !== 0 ? (
                <>
                  {character.series.items.map((item, index) => (
                       <div className="character__card__detail">
                       <IonItem key={index}>
                       <p>
                         {item.name}
                      </p> 
                      </IonItem>  
                      </div>
                  ))} 
                </>
            ): <p className="character__card__description"><em>There are no series available for this character.</em></p>}

            <IonItemDivider>Stories</IonItemDivider>  
                
              {character.stories.items.length !== 0 ? (
                <>
                  {character.stories.items.map((item, index) => (
                       <div className="character__card__detail">
                       <IonItem key={index}>
                       <p>
                         {item.name}
                      </p> 
                      </IonItem>  
                      </div>
                  ))} 
                </>
            ): <p className="character__card__description"><em>There are no stories available for this character.</em></p>}

            <IonItemDivider>Events</IonItemDivider>  
                
                {character.events.items.length !== 0 ? (
                  <>
                    {character.events.items.map((item, index) => (
                         <div className="character__card__detail">
                         <IonItem key={index}>
                         <p>
                           {item.name}
                        </p> 
                        </IonItem>  
                        </div>
                    ))} 
                  </>
              ): <p className="character__card__description"><em>There are no events available for this character.</em></p>}

                </IonCardContent>
            {(character.urls) && (
              <>
              <IonFooter className="ion-text-right">
              {character.urls.map((link, index) => (
                    <IonButton
                      color="secondary"
                      fill="clear"
                      href={link.url}
                      >
                      {link.type}
                    </IonButton>
                    ))}
                    </IonFooter>
                  </>
              )}
        </IonCard>
        <IonCol>

        </IonCol>
      </>
    );
}

export default CharacterCard;