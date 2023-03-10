import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBugs, getFishs, getVillagers } from '../../../actions/nookipedia'
import DisplayForm from './displayForm'
import { getToken } from '../../../actions/token'
import { incrementUser } from '../../../actions/user'
import { addSale } from '../../../actions/sales'
import { v4 as uuid } from 'uuid';
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const FormSale = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getVillagers())
    dispatch(getBugs())
    dispatch(getFishs())
  }, [])

  const { t, i18n } = useTranslation()
  const [options, setOptions] = useState([
    t('sale.villagers'),
    t('sale.fishs'),
    t('sale.bugs'),
    t('sale.arts')
  ])

  const history = useHistory()
  const [type, setType] = useState(String(t('sale.villagers')))
  const villagersList = useSelector(state => state.nookipedia.villagers)
  const fishsList = useSelector(state => state.nookipedia.fishs)
  const bugsList = useSelector(state => state.nookipedia.bugs)
  const artsList = useSelector(state => state.nookipedia.artworks)
  const [typeItems, setTypeItems] = useState(villagersList)
  const [idItem, setIdItem] = useState()
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [imageurl, setImageUrl] = useState()
  const [name, setName] = useState()
  const user = useSelector(state => state.user.userValue)

  useEffect(() => {
    if (type === String(t('sale.villagers'))) {
      setTypeItems(villagersList)
    } else if (type === String(t('sale.fishs'))) {
      setTypeItems(fishsList)
    } else if (type === String(t('sale.bugs'))) {
      setTypeItems(bugsList)
    } else if (type === String(t('sale.arts'))) {
      setTypeItems(artsList)
    }
  }, [type])

  useEffect(() => {
    setIdItem(typeItems[0].id)
    setName(typeItems[0].name)
    setImageUrl(typeItems[0].image_url)
  }, [typeItems])

  const changeItem = idI => {
    console.log(idI)
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
