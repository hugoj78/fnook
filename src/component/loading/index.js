import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Loading = () => {
  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '250px' }}>
        <ImageAnimated
          variants={variantImg}
          animate='animated'
          src='loading.png'
        />
      </div>
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

export default Loading
