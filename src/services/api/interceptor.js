import { api } from '@/services/api/API'

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        console.log('interceptor caught an error ', error)
        if(error.response && error.response.status == 401 || error.status == 401){
            console.log('token expired. trying to refresh...')
            try{
            await api.post('/api/refresh/')
            return api.request(error.config)                
            }catch(refreshError){
                console.error('Error refreshing token ', refreshError)
                return Promise.reject(refreshError)
            }

        }
        return Promise.reject(error)
    }
)