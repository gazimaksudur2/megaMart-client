import { createSlice } from '@reduxjs/toolkit';


const getProducts = () => {
    const products = localStorage.getItem('cartProducts');
    return products ? JSON.parse(products) : [];
}

const initialState = {
    cart: getProducts(),
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const products = [...(state?.cart), action?.payload];
            localStorage.setItem('cartProducts', JSON.stringify(products));
            state.cart = products;
        },
        deleteProduct: (state, action) => {
            if (action?.payload == 'all') {
                localStorage.removeItem('cartProducts');
                state.cart = [];
                // console.log(state.cart);
                return;
            }
            const products = state?.cart.filter(item => item?.productID != action?.payload?.productID);
            localStorage.setItem('cartProducts', JSON.stringify(products));
            state.cart = products;
        },
        changeQuantity: (state, action) => {
            const index = state?.cart.findIndex(item => item?.productID == action?.payload?.productID);
            if(index !== -1){
                const product = state?.cart?.find(item => item?.productID == action?.payload?.productID);
                state?.cart.splice(index, 1, {...state?.cart[index], stock: parseInt(product?.stock + action?.payload?.amount), count: parseInt(product?.count - action?.payload?.amount)});
                localStorage.setItem('cartProducts', JSON.stringify(state.cart));
            }
        }
    }
})


export const { addProduct, deleteProduct, changeQuantity } = cartSlice.actions

export default cartSlice.reducer;