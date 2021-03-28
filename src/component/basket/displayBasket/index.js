import React from 'react'
import { Container, Button, Text, Image } from './basketElement'

const DisplayBasket = ({
  items,
  dispatch,
  decrementItemBasket,
  incrementItemBasket,
  removeItemBasket,
  goCheckOut,
  totalPrice,
  addTest
}) => {
  return (
    <>
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
                <th>
                  <img style={{ width: '40px' }} src={item.img} />
                </th>
                <th>{item.name}</th>
                <th>{item.amount} €</th>
                <th>
                  <button
                    disabled={item.quantity === 1}
                    onClick={() => dispatch(decrementItemBasket(item))}
                  >
                    -
                  </button>
                  {item.quantity}
                  <button onClick={() => dispatch(incrementItemBasket(item))}>
                    +
                  </button>
                </th>
                <th>
                  <button onClick={() => dispatch(removeItemBasket(item))}>
                    X
                  </button>
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
        <Button disabled={totalPrice === 0} onClick={() => goCheckOut()}>
          Payer : {totalPrice}€
        </Button>
      </div>
      <Button onClick={() => addTest()}>test</Button>
    </>
  )
}

export default DisplayBasket
