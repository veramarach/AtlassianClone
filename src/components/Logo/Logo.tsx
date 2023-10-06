import React from 'react'
import styled from '@emotion/styled'
import pic1 from "../../assets/kiva.svg"
import pic2 from "../../assets/twitter.svg"
import pic3 from "../../assets/redfin.svg"
import pic4 from "../../assets/nasa.svg"
import pic5 from "../../assets/audi.svg"
import pic6 from "../../assets/castlight.svg"

const Container = styled.div`

   width: 100%;
   height: 200px;
   background-color:#E3EEFF;

`
const Card = styled.div` 
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const Logos = styled.div`
  img{
    width: 100px;
    height: 100px;
  }

`

const Logon = styled.div`
     img{
        width: 200px;
        height: 200px;
     }
    
`

const Logo:React.FC = () => {
  return (
    <Container>
        <Card>
         <img src={pic1}/>
         <img src={pic2}/>
         <img src={pic3}/>
         <Logos><img src={pic4}/></Logos>

         <img src={pic5}/>
         
         <Logon><img src={pic6}/></Logon>
        </Card>
    </Container>
  )
}

export default Logo