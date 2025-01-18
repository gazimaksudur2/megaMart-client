import axios from 'axios';

const axiosLocal = axios.create({
    baseURL: import.meta.env.VITE_MEGAMART_SERVER_API,
    withCredentials: true
})
const useAxios = () => {
    return axiosLocal;
};

export default useAxios;