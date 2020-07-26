export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )

    if (existingCartItem) {
        // return 一個 array 裡面有很多 object
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }

    return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ]
};