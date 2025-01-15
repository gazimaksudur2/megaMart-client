import axios from 'axios';

const axiosLocal = axios.create({
    // baseURL: import.meta.env.VITE_SERVER_API,
    baseURL: 'http://localhost:5000',
    withCredentials: true
})
const useAxios = () => {
    return axiosLocal;
};

export default useAxios;