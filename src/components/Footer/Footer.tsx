import React from 'react'
import styled from '@emotion/styled'
import pic1 from "../../assets/logos-atlassian-logo-gradient-horizontal-neutral.svg"
import pic2 from "../../assets/globe.svg"
import pic3 from "../../assets/facebook-badge.svg"
import pic4 from "../../assets/twitter (1).svg"
import pic5 from "../../assets/linked-in.svg"
import pic6 from "../../assets/youtube-round-gray-adg.svg"

const Container = styled.div`
      height: 500px;
      width: 100%;
      background-color: #F4F5F7;
      position: relative;
      bottom: 180px;
       
      
`
const Holder = styled.div`
       display: flex;
      justify-content: space-between; 
    
`
const Hold = styled.div`
    display: flex;
    flex-direction:column;
    
    
    text-align: left;
    padding:80px;
    

    span{
        padding-top: 50px;
        color: #2767FF;
    }

    a{
        margin-bottom:10px;
        font-size: 12px;
        color: #42526E;
        font-weight:lighter;
        position: relative;
        top:20px;
        :hover{
            cursor: pointer;
            text-decoration:underline;
        }
        
    }
`
const Logo = styled.div`
     margin-left:70px;
     
      img{
        width: 200px;
        height: 200px;
      }

`
const H = styled.div`
  color: #42526E;
  font-weight:bold;
  font-size: 15px;

`
const Line = styled.div`
    font-weight:lighter;
    position: relative;
    bottom:50px;

`
const Terms = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;

      img{
        margin-right:20px;
        
      }
      
      
`
const H6 = styled.text`
    display: flex;
    gap:20px;
    color: #485F80;
    font-size: 15px;
    margin-right:50px;

    
      
  `
  const Social= styled.div`
  display: flex;
  margin-left:20px;
     img{
        width: 30px;
        height: 30px;
     }
  `
  const Face = styled.div`
    img{
        width: 20px;
        height: 20px;
    }
  `

const Footer :React.FC= () => {
  return (
    <Container>
        
      <Holder> 
            <Logo>
                <img src={pic1}/>
            </Logo>
            <Hold>
                <H>PRODUCTS</H>
                <a>Jira Software</a>
                <a>Jira Align</a>
                <a>Jira Service Management</a>
                <a>Jira Product Discovery</a>
                <a>Confluence</a>
                <a>Trello</a>
                <a>Bitbucket</a>
                <span>View all products</span>
            </Hold>

            <Hold>
                <H>RESOURCES</H>
                <a>Technical Support</a>
                <a>Purchasing & Licensing</a>
                <a>Atlassian Community</a>
                <a>Knowledge base</a>
                <a>Marketplace</a>
                <a>My Account</a>
                <span>Create support ticket</span>
            </Hold>

            <Hold>
                <H>EXPAND & LEARN</H>
                <a>Partners</a>
                <a>Training & Certification</a>
                <a>Documentation</a>
                <a>Developer Resources</a>
                <a>Enterprise services</a>
                <span>View all resources</span>

            </Hold>

            <Hold>
                <H>ABOUT ATLASSIAN</H>
                <a>Company</a>
                <a>Career</a>
                <a>Events</a>
                <a>Blogs</a>
                <a>Atlassian Foundation</a>
                <a>Investor Relations</a>
                <a>Trust & Security</a>
                <span>Contact us</span>
            </Hold>
       </Holder>
            <Line>___________________________________________________________________________________________________________________________________________________________________________________________________</Line>

            <Terms>
                <img src={pic2}/>
                <H6>
                   <div> English</div>
                    
                    <div> Privacy policy</div>
                    
                    <div> Notice at collection</div>
                    
                    <div> Terms</div>
                    
                    <div> Impressum</div>
                     <div>Copyright 2023 Atlassian</div>

                </H6>
                <Social>
                    
                    <Face><img src={pic3}/></Face>
                    <img src={pic4}/>
                    <img src={pic5}/>
                    <img src={pic6}/>

                </Social>

            </Terms>

        

    </Container>
  )
}

export default Footer