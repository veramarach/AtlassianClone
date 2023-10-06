import React from 'react'
import styled from '@emotion/styled'

interface Iprops{
    avatar:any;
    title:string;
    text:string;

}

const Container = styled.div`
    display: flex;
    gap:20px;
    margin-left:20px;
`
const Logo = styled.div`
       background-color:#c7c7c7;
       width: 30px;
       height: 30px;
       padding: 10px;



       img{
        width: 30px;
        height: 30px;
       }
`

const Box = styled.div` 
     margin: 10px;
`
const H2 =styled.div``

const P = styled.p`
    font-size: 12px;
    line-height: 10px;
    
`

const card:React.FC<Iprops> = ({avatar, title, text}) => {
  return (
    <Container>
       <Logo>
        <img src={avatar} />
       </Logo>

       <Box>
       <H2>
        {title}
       </H2>

       <P>
       {text}
       </P>
       </Box>

      
      
    </Container>
  )
}

export default card