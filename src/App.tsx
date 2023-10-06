import React from 'react'
import GlobalStyle from './components/GlobalStyle'
import Header from './components/Header/Header'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer/Footer'

const App:React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <LandingPage/>
      <Footer/>
    </div>
  )
}

export default App