import axios from 'axios';

const useBankAxios = () => {
    const axiosBank = axios.create({
        // baseURL: import.meta.VITE_BANK_SERVER,
        baseURL: 'https://bank-server-six.vercel.app',
    })
    return axiosBank;
};

export default useBankAxios;