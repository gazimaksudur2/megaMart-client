import { useQuery } from '@tanstack/react-query';

const useLocalCart = () => {
    const getCartItems = () => {
        const products = localStorage.getItem('cartProducts');
        return products ? JSON.parse(products) : [];
    }
    const addCartItems = (product) => {
        const products = [...(getCartItems()), product];
        localStorage.setItem('cartProducts', JSON.stringify(products));
    }
    const deleteFromCart = (productId) => {
        if (productId === 'all') {
            localStorage.removeItem('cartProducts');
            return;
        }
        const products = (getCartItems())?.filter(item => item?.productID != productId);
        // console.log(products);
        localStorage.setItem('cartProducts', JSON.stringify(products));
    }

    const { data: cartProducts, refetch } = useQuery({
        queryKey: ['cartProducts'],
        queryFn: getCartItems
    })
    return { items: cartProducts, refetch, addCartItems, deleteFromCart }
};

export default useLocalCart;