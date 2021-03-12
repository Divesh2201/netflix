import React from 'react'
import { Container, Row, Column, Text, Title, Link, Break } from './styles/footer'

export default function Footer({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Footer.Column = ({children, ...restProps}) => <Column {...restProps} >{children}</Column>
Footer.Row = ({children, ...restProps}) => <Row {...restProps} >{children}</Row>
Footer.Text = ({children, ...restProps}) => <Text {...restProps} >{children}</Text>
Footer.Link = ({children, ...restProps}) => <Link {...restProps} >{children}</Link>
Footer.Title = ({children, ...restProps}) => <Title {...restProps} >{children}</Title>
Footer.Break = ({children, ...restProps}) => <Break {...restProps} >{children}</Break>