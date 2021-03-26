import React from 'react'
import {
  Container,
  FormContainer,
  DivContainer,
  LabelContainer,
  InputContainer,
  ButtonContainer,
  SelectType
} from './FormElement.js'

const DisplayForm = ({
  setType,
  options,
  typeItems,
  price,
  setPrice,
  quantity,
  setQuantity,
  createSale,
  changeItem
}) => {
  return (
    <Container>
      <FormContainer>
        <DivContainer>
          <SelectType onChange={e => setType(e.target.value)}>
            {options.map(o => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </SelectType>
        </DivContainer>
        <DivContainer>
          <SelectType onChange={e => changeItem(e.target.value)}>
            {typeItems.map(i => (
              <option key={i.id} value={i.id}>
                {i.name}
              </option>
            ))}
          </SelectType>
        </DivContainer>
        <DivContainer>
          <InputContainer
            type='number'
            onChange={e => setPrice(e.target.value)}
            placeholder='Price'
            required
          />
        </DivContainer>
        <DivContainer>
          <InputContainer
            type='number'
            onChange={e => setQuantity(e.target.value)}
            placeholder='Quantity'
            required
          />
        </DivContainer>
        <ButtonContainer onClick={e => createSale(e)}>
          Metttre en vente
        </ButtonContainer>
      </FormContainer>
    </Container>
  )
}

export default DisplayForm
