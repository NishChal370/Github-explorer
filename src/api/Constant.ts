import axios, { AxiosInstance }  from 'axios';

export const AXIOS: AxiosInstance = axios.create({
      baseURL: "https://api.github.com/",

});
  

export const URL_OWNER_REPOSITORY: string = 'repos/';
export const URL_SEARCH_REPOSITORY: string = 'search/repositories';