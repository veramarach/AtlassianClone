import React from 'react'
import Hero from './Hero/Hero'
import Design from './Design/Design'
import Logo from './Logo/Logo'
import Team from './Team/Team'
import Purple from './Purple/Purple'
import Experience from '../components/Experience'
import Alone from './Alone/Alone'


const LandingPage :React.FC= () => {
  return (
    <div><Hero/>
    <Design/>
    <Logo/>
    <Team/>
    <Purple/>
    <Experience/>
    <Alone/>
    </div>
  )
}

export default LandingPage