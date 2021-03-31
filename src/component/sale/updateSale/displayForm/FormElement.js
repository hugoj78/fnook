import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20vh;
  min-height: 10vh;
  font-size: 1.5rem;
`
export const ImgVillagers = styled.img`
  height: 100px;
  width: auto;
  position: center;
  text-align: center;
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
  border-bottom: 2px solid ${props => props.theme.textColor};
  &::placeholder {
    color: ${props => props.theme.textColor};
  }
  outline: 0;
  font-size: 1.3rem;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  color: ${props => props.theme.textColor};
`

export const LabelContainer = styled.label``

export const ButtonContainer = styled.button`
  border-radius: 4px;
  background: ${props => props.theme.buttonColor};
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  margin-top: 24px;
`

export const SelectType = styled.select``

export const DivContainer = styled.div``
