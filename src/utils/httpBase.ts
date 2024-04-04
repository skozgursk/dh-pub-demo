import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const storeAPI = '/api'

export const apiInstance: AxiosInstance = axios.create({
    baseURL: storeAPI
})

apiInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config
    },
    (error) => {
        throw error
    }
)

apiInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.status === 200) {
            return response.data
        } else {
            throw Error('Something Went Very Bad')
        }
    },
    (error: AxiosError) => {
        throw Error('Something Went Very Bad')
    }
)