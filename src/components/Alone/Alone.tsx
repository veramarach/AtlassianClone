import React from 'react'
import styled from "@emotion/styled"
import pic1 from "../../assets/CareersCenterMobile.svg"
import pic2 from "../../assets/CareersRight_540x450.svg"

const Container = styled.div`
       text-align: center;
       margin-top:170px;

       p{
        letter-spacing:2px;
        color: #425285;
       }
    button{
        background-color:#0052CC;
        color: white;
        cursor: pointer;
        width: 150px;
        height: 40px;
        border: transparent;
        font-size: 15px;
        border-radius:2px;
        margin-top:10px;

        :hover{
            background-color:#0047B3;
            color: white;
        }
    }

`
const H = styled.h3`
  color: #2684FF;
  letter-spacing:3px;
  font-size:15px;
`
const H2= styled.h2`
   color: #253858;
   font-size: 40px;
   font-weight:bolder;
`

const Hold = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    bottom:70px;
`
const First = styled.div`
   img{
    width: 500px;
    height: 500px;
   }
`
const Second = styled.div`
   position: relative;
   bottom: 60px;

   img{
    width: 500px;
    height: 500px;
   }
`

const Alone:React.FC = () => {
  return (
    <Container>
        <H>CAREERS</H>
        <H2>We can't do it alone</H2>
        <p>We have an ambitious road ahead, and we're<br />looking for people to join our global team to help<br />shape the future of Atlassian</p>
        <button>Join the team</button>

        <Hold>
            <First>
                <img src={pic1}/>
            </First>
            <Second><img src={pic2}/></Second>

        </Hold>

    </Container>
  )
}

export default Alone