import React from 'react'
import CartItem from './CartItem';

class Cart extends React.Component{
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: 'Watch',
          price: 99,
          qty: 1,
          img: '',
          id: 1
        },
        {
          title: 'Phone',
          price: 999,
          qty: 10,
          img: '',
          id: 2
        },
        {
          title: 'Laptop',
          price: 10500,
          qty: 5,
          img: '',
          id: 3
        }
      ]
    }
  }
  render() {
    const { products } = this.state;
    return (
      <div className='cart'>
        {products.map((product) => {
          return(
            <CartItem
              product = {product}
              key = {product.id}
              func = {() => console.log('something')}
              isloggedIn = {false}
              jsx = {<h1>Test</h1>}
            />
          )
        })}
      </div>
    );
  }
}

export default Cart;


