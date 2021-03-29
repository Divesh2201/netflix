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
      {children}
    </Header>
  )
}

