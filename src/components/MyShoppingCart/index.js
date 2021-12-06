import React from 'react';

function MyShoppingCart(props) {

  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
        <ul>
        {props.cart.map((product, index) =>(
          <li onClick={() => props.removeFromCart(index)}>{product.name} {product.price}</li>
        ))}
        </ul>
    </div>
  );
}

export default MyShoppingCart;
