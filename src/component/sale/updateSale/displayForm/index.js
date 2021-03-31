import React from 'react'
import {
  Container,
  FormContainer,
  DivContainer,
  LabelContainer,
  InputContainer,
  ButtonContainer,
  SelectType,
  ImgVillagers
} from './FormElement.js'
import { useDispatch, useSelector } from 'react-redux'

const DisplayForm = ({
  filterItem,
  type,
  name,
  price,
  setPrice,
  quantity,
  setQuantity,
  updateItem
}) => {
  return (
    <Container>
      <ImgVillagers src={filterItem[0]?.image_url} />
      <FormContainer>
        <DivContainer>
          <SelectType disabled>
            <option key={type} value={type}>
              {type}
            </option>
          </SelectType>
        </DivContainer>
        <DivContainer>
          <SelectType disabled>
            <option key={name} value={name}>
              {name}
            </option>
          </SelectType>
        </DivContainer>
        <DivContainer>
          Price :
          <InputContainer
            type='number'
            value={price}
            onChange={e => setPrice(e.target.value)}
            min={1}
            required
          />
        </DivContainer>
        <DivContainer>
          Quantity :
          <InputContainer
            type='number'
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            min={1}
            required
          />
        </DivContainer>
        <ButtonContainer onClick={e => updateItem(e)}>Modifier</ButtonContainer>
      </FormContainer>
    </Container>
  )
}

export default DisplayForm
