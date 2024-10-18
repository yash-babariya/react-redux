import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { fakeData } from '../../fakeapi/api';
import './cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cart/cart';
import { toast } from 'react-toastify';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    const isProductInCart = cartItems.some((item) => item.id === product.id);
    if (isProductInCart) {
      toast.error('Product already in cart', { position: toast.P});
    } else {
      dispatch(addToCart(product));
      toast.success('Product added to cart', { position: toast.POSITION.CENTER });
    }
  };

  return (
    <div className="cart-container">
    <div className="heading">
        <h1>Cart</h1>
    </div>      
      <div className="container">
        <div className="cart-grid">
        {fakeData.map((product) => (
          <div key={product.id} className="cart-item">
            <img src={product.image} alt={product.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3 className="cart-item-name">{product.name}</h3>
              <p className="cart-item-price">Rs.{product.price.toLocaleString()}</p>
            </div>
            <div className="cart-item-actions">
              <button className="cart-item-button wishlist">
                <FaHeart />
              </button>
              <button onClick={() => handleAddToCart(product)} className="cart-item-button add-to-cart">
                <FaShoppingCart />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Cart;

