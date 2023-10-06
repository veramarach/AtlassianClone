import React,{ useState } from 'react'
import styled from '@emotion/styled'
import pic from "../../assets/Atlassian-horizontal-blue-rgb (1).svg"
import {AiOutlineDown} from "react-icons/ai"
import {BsSearch} from "react-icons/bs"
import Button from "../Button/Button"
import ProductDropDown from './ProductDropDown'
import SolutionDropDown from './SolutionDropDown'
import ResourceDropDown from './ResourceDropDown'

const Container = styled.header`
     display: flex;
     justify-content: space-between;
     align-items: center;
     background-color: white;
     height: 70px;
     box-shadow:rgba(0,0,0,0.02) 0px 1px 3px 0px,
                rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
                z-index: 10;
`

const Hold = styled.div` 
     display: flex;
     align-items: center;
     margin-left:70px;
   
` 
const Navigation = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.div`
     
     img{
        width: 200px;
        margin-right:50px;
     }
`

const NavHold = styled.div`
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 10px 15px 10px 15px;
      border-radius:5px;
      transition:all 350ms;

      :hover{
        background-color: #c7c7c7;
      }
       
`
const Nav = styled.div`
`

const Span = styled.div`
      margin-top:5px;
      margin-left:5px;
`
const ButHold = styled.div`
    margin-right:70px;
    display: flex;
    gap:20px;
    align-items: center;
`
const Isearch = styled.div``



const Header :React.FC= () => {
    const [showProduct, setshowProduct, ] = useState<boolean>(false);
 
    const changeProductShow = () => {
        setshowProduct(!showProduct);
        setShowSolution(false)

        
    }
    
    const [showSolution, setShowSolution,] = useState<boolean>(false);
    const changeSolutionShow = () => {
        setShowSolution(!showSolution)
        setshowProduct(false)
    }

    const [showResource, setshowResource,] = useState<boolean>(false);
    const changeResourceShow = ()=> {
        setshowResource(!showResource)
        setShowSolution(false)
        
        
    }

  return (
    <Container>

        <Hold>
            <Logo>
                <img src={pic} />
            </Logo>

            <Navigation>
                <NavHold onClick={changeProductShow}>
                    <Nav>Products</Nav>
                    <Span> {<AiOutlineDown/>} </Span>
                </NavHold>
                {showProduct ? (
                    <div>
                       <ProductDropDown changeProductShow={changeProductShow} />
                    </div>
                ): null}
                    
                    <NavHold onClick={changeSolutionShow}>
                    <Nav>solutions</Nav>
                        <Span> {<AiOutlineDown/>} </Span>
                    </NavHold>
                    {showSolution ? (
                        <div>
                            <SolutionDropDown changeSolutionShow={changeSolutionShow}/>
                        </div>
                    ): null}


                    <NavHold onClick={changeResourceShow}>
                    <Nav>Resources</Nav>
                        <Span> {<AiOutlineDown/>} </Span>
                    </NavHold> 
                    {showResource ? (
                        <div>
                        <ResourceDropDown changeResourceShow={changeResourceShow}/>
                        </div> 
                    ): null} 
                    
            
            </Navigation>

        </Hold>

        <ButHold>

            <Isearch>{<BsSearch/>} </Isearch>
            <Button title="try now" bg="#0054BB" cl="white" />
             <Button  title="sign in" bg="transparent" cl="black"/>
        </ButHold>
    </Container>
  )
}

export default Header