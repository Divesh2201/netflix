import React from 'react'
import { Inner, Item, Container, Pane, Title, SubTitle, Video } from './styles/jumbotron'

export default function Jumbotron({ children, direction = 'row', ...restProps }) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>
        {children}
      </Inner>
    </Item>
  )
}

Jumbotron.Container = ({children, ...restProps}) => {
  return <Container {...restProps}>{children}</Container> 
}
Jumbotron.Title = ({children, ...restProps}) => {
  return <Title {...restProps}>{children}</Title> 
}
Jumbotron.SubTitle = ({children, ...restProps}) => {
  return <SubTitle {...restProps}>{children}</SubTitle> 
}
Jumbotron.Video = ({...restProps}) => {
  return <Video {...restProps} /> 
}
Jumbotron.Pane = ({children, ...restProps}) => {
  return <Pane {...restProps}>{children}</Pane> 
}

