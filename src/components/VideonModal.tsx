import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
     position: fixed;
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
     background-color:rgba(0, 0 , 0, 0.7);
     display: flex;
     justify-content: center;
     align-items: center;
`
const Video = styled.video`
    height: 400px;
    width: 400px;
`

const VideonModal:React.FC = () => {
  return (
    <Container>
        <Video src='https://youtu.be/adf9jUIHKgI' 
        controls
        autoPlay
        
        />


    </Container>
  )
}

export default VideonModal