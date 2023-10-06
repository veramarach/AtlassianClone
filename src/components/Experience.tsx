import styled from '@emotion/styled'
import React from 'react'
import pic4 from "../assets/ITSM High Velocity 23.png"
import pic5 from "../assets/Team23_Event2x.png"

const Container = styled.div`
     position: relative;
     top: 70px;
     width: 100%;
`
const Card = styled.div`
      display: flex;
      justify-content: space-evenly; 
      
      
`
const T = styled.h3`
    color: #2684FF;
    font-size: 15px;
    letter-spacing:2px;
`
const Bold = styled.div`
      margin-left:30px;

      span{
        color: #0098FF;
      }
`
const H = styled.p`
    color: #253858;
    font-size:32px;
    font-weight:bold;
`
const Logo = styled.div`
   gap: 30px;
   display: flex;
   margin-right:20px;
   
   img{
        height: 300px;
        width: 400px;
        
      }
   
`

const Event:React.FC = () => {
  return (
    <Container>
         <Card>
                <Bold>
                <T>EVENTS</T>
                <H>Hear from today's <br />fearless builders and <br />innovators</H>
                <span>Learn More</span>
                </Bold>
                
                
                <Logo><img src={pic4}/>
                <img src={pic5}/>
                </Logo>

               
               
            </Card>

    </Container>
  )
}

export default Event