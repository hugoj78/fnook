import React from 'react'
import Checkout from './stripe/checkout'

const Basket = () => {
  return (
    <>
      <Checkout />
      <p>Basket page</p>
      <table style={{ width: '100%', paddingInline: '12px' }} cellPadding='10'>
        <thead>
          <tr>
            <th></th>
            <th>Nom du Produit</th>
            <th>Prix</th>
            <th>Quantité</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <th>Ceci est mon nom</th>
            <th>15€</th>
            <th>3</th>
          </tr>
          <tr>
            <th>2</th>
            <th>Ceci est mon nom</th>
            <th>15€</th>
            <th>3</th>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Basket
