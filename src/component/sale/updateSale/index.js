import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DisplayForm from './displayForm'
import { ImgVillagers } from './element'
import { updateSale } from '../../../actions/sales'
import { useHistory } from 'react-router-dom'
const UpdateSale = props => {
  const [id, setId] = useState(props.match.params.id)
  const filterItem = useSelector(state => state.sales.list).filter(
    e => e.id === id
  )
  const [type, setType] = useState(filterItem[0]?.type)
  const [name, setName] = useState(filterItem[0]?.name)
  const [price, setPrice] = useState(filterItem[0]?.price)
  const [quantity, setQuantity] = useState(filterItem[0]?.quantity)
  const dispatch = useDispatch()
  const history = useHistory()

  const updateItem = () => {
    filterItem[0].quantity = quantity
    filterItem[0].price = price
    dispatch(updateSale(filterItem[0]))
    history.push('/sale')
  }

  return (
    <>
      <DisplayForm
        filterItem={filterItem}
        type={type}
        name={name}
        price={price}
        setPrice={setPrice}
        quantity={quantity}
        setQuantity={setQuantity}
        updateItem={updateItem}
      />
    </>
  )
}

export default UpdateSale
