import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

axiosInstance.interceptors.request.use(async (request) => {
    try {
        // Add token to request headers
        // const token = window && localStorage.getItem('token');
        // if (token) {
        //     request.headers.Authorization = `Bearer ${token}`;
        // }
        return request;
    } catch (error) {
        return Promise.reject(error);
    }
})

export default axiosInstance;
