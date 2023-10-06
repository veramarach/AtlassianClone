import React from 'react'
import styled from "@emotion/styled"


interface Iprops{
    title:string;
    text1:string;
    text2:string;
    text3:string;
    text4:string;
    text5:string;
    text6:string;

}

const Container = styled.div``
const H = styled.h4`
      color: #42526E;

`
const T = styled.div`
     margin-bottom:12px;
     color: #42526E;
`

const Card3 :React.FC<Iprops>= ({title, text1,text2,text3,text4,text5,text6}) => {
  return (
    <Container>
        <H> {title} </H>
        <T>{text1}</T>
        <T>{text2}</T>
        <T>{text3}</T>
        <T>{text4}</T>
        <T>{text5}</T>
        <T>{text6}</T>

    </Container>
  )
}

export default Card3;