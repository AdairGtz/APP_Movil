import { actionCart } from "../utils/typesShoppingCart";

export const cartReducer = (state, action) => {

        switch (action.type) {
                case actionCart.inititalCart: {
                        return {
                                ...state,
                                cart: action.payload.cart,
                                quantityProducts: action.payload.quantityProducts,
                                subtotal: action.payload.subtotal
                        }
                }
                case actionCart.addToCart: {
                        let verificationItem = state.cart.find(cart => cart.id === action.payload.id)

                        let newCart = verificationItem
                                ? state.cart.map(item => {
                                        if (item.id === action.payload.id) {
                                                return { ...item, quantity: item.quantity + 1 };
                                        } else {
                                                return item;
                                        }
                                })
                                : [...state.cart, { ...action.payload }]

                        return {
                                ...state,
                                cart: newCart,
                                quantityProducts: newCart.reduce((acum, value) => parseInt(acum) + parseInt(value.quantity), 0),
                                subtotal: newCart.reduce((acum, value) => parseInt(acum) + parseInt(value.price) * parseInt(value.quantity), 0)
                        }
                }
                case actionCart.deleteOneProductToCart: {
                        let newCart = state.cart.filter(item => item.id !== action.payload.id)

                        return {
                                ...state,
                                cart: newCart,
                                quantityProducts: newCart.reduce((acum, value) => parseInt(acum) + parseInt(value.quantity), 0),
                                subtotal: newCart.reduce((acum, value) => parseInt(acum) + parseInt(value.price) * parseInt(value.quantity), 0)
                        }

                }
                case actionCart.decreaseQuantity: {
                        let newCart = state.cart.map(item => {
                                if (item.id === action.payload.id) {
                                        return { ...item, quantity: item.quantity - 1 };
                                } else {
                                        return item;
                                }
                        })

                        newCart = newCart.filter(item => item.quantity !== 0)

                        return {
                                ...state,
                                cart: newCart,
                                quantityProducts: newCart.reduce((acum, value) => parseInt(acum) + parseInt(value.quantity), 0),
                                subtotal: newCart.reduce((acum, value) => parseInt(acum) + parseInt(value.price) * parseInt(value.quantity), 0)
                        }
                }

                case actionCart.increaseQuantity: {
                        let newCart = state.cart.map(item => {
                                if (item.id === action.payload.id) {
                                        return { ...item, quantity: item.quantity + 1 };
                                } else {
                                        return item;
                                }
                        })

                        return {
                                ...state,
                                cart: newCart,
                                quantityProducts: newCart.reduce((acum, value) => parseInt(acum) + parseInt(value.quantity), 0),
                                subtotal: newCart.reduce((acum, value) => parseInt(acum) + parseInt(value.price) * parseInt(value.quantity), 0)
                        }
                }

                default:
                        return state;
        }

}