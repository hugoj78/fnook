import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Sale = () => {
  const history = useHistory()

  const goToSale = () => {
    history.push('/sale/form')
  }

  const user = useSelector(state => state.user.userValue)

  const sales = useSelector(state => state.sales.list).filter(
    item => item.user === user
  )

  return (
    <Container>
      <H1>eh oh je suis les ventes</H1>
      <Button onClick={() => goToSale()}>Ajouter une vente</Button>
      <h3>Tes ventes</h3>
      <HR />
      {sales.map(sale => (
        <div key={sale.id}>
          <p>Nom : {sale.name}</p>
          <p>Prix : {sale.price}</p>
          <p>Quantité : {sale.quantity}</p>
          <HR />
        </div>
      ))}
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
`

const H1 = styled.h1``

const HR = styled.hr`
  margin: 10px 25px;
`

const Button = styled.button`
  border-radius: 4px;
  background: ${props => props.theme.buttonColor};
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  text-decoration: none;
  margin: 20px;
`

export default Sale
