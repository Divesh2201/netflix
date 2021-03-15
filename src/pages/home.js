import React from 'react'
import { FooterContainer } from '../containers/footer';
import JumbotronContainer from '../containers/jumbotron'
import FaqsContainer from '../containers/faqs'
function Home() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer /> 
    </>
  )
}

export default Home
