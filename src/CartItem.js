import React from 'react'

class CartItem extends React.Component{
  constructor() {
    super();
    this.state = {
      title: 'Phone',
      price: 999,
      qty: 1,
      img: ''
    }
  }
  render() {
    const { title, price, qty } = this.state;
    return (
      <div className='cart-item'>
        <div className='left-block'>
          <img  style={ styles.image }/>
        </div>
        <div className='right-block'>
          <div style={{ fontSize: 25 }}>{ title }</div>
          <div style={{ color: '#777' }}>Rs { price }</div>
          <div style={{ color: '#777' }}>Qty: { qty }</div>
          <div className='.cart-item-action'>
            {/* Buttons comment in reacts */}
            <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt="increase" className='action-icons' />
            <img src="https://cdn-icons.flaticon.com/png/512/2740/premium/2740679.png?token=exp=1640860811~hmac=59830f120e736065c5c973878de6ff90" alt="decrease" className='action-icons' />
            <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="delete" className='action-icons' />
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc',
  }
}
