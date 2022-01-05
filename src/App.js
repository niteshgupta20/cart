import Cart from './Cart';
import Navbar from './Navbar';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: 'Watch',
          price: 99,
          qty: 1,
          img: 'https://images.unsplash.com/photo-1614703418052-d5b893d495bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          id: 1
        },
        {
          title: 'Phone',
          price: 999,
          qty: 10,
          img: 'https://images.unsplash.com/photo-1557180295-76eee20ae8aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          id: 2
        },
        {
          title: 'Laptop',
          price: 10500,
          qty: 5,
          img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          id: 3
        }
      ]
    }
  }

  handleIncreaseQuantity = (product) => {
    console.log('Hey Please inc the qty of', product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products: products
    })
  }

  handleDecreaseQuantity = (product) => {
    console.log('Hey Please inc the qty of', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;
    this.setState({
      products: products
    })
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id); // []
    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    })

    return cartTotal;
  }

  render() {
    const { products } = this.state
    return (
      <div className="App">
        <Navbar count = { this.getCartCount() }/>
        <Cart
          products = { products }
          OnIncreaseQuantity = {this.handleIncreaseQuantity}
          OnDecreaseQuantity={this.handleDecreaseQuantity}
          OnDeleteProduct = {this.handleDeleteProduct}
        />
        <div style={{ padding: 10,fontSize: 20}}>TOTAL: { this.getCartTotal() }</div>
      </div>
    );  
  }
}

export default App;
