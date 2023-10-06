import styled from '@emotion/styled'
import React from 'react'

interface Iprops{
    bg:string;
    cl:string;
    title:string;

}
const But = styled.button<{bg:string; cl:string; }>`
      background-color:${(props) => props.bg};
      color:${(props) => props.cl};
      padding: 8px 15px 8px 15px;
      transition:all 350ms;
      cursor: pointer;
      font-family: "Montserrat", sans-serif;
      border: transparent;

      :hover{
        background-color:#c7c7c7;
      }
`

const Button:React.FC<Iprops> = ({bg, title, cl}) => {
  return (
    <But bg={bg} cl={cl}>
      {title}
    </But>
  )
}

export default Button