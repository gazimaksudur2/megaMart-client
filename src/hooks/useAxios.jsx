import axios from 'axios';

const axiosLocal = axios.create({
    baseURL: 'http://localhost:5000',
})
const useAxios = () => {
    return axiosLocal;
};

export default useAxios;