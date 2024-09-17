import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useProducts = () => {
    const axios = useAxios();
    const {data: products, refetch} = useQuery({
        queryKey: ['products'],
        queryFn: ()=> {
            const info = axios.get('/products').then(res=>res.data)
            return info;
        }
    })
    return {products, refetch};
};

export default useProducts;