import{createSlice } from '@reduxjs/toolkit';
const initialState={itemList:[],totalQuantity:0,showCart:false};
const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
            const newItem=action.payload;
            const exitingItem=state.itemList.find((item)=>item.id===newItem.id);
            if(exitingItem){
                exitingItem.quantity++;
                exitingItem.totalPrice=exitingItem.price*exitingItem.quantity;
            }else{
                state.itemList.push({
                    title:action.payload.title,
                    img:action.payload.img,
                    price:action.payload.price,
                    totalPrice:action.payload.totalPrice,
                    id:action.payload.id,
                    quantity:1
                })
            }
            state.totalQuantity++;
        },
        removeFromCart(state,action){
            const findItem=state.itemList.find((item)=>item.id===action.payload.id);
            if(findItem.quantity===1){
                state.itemList=state.itemList.filter((item)=>item.id!=action.payload.id);

            }else{
                findItem.quantity--;
                findItem.totalPrice-=findItem.price;
                state.totalQuantity--;
            }
        },
        clearCart(state){
            state.totalQuantity=0;
            state.itemList.length=0;
        }
    }
});
export const {clearCart,addToCart,removeFromCart}=cartSlice.actions;
export default cartSlice.reducer;