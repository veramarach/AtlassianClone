import React from 'react'
import styled from "@emotion/styled"
import pic1 from "../../assets/Community@2x.jpg"

const Container = styled.div`
       display: flex;
       justify-content: center;
       margin-top:80px;
       gap: 60px;

    h2{
        color: #253858;
        font-weight:bolder;
        font-size:32px;
    }
`
const Card = styled.div`
      background-color:#FFFAE5;
      height: 400px;
      width: 600px;
      img{
        width: 600px;
        height: 200px;
      }
`
const H = styled.h4`
      font-size: 13px;
      color: #2684FF;
      font-weight:bolder;
      letter-spacing:5px;
`
const TextHold = styled.div``
const Text = styled.div`
      h3{
        color: #253858;
      }
     text-align: center;

     p{
        color: #3E4D65;
     }
`
const Join = styled.div`
     display: flex;
     justify-content: space-evenly;
     align-items: center;
     margin-top:40px;
`
const F1 =styled.div`
 color: #3B87F9;
 letter-spacing:2px;
    
`


const Team :React.FC= () => {
  return (
    <Container>
        <TextHold>
        <H>TEAM ESSENTIALS  </H>
        <h2>Explore resources to <br />unleash the potential <br />of your team</h2>
        </TextHold>
       
       
        <Card>
          <img src={pic1}/>
          <Text>
            <h3>Atlassian Community   </h3>
            <p>Connect globally and meet locally to get more out of our products.</p>
            <Join>
                <F1>search the forum</F1>
                <F1>Join our community</F1>
            </Join>
          </Text>
        </Card>

    </Container>
  )
}

export default Team