import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { history } from '../..';
import { LearningUnit } from '../models/learningUnit';
import { UnitContent } from '../models/unitContent';
import { User, UserFormValues } from '../models/user';
import { store } from '../stores/store';


const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'http://localhost:5000/api';

// destructure some properties inside the error itself
axios.interceptors.response.use(async response => {
        await sleep(1000);
        return response;
}, (error: AxiosError) => {
    const {data, status, config} = error.response!;
    switch (status) {
        case 400:
            if(typeof data === 'string') {
                toast.error(data);
            }
            if (config.method === 'get' && data.errors.hasOwnProperty('id')) {
                history.push('/not-found');
            }
            if (data.errors) {
                // store the different errors that we may encountered in a separate variable
                // look for a specific key in the data errors attribute
                // throw the error back to the component level
                const modalStateErrors = [];
                for (const key in data.errors) {
                    if (data.errors[key]) {
                        modalStateErrors.push(data.errors[key]);
                    }
                }
                throw modalStateErrors.flat();
            } 
            break;
        case 401:
            toast.error('unauthorized');
            break;
        case 404:
            history.push('/not-found');
            break;
        case 500:
            toast.error('serve-error');
            store.commonStore.setServerError(data);
            history.push('/server-errors');
            break;
    }
    return Promise.reject(error);
} )

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const LearningUnits = {
    list: () => requests.get<LearningUnit[]>('/learningUnits'),
    details: (id: string) => requests.get<LearningUnit>(`/learningUnits/${id}`),
    update: (learningUnit: LearningUnit) => axios.put<void>(`/learningUnits/${learningUnit.id}`, learningUnit),
    delete: (id: string) => axios.delete<void>(`/learningUnits/${id}`)
}

// create an intermediary object to use the account related api requests
const Account = {
    current: () => requests.get<User>('/account'),
    login: (user: UserFormValues) => requests.post<User>('/account/login', user),
    register: (user: UserFormValues) => requests.post<User>('/account/register', user)
} 

const UnitContents = {
    list: () => requests.get<UnitContent[]>('/unitContents'),
    details: (id: string) => requests.get<UnitContent>(`/unitConents/${id}`)
}
const agent = {
    LearningUnits,
    Account,
    UnitContents
}

export default agent;