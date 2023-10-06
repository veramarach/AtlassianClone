import React from 'react'
import styled from "@emotion/styled"



const ButHold = styled.button`
    color: #0065FF;
    background-color:#DEEBFF;
    width: 300px;
    height: 90px;
    border-radius:50px;
    border: transparent;
    font-size: 18px;

    :hover{
        background-color: #0065FF;
        cursor: pointer;
        color: white;
        transition:all 350ms;
    }

`
const Card = styled.div``

interface Iprops{
     
    text:string;
    
    
}

const Button2 :React.FC<Iprops>= ({text}) => {
  return (
    <ButHold >
       {text}
       <Card>
        
       </Card>
    </ButHold>
  )
}

export default Button2