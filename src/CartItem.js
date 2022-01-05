import React from 'react'

const CartItem = (props) => {
  const { title, price, qty } = props.product;
  const { product, OnIncreaseQuantity, OnDecreaseQuantity, OnDeleteProduct } = props;
  return (
    <div className='cart-item'>
      <div className='left-block'>
        <img style={styles.image} src={ product.img }/>
      </div>
      <div className='right-block'>
        <div style={{ fontSize: 25 }}>{ title }</div>
        <div style={{ color: '#777' }}>Rs { price }</div>
        <div style={{ color: '#777' }}>Qty: { qty }</div>
        <div className='.cart-item-action'>
          {/* Buttons comment in reacts */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
            alt="increase"
            className='action-icons'
            onClick={ () => OnIncreaseQuantity(product) }
          />
          <img
            src="https://as2.ftcdn.net/v2/jpg/04/60/56/57/1000_F_460565747_PE6uYbtfeXASxkZpibOoN6SKUWTUHPvY.jpg"
            alt="decrease"
            className='action-icons'
            onClick= { () => OnDecreaseQuantity(product) }
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            alt="delete"
            className='action-icons'
            onClick = { () => OnDeleteProduct(product.id) }
          />
        </div>
      </div>
    </div>
    );
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

