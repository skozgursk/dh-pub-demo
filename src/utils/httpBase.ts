import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const storeAPI = '/api'

export const apiInstance: AxiosInstance = axios.create({
    baseURL: storeAPI
})

// storeInstance.interceptors.request.use(
//     (config: InternalAxiosRequestConfig) => {
//         return config
//     },
//     (error) => {
//         console.error('Request error', error)
//         throw error
//     }
// )

// storeInstance.interceptors.response.use(
//     (response: AxiosResponse) => {
//         if (response.status === 200) {
//             return response.data
//         } else {
//             throw 'An Error'
//         }
//     },
//     (error: AxiosError<any>) => {
//         console.error(error)
//         return null
//     }
// )