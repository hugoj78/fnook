import React from 'react'
import { Container, Button, Text, Image } from './basketElement'
import { useTranslation } from 'react-i18next'

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
  const { t, i18n } = useTranslation()
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
              <th>{t('basket.name')}</th>
              <th>{t('basket.price')}</th>
              <th>{t('basket.amount')}</th>
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
        <p style={{ textAlign: 'center' }}>{t('basket.emptyBasket')}</p>
      )}

      <div
        style={{
          display: 'block',
          textAlign: 'center',
          padding: '15px'
        }}
      >
        <Button disabled={totalPrice === 0} onClick={() => goCheckOut()}>
          {t('basket.pay')} : {totalPrice}€
        </Button>
      </div>
      <Button onClick={() => addTest()}>test</Button>
    </>
  )
}

export default DisplayBasket
