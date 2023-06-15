import { ADD_TO_CART, REMOVE_FROM_CART, USER_LIST,SET_USER_DATA } from "./Constants";


export function addToCart(item) {
    return {
        type: ADD_TO_CART,
        data: item
    }
}

export function removeFromCart(item) {
    return {
        type: REMOVE_FROM_CART,
        data: item
    }
}

export function getUserList() {
    return {
        type: USER_LIST,
    }
}