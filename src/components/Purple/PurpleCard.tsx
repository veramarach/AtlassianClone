import React from 'react'
import styled from "@emotion/styled"

interface Iprops{
    avatar:any;
    title:string;
    text:string;
    span:string;
    bg:string;

}

const Container = styled.div``
const Card = styled.div<{bg:string;}>`
      background-color:${(props) => props.bg};
      height: 450px;
      width: 400px;
      text-align: center;
      :hover{
        box-shadow: rgba(27, 31, 35, 0.15) 5px 5px 5px 5px;
      }
      

      img{
        width: 400px;
        height: 250px;
      }
`
const H = styled.h3`
   color: #253858;
`
const P = styled.p`
    width: 300px;
    margin-left:30px;
    color:#2D4260;
`
const S = styled.span`
  color: #1A75FF;
`

const PurpleCard:React.FC<Iprops> = ({avatar, title, text, span, bg}) => {
  return (
    <Container>
        <Card bg = {bg}>
            <img src={avatar}/>
            <H> {title}</H>
            <P> {text}</P>
            <S> {span}</S>

        </Card>


    </Container>
  )
}

export default PurpleCard