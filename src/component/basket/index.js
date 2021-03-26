import React from 'react'
import { Container, Button, Text, Image } from './basketElement'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, incrementItem, decrementItem } from '../../actions/stripe'
import Checkout from './stripe/checkout'

const Basket = () => {
  const dispatch = useDispatch()
  const totalPrice = '30'
  const items = useSelector(state => state.stripe.basketValue)
  console.log(items)

  return (
    <>
      <Checkout></Checkout>
      {items.length !== 0 ? (
        <table
          style={{ width: '100%', paddingInline: '12px' }}
          cellPadding='10'
        >
          <thead>
            <tr>
              <th></th>
              <th>Nom</th>
              <th>Prix</th>
              <th>Quantité</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <th>{item.img}</th>
                <th>{item.name}</th>
                <th>{item.amount} €</th>
                <th>
                  <button onClick={() => dispatch(decrementItem(item))}>
                    -
                  </button>
                  {item.quantity}
                  <button onClick={() => dispatch(incrementItem(item))}>
                    +
                  </button>
                </th>
                <th>
                  <button onClick={() => dispatch(removeItem(item))}>X</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ textAlign: 'center' }}>Panier vide snif snif</p>
      )}

      <div
        style={{
          display: 'block',
          textAlign: 'center',
          padding: '15px'
        }}
      >
        <Button>Payer : {totalPrice}€</Button>
      </div>
    </>
  )
}

export default Basket
