import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Loading = () => {
  return (
    <>
      <Container>
        <ImageAnimated
          variants={variantImg}
          animate='animated'
          src='loading.png'
        />
      </Container>
    </>
  )
}

const variantImg = {
  animated: {
    rotate: 360,
    transition: { ease: 'linear', duration: 8, repeat: Infinity }
  }
}

const ImageAnimated = styled(motion.img)`
  width: 250px;
`

const Container = styled.div`
  text-align: center;
  margin-top: 250px;
`

export default Loading
