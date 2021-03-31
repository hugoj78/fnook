import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVillagers } from '../../../actions/nookipedia'
import DisplayForm from './displayForm'
import { getToken } from '../../../actions/token'
import { incrementUser } from '../../../actions/user'
import { addSale } from '../../../actions/sales'
import uuid from 'uuid'
import { useHistory } from 'react-router-dom'

const FormSale = () => {
  const [options, setOptions] = useState(['Villagers', 'Fishs'])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getVillagers())
  }, [])

  const history = useHistory()
  const [type, setType] = useState('Villagers')
  const villagersList = useSelector(state => state.nookipedia.villagers)
  const fishsList = useSelector(state => state.nookipedia.fishs)
  const [typeItems, setTypeItems] = useState(villagersList)
  const [idItem, setIdItem] = useState(villagersList[0].id)
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [imageurl, setImageUrl] = useState(villagersList[0].image_url)
  const [name, setName] = useState(villagersList[0].name)
  const user = useSelector(state => state.user.userValue)

  useEffect(() => {
    if (type === 'Villagers') {
      setTypeItems(villagersList)
    } else if (type === 'Fishs') {
      setTypeItems(fishsList)
    }
  }, [type])

  const changeItem = idI => {
    const newitem = typeItems.filter(e => e.name === idI)
    setIdItem(newitem[0].id)
    setName(newitem[0].name)
    setImageUrl(newitem[0].image_url)
  }

  const createSale = e => {
    e.preventDefault()
    const newSale = {
      id: uuid(),
      type: type,
      idMother: name,
      price: price,
      quantity: quantity,
      user: user,
      name: name,
      image_url: imageurl
    }
    dispatch(addSale(newSale))
    history.push('/')
  }

  return (
    <div>
      <DisplayForm
        typeStypealeItems={type}
        setType={setType}
        options={options}
        typeItems={typeItems}
        setTypeItems={setTypeItems}
        price={price}
        setPrice={setPrice}
        quantity={quantity}
        setQuantity={setQuantity}
        createSale={createSale}
        changeItem={changeItem}
      />
    </div>
  )
}

export default FormSale
