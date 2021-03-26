import React from 'react'
import { FooterContainer } from '../containers/footer';
import JumbotronContainer from '../containers/jumbotron'
import HeaderContainer from '../containers/header'
import FaqsContainer from '../containers/faqs'
function Home() {
  return (
    <>
      <HeaderContainer>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer /> 
    </>
  )
}

export default Home
