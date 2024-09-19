import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useBrands = () => {
    const axios = useAxios();
    const {data: brands, refetch} = useQuery({
        queryKey: ['brands'],
        queryFn: ()=>{
            const info = axios.get(`/brands`, {withCredentials: true}).then(res=>res.data)
            return info;
        }
    })
    return (
        {brands, refetch}
    );
};

export default useBrands;