import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useCategories = () => {
    const axios = useAxios();
    const {data: categories, refetch} = useQuery({
        queryKey: ['categories'],
        queryFn: ()=> {
            const info = axios.get('/categories').then(res=>res.data)
            return info;
        }
    })
    return {categories, refetch}
};

export default useCategories;