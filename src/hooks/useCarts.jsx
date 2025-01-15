import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';
// import useAuth from './useAuth';

const axiosPublic = useAxios();
const useCarts = () => {
    // const { user } = useAuth();
    const { data: carts, refetch } = useQuery({
        queryKey: ['carts'],
        queryFn: ()=>{
            // const info = axiosPublic.get(`/carts?email=${user?.email}`)
            const info = axiosPublic.get(`/carts`)
                            .then(res=> res.data)
                            .catch(err=> console.log(err?.message))
            return info;
        }
    });
    return { carts, refetch };
};

export default useCarts;