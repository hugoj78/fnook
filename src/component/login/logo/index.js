import React from 'react'
import styled from 'styled-components'

const Logo = () => {
  return (
    <div>
      <ImageContainer src='marvelLogo.png' alt='logo'/>
    </div>
  )
}

const ImageContainer = styled.img`
  width: ${props => props.theme.logoWitdh};
  transform: ${props => props.theme.logoTransform};
  margin: ${props => props.theme.logoMargin};
`

export default Logo