import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useProducts = () => {
    const axios = useAxios();
    // const url = id ? `?id=${id}` : 's';
    const {data: products, refetch, isLoading, isFetching} = useQuery({
        queryKey: ['products'],
        queryFn: ()=> {
            const info = axios.get('/products').then(res=>res.data)
            return info;
        }
    })
    return {products, refetch, isLoading, isFetching};
};

export default useProducts;