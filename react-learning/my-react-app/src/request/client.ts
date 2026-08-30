import axios from "axios";
const baseUrl = '/api';

const get = async (url: string) => {
    return axios.get(`${baseUrl}${url}`).then(reponse => reponse.data);
}

const post = async (url: string, data: unknown) => {
    return axios.post(`${baseUrl}${url}`, data).then(response => response.data);
}

export {get, post}