import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

const useLocalCart = () => {
    const [changed, setChanged] = useState(false);
    const getCartItems = () => {
        const products = localStorage.getItem('cartProducts');
        return products ? JSON.parse(products) : [];
    }

    const { data: cartProducts, refetch } = useQuery({
        queryKey: ['cartProducts'],
        queryFn: getCartItems,
    })

    // const calculateGrandTotal = () => {
    //     refetch();

    // }
    // useEffect(() => {
    //     setGrandTotal(cartProducts?.reduce((accumulator, cur) => {
    //         return accumulator + parseInt(parseInt(cur?.price) * parseInt(cur?.count) || 0);
    //     }, 0))
    //     refetch();
    // }, [changed])
    // console.log(changed);

    const addCartItems = (product) => {
        const products = [...(getCartItems()), product];
        localStorage.setItem('cartProducts', JSON.stringify(products));
        setChanged(!changed);
        // calculateGrandTotal();
    }
    const deleteFromCart = (productId) => {
        if (productId === 'all') {
            localStorage.removeItem('cartProducts');
            return;
        }
        const products = (getCartItems())?.filter(item => item?.productID != productId);
        localStorage.setItem('cartProducts', JSON.stringify(products));
        setChanged(!changed);
        // calculateGrandTotal();
    }

    const changeQuantity = (productID, changedQuantity) => {
        const product = getCartItems().find(item => item?.productID == productID);
        deleteFromCart(productID);
        localStorage.setItem('cartProducts', JSON.stringify([...getCartItems(), { ...product, stock: parseInt(product?.stock + changedQuantity), count: parseInt(product?.count - changedQuantity) }]));
        setChanged(!changed);
        // calculateGrandTotal();
    }

    return { cartProducts, changed, refetch, addCartItems, deleteFromCart, changeQuantity }
};

export default useLocalCart;