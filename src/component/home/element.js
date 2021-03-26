import styled from 'styled-components'

export const Container = styled.div`
  /* margin: 10px; */
`
export const ContainerVillagers = styled.div`
  text-align: center;
`

export const TitleVillager = styled.p`
  font-size: 30px;
  text-align: left;
  padding-left: 30px;
`

export const MoreVillager = styled.button`
  width: 100px;
  height: 40px;
  background-color: ${props => props.theme.headerButton};
  border: none;
  border-radius: 10px;
`

export const ColumnVillagers = styled.div`
  width: 100%;
  height: 150px;
  position: center;
  font-size: 20px;
  text-align: center;
  margin: 0px 40px;
  flex: 1;
`

export const RowVillagers = styled.div`
  margin-top: 20px;
  display: flex;
  flex-flow: row wrap;
  align-content: space-between;
  justify-content: space-between;
`

export const ImgVillagers = styled.img`
  height: 80px;
  width: auto;
`
