

import styled from '@emotion/styled'
import React from 'react'
import Card2 from './Card2'
import {PiFilesDuotone} from "react-icons/pi"
import {BsLightningChargeFill} from "react-icons/bs"
import {TbVectorTriangle } from "react-icons/tb"
import {BsShieldFillCheck} from 'react-icons/bs'
import {ImOffice} from "react-icons/im"
import {BiRightArrowAlt} from "react-icons/bi"

const Container = styled.div`
     position: fixed;
     width: 100%;
     height: calc(100vh - 70px);
     right: 0;
     bottom: 0;
     
     background-color: rgba(0, 0, 0, 0.3);
     

`
const BoxCard= styled.div`
     background-color:white;
     padding:40px;

     h3{
        margin-left:20px;
     }
            
`
const Hold = styled.div`
    display: flex;
    gap:30px;
    margin: 20px;
    width: 100%;

`
const Holder= styled.div`
      display: flex;
      justify-content: space-between;
      position: relative;
      bottom: 200px;
      width: 70%;  
      color: #48576E;
      
`
const Team = styled.div`
    
      
      a{
        display: flex;
        flex-direction:column;
        margin:20px;
      }
`
const T = styled.h3`
     
`
const Function = styled.div`
       
     a{
        display: flex;
        flex-direction:column;
        margin:20px;
     }
`

const Industry= styled.div`
      
      a{
        display: flex;
        margin: 20px;
        
      }
`
const Box = styled.div`
    width: 400px;
    height: 400px;
    background-color :#F4F5F7;
    color:  #48576E;
    padding: 40px;
     p{
        width: 300px;
        font-size: 12px;
     }

     span{
        color: #0052CC;
     }
`
const Help = styled.div`
    margin-top:50px;
`
const H2 = styled.div`
   font-size: 12px;
   margin-top: 10px;
`
const Security = styled.div`
      display: flex;
      gap: 10px;
      margin-top:10px;
`
const IconBox = styled.div``
const Text = styled.div``


interface Iprops{
    changeSolutionShow: () => void
}

const SolutionDropDown:React.FC<Iprops> = ({changeSolutionShow}) => {
  return (
    <Container onClick = {changeSolutionShow}>
        
        <BoxCard>
        <h3>FEATURED</h3>
        <Hold>
        <Card2
        title= "Work Management"
        bg = "#CEDDFF"
        avatar={<PiFilesDuotone/>}
        text= "Manage projects and align goals across all teams to achieve deliverables."
        />

        <Card2
        title='IT Service Management'
        bg= "#D2EEF5"
        avatar={<BsLightningChargeFill/>}
        text='Enable dev,IT ops, and business teams to deliver great service at high velocity'
        
        />

        <Card2
         title='Agile & DevOps'
         bg='#F5E9F1'
         avatar={<TbVectorTriangle/>}
         text='Run a world class agile software organization from discovery to delivery and operations'
        
        />
        <Box>
            <H2>
            What's New
            </H2>
            <h4>
                Atlassian Together
            </h4>
            <p>Get Atlassian work management ptoducts in <br />one convenient package for enterprise teams.</p>
            <span>Learn more {<BiRightArrowAlt/>}</span>

        <Help>
            <H2>YOU MIGHT FIND HELPFUL</H2>

              <Security>
                <IconBox> {<BsShieldFillCheck/>} </IconBox>
                <Text>Atlassian Trust & Security</Text>
             </Security>

             <Security>
               <IconBox> {<ImOffice/>} </IconBox>
                <Text>Customer Case Studies</Text>
              </Security>
        </Help>
           
        </Box>
        </Hold>
         
         <Holder>
            <Team>
                <T>BY TEAM SIZE </T>
                <a>Enterprise</a>
                <a>Small Business</a>
                <a>Startup</a>
                <a>Non-profit</a>

            </Team>

            <Function>
                <T>BY TEAM FUNCTION</T>
                <a>Software Development</a>
                <a>IT</a>
                <a>Finance</a>
                <a>Marketing</a>
                <a>HR</a>
            </Function>

            <Industry>
                <T>BY INDUSTRY</T>
                <a>Retail</a>
                <a>Telecommunications</a>
                <a>Professional Services</a>
                <a>Government</a>

            </Industry>
            
         </Holder>
          
       
        </BoxCard>

        

    </Container>
  )
}

export default SolutionDropDown