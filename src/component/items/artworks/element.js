import styled from 'styled-components'
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const ParagrapheContainer = styled.div``
export const ArrowRight = styled(AiFillCaretRight)`
  width: 20px;
  height: 20px;
  color: white;
`
export const ArrowLeft = styled(AiFillCaretLeft)`
  width: 20px;
  height: 20px;
  color: white;
`

export const ColumnVillagers = styled.div`
  display: flex;
  width: 200px;
  height: 150px;
  position: center;
  font-size: 10px;
  text-align: center;
  margin: 0px 25px 10px;
  background-color: transparent;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const RowVillagers = styled.div`
  margin-top: 20px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`

export const ImgVillagers = styled.img`
  height: 80px;
  width: auto;
  margin: 10px;
`

export const BtnVillager = styled.button`
  color: #fff;
  background-color: #31b0d5;
  border-color: #1b6d85;
`
