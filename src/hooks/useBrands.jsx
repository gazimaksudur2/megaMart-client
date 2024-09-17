import useAuth from './useAuth';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useBrands = (own) => {
    const {userDB} = useAuth();
    const axios = useAxios();
    const {data: brands, refetch} = useQuery({
        queryKey: ['brands'],
        queryFn: ()=>{
            const info = axios.get(`/brands${own?`?requestedBy=${userDB?.email}`:''}`, {withCredentials: true}).then(res=>res.data)
            return info;
        },
        enabled: !!userDB
    })
    return (
        {brands, refetch}
    );
};

export default useBrands;