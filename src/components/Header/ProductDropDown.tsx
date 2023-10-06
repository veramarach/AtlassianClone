import React from 'react'
import styled from '@emotion/styled'
import Card from '../../components/Card'
import pics from "../../assets/jira%20software-icon-gradient-blue.svg"
import pics1 from "../../assets/jira service desk-icon-gradient-blue.svg"
import pics2 from "../../assets/confluence-icon-gradient-blue.svg"
import pics3 from "../../assets/trello-icon-gradient-blue.svg"
import pics4 from "../../assets/logos-atlas-icon-gradient-blue.svg"
import pics5 from "../../assets/Jira Product Discovery-icon-blue (1).svg"
import {BsArrowRightShort} from "react-icons/bs"
import {BsMapFill} from "react-icons/bs"
import {BsCloudCheckFill} from "react-icons/bs"





interface Iprops{
    changeProductShow: () => void
}
const Container = styled.div`
     position: fixed;
     background-color: rgba(0, 0, 0, 0.3);
     width: 100%;
     height: calc(100vh - 70px);
     right: 0;
     left: 0;
     bottom: 0;
     /* top: 70px; */
     
`
const  BoxCard = styled.div`
     background-color:white;
     padding: 40px;
     color:#F4F5F7;
     

`
const First = styled.div`
      margin-left:20px;
`
const Cloud = styled.div`
     margin-left:20px;
     line-height:10px;
     display: flex;
     gap: 10px;
`
const Product = styled.div``

const Migrate = styled.div`
      margin-left:20px;
      position: relative;
      top: 20px;
      
      display: flex;
      gap: 10px;
`
const Program = styled.div`
       /* line-height:40px; */
`
const Icon = styled.div``


const FirstBox = styled.div` 
   span{
    color: #0052CF;
    padding: 20px;
   }   
   
   `
const Line= styled.div`
    color: #C1C7D0;
    margin-left:20px;
  
`

const Market = styled.div`
  padding: 20px;
  position: relative;
  top:30px;

  p{
    font-size: 12px;
  }
`

const Hold = styled.div`  
     display: flex;
     gap:40px;

     
`
const SecondBox = styled.div``
const ThirdBox = styled.div`
       h4{
        margin: 20px;
       }

       h3{
        margin-left:20px;
       }

       span{
        display: flex;
        color: #0052CC;
        margin-left:20px;
       }

      position: relative;
      bottom:60px;
      left: 80px;
      background-color:#F4F5F7;
      width: 800px;
      height: 60vh;
      margin-left:30px

      
`


const ProductDropDown:React.FC<Iprops> = ({changeProductShow}) => {
  return (
    <Container onClick={changeProductShow}>
        <BoxCard>
          
          <First>
            <h3>Featured</h3>
          </First>

          
          <Hold>
          <FirstBox>
            <Card
            title='Jira Software'
            text ="Project and issue tracking"
            avatar={pics}
            />

            <Card
            title= "Jira Service Management"
            text='High velocity ITSM'
            avatar = {pics1}
            />

            <span>view all products {<BsArrowRightShort/>} </span>

            <br/>
            <br/>
            <br/>
            

            <Line>________________________________________________________</Line>
             
            <Market>
                Marketplace
                <p>Connect thousands of apps and integrations for all your Atlassian products {<BsArrowRightShort/>} </p>
            </Market>


          </FirstBox>

          

          <SecondBox>
            <Card 
            title='Confluence'
            text='Content Collaboration'
            avatar={pics2}
            />
            
            <Card 
            title='Trello'
            text='Visual Project management'
            avatar={pics3}
            />
          </SecondBox>

          <ThirdBox>
             <h4>What's New</h4>

             <Card
             title='Atlas'
             text='Teamwork directory'
             avatar={pics4}
             />

            <Card     
             title='Jira Product Discovery'
             text='prioritizing and roadmapping'
             avatar={pics5}
             />

             <span>
             View all
             <Icon> {<BsArrowRightShort/>} </Icon>
             </span>

             <br />
             <br />
             <br />
             <br />
             <br />

             <h4>YOU MIGHT FIND HELPFUL</h4>
             <Cloud>
                {<BsMapFill/>}
               <Product>Cloud Product Roadmap</Product>
             </Cloud>

             <Migrate>
                  {<BsCloudCheckFill/>}
                <Program>Atlasssian Migration Program</Program>
             </Migrate>


          </ThirdBox>

          
          </Hold>
          
        </BoxCard>
        

    </Container>

  );
  
}

export default ProductDropDown