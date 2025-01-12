import {createSlice} from "@reduxjs/toolkit";
import {message} from "antd"
const cartSlice = createSlice({
    name:"cart",
    initialState: {
        cart:[]
    },
    reducers: {
        addToCart:(state,action)=>{
            const isProductInCart = state.cart.find((item)=>item.id === action.payload.id)
            if(!isProductInCart){
                state.cart.push(action.payload)
                message.success("Product added to cart")
            }
            else{
                message.warning("Product already added to cart")
            }
            
        },
        handleQuantityChange:(state,action)=>{
            state.cart = state.cart.map((item)=>{
                if(item.id === action.payload.id){
                    if(action.payload.op === "+"){
                        return {...item,quantity:item.quantity+1}
                    }
                    else if(action.payload.op === "-"){
                        if(item.quantity > 1){
                            return {...item,quantity:item.quantity-1}
                        }
                    }
                }
                return item
            })
        },
        removeFromCart:(state,action)=>{
            state.cart = state.cart.filter((item)=>item.id !== action.payload)
        },
        clearCart:(state)=>{
            state.cart = []
        }
    }
})

export const {addToCart,removeFromCart,handleQuantityChange, clearCart} = cartSlice.actions
export default cartSlice.reducer

