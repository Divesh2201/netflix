import React from 'react'
import { FooterContainer } from '../containers/footer';
import JumbotronContainer from '../containers/jumbotron'
import HeaderContainer from '../containers/header'
import FaqsContainer from '../containers/faqs'
import { Feature, OptForm } from '../components';
function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
          <Feature.Subtitle>Watch anywhere. Cancel anytime.</Feature.Subtitle>
          <OptForm>
            <OptForm.Input placeholder='Enter Email Address' />
            <OptForm.Button>Try Now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer /> 
    </>
  )
}

export default Home
