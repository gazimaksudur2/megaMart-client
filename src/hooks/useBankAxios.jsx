import axios from 'axios';

const useBankAxios = () => {
    const axiosBank = axios.create({
        baseURL: import.meta.env.VITE_BANK_API,
        withCredentials: true
    })
    return axiosBank;
};

export default useBankAxios;