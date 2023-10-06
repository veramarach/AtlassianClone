import {Global, css} from "@emotion/react"

const GlobalStyle = () => {
  return (
    <Global 
    styles={css`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Raleway:wgh00;500;t@3600;700;800&family=Roboto:ital,wght@1,300&display=swap');

        
body{
    font-family: 'Montserrat', sans-serif;
     margin: 0;
     padding: 0;

}

    `}
    
    
    
    
    />
  )
}

export default GlobalStyle