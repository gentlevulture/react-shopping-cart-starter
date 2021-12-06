import React from 'react';

function AllTheThings(props) {

  return (
    <div className="AllTheThings">
      <h2>Put these in your cart!</h2>
      
      <ul>
        {props.products.map((product) =>(
          <li onClick={() => props.addToCart(product)}>{product.name} {product.price}</li>
        ))}
      </ul>

    </div>
      
  );
}

export default AllTheThings;
