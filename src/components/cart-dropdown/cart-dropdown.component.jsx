import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors.js';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
                }
            </div>
            <CustomButton>Go TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItems(state)
    }
}

// const mapStateToProps = (state) => {
//     return {
//         cartItems: state.cart.cartItems
//     }
// }

export default connect(mapStateToProps)(CartDropdown);