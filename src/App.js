// import useState
import React, { useState } from 'react'
import './styles.css'
import AllTheThings from './components/AllTheThings'
import MyShoppingCart from './components/MyShoppingCart'
import Form from './components/Form'
import productsArr from './products'

export default function App() {
	const [products, setProducts] = useState(productsArr)
	const [cart, setCart] = useState([])

	// create an addToCart function that takes in a product as a param
  // using the ...spread operator add the product to the cart array
	const addToCart = (product) => {
    console.log(product)
    setCart([...cart, product])
	}
	

	// create an removeFromCart function that takes in an index as a param
	// using Array.filter remove create a new array where that item is removed

  const removeFromCart = (index) => {
    const filteredArr = cart.filter((_, i) => i !== index)
    setCart([
      ...filteredArr
    ]) 
  }

	return (
		<div className='App'>
			<h1>Big Time Shopping</h1>
			<Form />
			<div className='products'>
				<AllTheThings 
        products={products}
        addToCart={addToCart}/>
				<MyShoppingCart
          cart={cart}
          products={products}
          removeFromCart={removeFromCart}
        />
			</div>
		</div>
	)
}