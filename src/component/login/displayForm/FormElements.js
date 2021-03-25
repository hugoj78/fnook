import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20vh;
  font-size: 1.5rem;
  background-color: ${props => props.theme.backgroundColor};
`

export const FormContainer = styled.form`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
`

export const InputContainer = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid $gray;
  outline: 0;
  font-size: 1.3rem;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
`

export const LabelContainer = styled.label``

export const ButtonContainer = styled.button``

export const DivContainer = styled.div``
