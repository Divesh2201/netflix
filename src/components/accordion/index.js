import React, { createContext, useContext, useState } from 'react'
import { Container, Inner, Item, Frame, Header, Body, Title } from './styles/accordion'

const ToggleContext = createContext()

export default function Accordion({children, ...restProps}) {
  return (
    <Container {...restProps}>
    <Inner>
      {children}
    </Inner>
    </Container>
  )
}

Accordion.Frame = ({children, ...restProps}) => <Frame {...restProps}>{children}</Frame>

Accordion.Title = ({children, ...restProps}) => <Title {...restProps}>{children}</Title>

Accordion.Item = ({children, ...restProps}) => {

  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  )
}

Accordion.Header = ({children, ...restProps}) => {
  const { toggleShow, setToggleShow } = useContext(ToggleContext)
  return (
    <Header onClick={() => setToggleShow(toggleShow => !toggleShow)}toggleShow={toggleShow}{...restProps}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  )
}

Accordion.Body = ({children, ...restProps}) => {
  const { toggleShow, setToggleShow } = useContext(ToggleContext)
  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
}

