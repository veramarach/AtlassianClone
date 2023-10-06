import React from 'react'
import styled from '@emotion/styled';


const Container = styled.div``
const Box1 = styled.div<{bg : string}>`
      height: 120px;
      width:300px;
      background-color:${(props) => props.bg};
      padding: 20px;
`
const Icon = styled.div` 
     gap:130px;
     display: flex;
     margin-top:10px;
     
`
const F = styled.div`
    font-size:30px;
`
const H2= styled.p`
    font-size: 15px;
    
`


interface Iprops{
    title:string;
    text:string;
    avatar:any;
    bg:string;

}

const Card2 :React.FC<Iprops>= ({title, text, avatar, bg}) => {
  return (
    <Container>
        <Box1 bg={bg}>
            <Icon>
                {title}
                <F>{avatar} </F>
            </Icon>
            <H2>{text} </H2>
        </Box1>


    </Container>
  )
}

export default Card2