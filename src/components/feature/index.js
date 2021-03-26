import React from 'react'
import { Title, Container, Subtitle } from './styles/feature'

export default function Feature({children, ...restProps}) {
  return (
    <Container {...restProps}>{children}</Container>
  )
}

Feature.Title = ({children,...restProps}) => <Title {...restProps}>{children}</Title>

Feature.Subtitle = ({children,...restProps}) => <Subtitle {...restProps}>{children}</Subtitle>

