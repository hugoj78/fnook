import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getPayement } from '../../actions/stripe'
import { Link } from 'react-router-dom'

const Purchase = () => {
  const dispatch = useDispatch()

  const user = useSelector(state => state.user.userValue)
  const bill = useSelector(state => state.stripe.bill).filter(
    payment => payment.charges.data[0].billing_details.name === user
  )

  useEffect(() => {
    dispatch(getPayement())
  }, [])

  const toDateTime = secs => {
    var t = new Date(1970, 0, 1)
    t.setSeconds(secs)
    const stringDate = `${t.getFullYear()}- ${
      t.getMonth() + 1
    }-${t.getDate()} ${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`
    return stringDate
  }

  return (
    <Container>
      <h1>Vos Achats</h1>

      {bill.length !== 0 ? (
        <>
          {bill.map(payment => (
            <div key={payment.id}>
              <p>Date : {toDateTime(payment.created)}</p>
              <p>Prix : {payment.amount / 100} €</p>
              <p>Methode de payement : {payment.payment_method_types[0]}</p>
              <p>Statut : {payment.status}</p>
              <button
                onClick={() =>
                  window.open(
                    `${payment.charges.data[0].receipt_url}`,
                    '_blank'
                  )
                }
              >
                Reçu
              </button>
            </div>
          ))}
        </>
      ) : (
        <>
          <p>Vous n'avez aucune facture</p>
        </>
      )}
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
`

export default Purchase
