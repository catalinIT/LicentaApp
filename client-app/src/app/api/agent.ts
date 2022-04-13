import axios, { AxiosResponse } from 'axios';
import { LearningUnit } from '../models/learningUnit';


const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const LearningUnits = {
    list: () => requests.get<LearningUnit[]>('/learningUnits'),
    details: (id: string) => requests.get<LearningUnit>(`/learningUnits/${id}`),
    update: (learningUnit: LearningUnit) => axios.put<void>(`/learningUnits/${learningUnit.id}`, learningUnit),
    delete: (id: string) => axios.delete<void>(`/learningUnits/${id}`)
}

const agent = {
    LearningUnits
}

export default agent;