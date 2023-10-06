
import styled from '@emotion/styled'
import Button2 from './Button2'
import {BiRightArrowAlt} from "react-icons/bi"
import Card from '../Card'
import pic from "../../assets/jira service desk-icon-gradient-blue.svg"
import pics2 from "../../assets/confluence-icon-gradient-blue (1).svg"
import pics3 from "../../assets/trello-icon-gradient-blue.svg"
import pics4 from "../../assets/solutions_1_Con_Trello_JWM.svg"
const Container = styled.div`
      padding: 30px;
   
`
const Holder = styled.div`
   display: flex;
   justify-content: center;
   gap: 20px;

`


const First = styled.h2`
    font-size: 40px;
    font-weight:300px;
    text-align: center;
    padding: 30px;
    color: #253858;
`
const P =styled.div`
    color: #5A67FF;
    font-size: 15px;
    
`
const BoxHold = styled.div`
      padding: 20px;
      position: relative;
      top:30px;
      display: flex;
      
`

const Text = styled.div`
     margin-left:20px;
   
`
const H = styled.h3`
   color: #333858;
   width: 300px;
   font-size: 24px;

`

const CardHold = styled.div`
       margin-top:40px;
       font-size:22px;
    
`
const ImageHold = styled.div`
      img{
        width: 800px;
        height: 800px;
        position: relative;
        bottom:40px;
      }
`

const H4 = styled.h3``
const TextHold = styled.div`
     text-align: center;
     color: #253858;
`

const Design:React.FC = () => {

    
  return (
    <Container>
       
        <First>Atlassian solutions are designed for all types of work</First>
        <Holder>
        
            <Button2 
            text="Work Management"
            />
    
            <Button2
            text = "IT Service Management"
            />
         
            <Button2
            text="Agile and DevOps"
        
            />
         
        </Holder>

        <BoxHold>
           <Text>
           <H>Make work flow across teams while connecting back to company goals</H>
           <P>Work differently, together {<BiRightArrowAlt/>}</P>

            <CardHold>
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

           <Card
           avatar={pic}
           title='Jira Service Mnagement'
           text='High-velocity ITSM'
           />

           <Card
           avatar={pic}
           title='Jira Service Mnagement'
           text='High-velocity ITSM'
           />

            </CardHold>  
           </Text>
            
           <ImageHold>
              <img src={pics4}/>
           </ImageHold>

        </BoxHold>
         <TextHold>
         <H4>
          join the 250,000+ companies that use our software to power team collaboration 
        </H4>
        <P>see all customers {<BiRightArrowAlt/>}</P>
         </TextHold>
        
           
        
    </Container>
  )
}

export default Design