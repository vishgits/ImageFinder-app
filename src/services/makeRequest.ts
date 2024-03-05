

import axios from 'axios';
import {axiosRequestType} from '../interface';

export function makeAxiosRequest(request: axiosRequestType) {
    const { data, pageCounter, perPage, getRespose, finished, getError } = request;
    axios.get('https://api.unsplash.com/search/photos', {
        params: {
            query: data,
            client_id: import.meta.env.VITE_ACCESS_KEYS,
            perPage: perPage,
            page: pageCounter,
            orientation: 'squarish'
        }
    })
        .then(response => {
            getRespose(response.data);
        })
        .catch(error => {
            getError(error);
        }).finally(() => {
            finished();
        });
}

