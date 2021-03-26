import React from 'react'
import { Header, OptForm, Feature } from '../components'
import * as ROUTES from '../constants/routes'

export default function HeaderContainer({children}) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src='https://divesh2201.github.io/netflix/images/icons/logo.svg' alt="Netflix" />
        <Header.ButtonLink to={ROUTES.SIGN_IN} >Sign In</Header.ButtonLink>
      </Header.Frame>
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
      {children}
    </Header>
  )
}

