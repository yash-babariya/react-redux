import React from 'react';
import { FaTrash } from 'react-icons/fa';
import './addToCart.scss';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart} from '../../redux/cart/cart';
import { toast } from 'react-toastify';

const AddToCart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
        toast.success('Product removed from cart');
    };

    return (
        <div className="add-to-cart-container">
            <h1 className="cart-heading">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p className="empty-cart-message">No items in your cart</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((product) => (
                        <div key={product.id} className="cart-item">
                            <div className="cart-item-image-container">
                                <img src={product.image} alt={product.name} className="cart-item-image" />
                            </div>
                            <div className="cart-item-content">
                                <div className="cart-item-details">
                                    <h3 className="cart-item-name">{product.name}</h3>
                                    <p className="cart-item-price">Rs.{product.price.toLocaleString()}</p>
                                </div>
                                <div className="cart-item-actions">
                                    <button onClick={() => handleRemoveFromCart(product.id)} className="remove-button">
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AddToCart;
