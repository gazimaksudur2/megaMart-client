import axios from 'axios';

const axiosLocal = axios.create({
    baseURL: import.meta.env.VITE_SERVER_API,
})
const useAxios = () => {
    return axiosLocal;
};

export default useAxios;