import styled from '@emotion/styled'
import React from 'react'
import PurpleCard from './PurpleCard'
import pic1 from "../../assets/Blog_360x265@2x.jpg"
import pic2 from '../../assets/Team Playbook_360x265@2x.png'
import pic3 from '../../assets/Agile Coach_360x265@2x.png'


const Container = styled.div`
       width: 100%; 
       padding: 120px;
       
       
`
const Hold = styled.div`
     height: 300px;
     width: 400px;
      display: flex;
      
     
     gap: 30px;
     
     
`
const Purple :React.FC= () => {
  return (
    <Container>
        <Hold>
            <PurpleCard
            avatar={pic1}
            title='Work Life'
            text='Real-life advice, inspiration and stories from the working world today'
            span='Read our blog'
            bg='#EAE6FF'
            
            
            />

            <PurpleCard
            avatar={pic2}
            title='Atlassian Team Playbook'
            text='Solve common team challenges with these group exercise'
            span='Check team health'
            bg='#E6FCFF'
            
            
            />

           <PurpleCard
            avatar={pic3}
            title='The Agile Coach'
            text='Atlassians no-nonsence guide to agile development'
            span='Visit our services'
            bg="#DEEBFF"
            
            />
           
        
        </Hold>

        
    </Container>
    
  )
}

export default Purple