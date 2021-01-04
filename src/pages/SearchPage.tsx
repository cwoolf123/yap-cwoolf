import React, { FC, useState, useEffect } from 'react';
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonImg,
  IonFooter,
  IonSearchbar,
  IonSpinner,
  IonRippleEffect,
} from "@ionic/react";
import './SearchPage.css';
import { Character } from '../interfaces/character';
import { getCharacters } from '../services/api';



const SearchPage: FC = () => {

  const [loading, setLoading] = useState(true);
  const [searchData, setSearchData] = useState([] as Character[] | [])
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSearch, setFilteredSearch] = useState([
  {
    id: 0,
    name: "",
    description: "",
    thumbnail: { path: "", extension: "" },
    comics: {
      available: 0,
    },
    series: {
      available: 0,
    },
    stories: {
      available: 0,
    },
    events: {
      available: 0,
    },
  }]) 

  
  const fetchCharacters = async () => {
    let res1: any, res2: any, res3: any, res4: any, res5: any, res6: any, res7: any = [];
    let res8: any, res9: any, res10: any, res11: any, res12: any, res13: any, res14: any, res15: any = [];
    res1 = await getCharacters(0)
    if(res1.results) { res1 = res1.results    
    res2 = await getCharacters(100)
    if(res2) { res2 = res2.results;
    res1 = [...res1, ...res2];
    res3 = await getCharacters(200)
    if(res3) { res3 = res3.results;
    res1 = [...res1, ...res3];
    res4 = await getCharacters(300)
    if(res4) { res4 = res4.results;
    res1 = [...res1, ...res4];
    res5 = await getCharacters(400)
    if(res5) { res5 = res5.results;
    res1 = [...res1, ...res5];
    res6 = await getCharacters(500)
    if(res6) { res6 = res6.results;
    res1 = [...res1, ...res6];
    res7 = await getCharacters(600)
    if(res7) { res7 = res7.results;
    res1 = [...res1, ...res7];
    res8 = await getCharacters(700)
    if(res8) { res8 = res8.results;
    res1 = [...res1, ...res8];
    res9 = await getCharacters(800)
    if(res9) { res9 = res9.results;
    res1 = [...res1, ...res9];
    res10 = await getCharacters(900)
    if(res10) { res10 = res10.results;
    res1 = [...res1, ...res10];
    res11 = await getCharacters(1000)
    if(res11) { res11 = res11.results;
    res1 = [...res1, ...res11];
    res12 = await getCharacters(1100)
    if(res12) { res12 = res12.results;
    res1 = [...res1, ...res12];
    res13 = await getCharacters(1200)
    if(res13) { res13 = res13.results;
    res1 = [...res1, ...res13];
    res14 = await getCharacters(1300)
    if(res14) { res14 = res14.results;
    res1 = [...res1, ...res14];
    res15 = await getCharacters(1400)
    if(res15) { res15 = res15.results;
    res1 = [...res1, ...res15];
      if(searchQuery === "") {  
        setSearchData(res1);
        setFilteredSearch(res1);
        setLoading(false);
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }           
                      }
                    }
                  }
                }
              }
            }
          }
        }
      };
    };

// eslint-disable-next-line
  useEffect(() => {  
    fetchCharacters()
  },[]);

  useEffect(() => {
    if(loading === false) {
      if(searchQuery !== "") {
      let tempSearchResult = searchData.filter(ele => ele.name.includes(searchQuery))
      setFilteredSearch([...tempSearchResult])
    }
  }
  },[searchQuery, searchData])
    
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Marvel Characters</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar value={searchQuery} onIonChange={e => setSearchQuery(e.detail.value!) }></IonSearchbar>
          
        </IonToolbar>
      </IonHeader>
        {loading === true ? (
      <IonContent>
          <div className="ion-text-center ion-padding">
          <IonSpinner name="crescent" />
        </div>
      </IonContent>
        ) : (
      <IonContent>
      <IonGrid fixed>
          <IonRow>
            {loading === false && filteredSearch.map((search) => (
              <IonCol
                size="12" 
                size-sm="12" 
                size-md="12" 
                size-lg="12" 
                size-xl="12"
                key={search.id}
              >
                <IonItem>
                <IonCard>
                  <IonCardHeader>

            <div className="search__card__img">
                <IonImg
                    alt={search.name}
                    src={search.thumbnail.path && `${search.thumbnail.path}.${search.thumbnail.extension}`}
                />
            </div>
                  <div className="search__card__title">
                    <IonCardTitle>{search.name !== "" ? search.name : null}</IonCardTitle>
                    <IonCardSubtitle>
                    COMICS: {search.comics.available} | 
                    SERIES: {search.series.available} | 
                    STORIES: {search.stories.available} | 
                    EVENTS: {search.events.available}
                    </IonCardSubtitle>
                  </div>
                  </IonCardHeader>
                  <IonFooter className="ion-text-right">
                    <IonButton
                      color="secondary"
                      fill="clear"
                      routerLink={'/character/' + search.id}
                      className="ion-activatable ripple-parent"
                      >                    
                      View
                      <IonRippleEffect type="unbounded"></IonRippleEffect>
                    
                    </IonButton>
                  </IonFooter>
                </IonCard>
                </IonItem>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
      )}
    </IonPage>
  );
};

export default SearchPage;
