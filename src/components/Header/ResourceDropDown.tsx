import styled from '@emotion/styled';
import React from 'react'
import Card3 from './Card3';
import pics from "../../assets/Team23_Event2x.png"


const Container = styled.div`
      position: fixed; 
     height: calc(100vh - 70px);
     background-color: rgba(0, 0, 0, 0.3);
     width: 100%;
     right: 0;
     left: 0;
     bottom: 0;
     
`

const Card = styled.div`
       background-color :white;
       padding:40px;
       
`
const Hold = styled.div`
    display: flex;
    gap: 70px;
    margin-left:30px;
    justify-content: space-between;

`
const BoxCard = styled.div`
      width: 500px;
      height: 500px;
      background-color: #F4F5F7;
      color: #425284;
      padding: 20px;
      margin-left:100px; 

      h4{
        font-size: 15px;
      }

      p{
        font-size: 12px;
      }

      span{
        color: #0052D4;
      }
      img{
        width: 300px;
        height: 200px;
      }
`
const Logo = styled.div``
const Box = styled.div`
    display: flex;
    /* gap: 20px; */
    background-color: #E6FCFF;
    width: 50%;
    height: 150px;
    /* padding: 20px; */
    align-items: center;
    justify-content: space-between;
    margin-left:30px;
    position: relative;
    bottom: 250px;


    button{
        width: 140px;
        height: 40px;
        color: #4A52CC;
        border-color: #4A52CC;
        background-color: #E6FCFF;
        margin-right:20px;
        cursor: pointer;
    }
    
`
const BoxHold = styled.div`
    /* text-align: center; */
    color: #515277;
    margin-left:20px;

    h4{
        font-size: 13px;
    }

    p{
        font-size: 12px;
    }
`

interface Iprops{
    changeResourceShow: ()=> void;

}

const ResourceDropDown:React.FC<Iprops> = ({changeResourceShow}) => {
  return (
    <Container onClick={changeResourceShow}>
        <Card>
            <Hold>
                <Card3
                title='Learn '
                text1='Atlassian University'
                text2='Atlassian Playbook'
                text3='Product Documentation'
                text4='Developer Resources'
                text5=''
                text6=''
                />

                <Card3
                title='Support'
                text1='Atlassian Community'
                text2='Atlassian Support'
                text3='Atlassian Migration Program'
                text4='Enterprise Services'
                text5='Partner Support'
                text6='Purchasing & Licensing'
                />

                <Card3
                title='Connect'
                text1='About Us'
                text2='Careers'
                text3='Work Life Blog'
                text4='Events'
                text5=''
                text6=''
                />

                <BoxCard>
                    <h4>WHATS"S NEW</h4>
                    <Logo>
                        <img src={pics}/>
                    </Logo>
                    <h4>Atlassian Team"23</h4>
                    <p>Catch up on the latest Atlassian product<br />announcement and innovations shared live <br />on stage in las Vegas.</p>
                    <span>Watch Now</span>

                </BoxCard>
              
            </Hold>
            <Box>
                <BoxHold>
                <h4>Support for Server products ends February 15,2024</h4>
                 <p>With end of support for our  server products fast approaching,create a winning plan for<br />your Cloud migration with the Atlassian Migration Program</p>
                </BoxHold>
                <button>Assess my options</button>

            </Box>
         
        </Card>
    </Container>
  )
}

export default ResourceDropDown
