import axios from 'axios';
import { DataContainer } from '../interfaces/data-container';
import { Character } from '../interfaces/character';

const API_KEY = '5ce09409d6a23919fb83cf0813fc9628';

const api = axios.create({
    baseURL: 'https://gateway.marvel.com:443/v1/public',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.response.use((response) => {
    if (response.status === 200) {
        return response.data.data;
    }
});

export const getCharacters = (i: Number) => {
  let res: any = [];
  res = api.get('/characters', {
        params: {
            ts: 1,
            apikey: API_KEY,
            limit: 100,
            offset: i,
            hash: 'f251483e9ae9a66f812532e077d4e8f1',
        },
    });
    if(res){
    return(res)
    }
}

export function getCharacterById(charID:any): Promise<DataContainer<Character>> {
    return api.get(`/characters/${charID}`, {
        params: {
            ts: 1,
            apikey: API_KEY,
            limit: 1,
            hash: 'f251483e9ae9a66f812532e077d4e8f1',
        },
    });
}