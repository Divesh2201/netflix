import React from 'react';
import {
  Container,
  Base,
  Title,
  Input,
  Button,
  Link,
  Text,
  TextSmall,
  Error,
  LinkBlue,
} from './styles/form';

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Form.Base = ({ children, ...restProps }) => (
  <Base {...restProps}>{children}</Base>
);
Form.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);
Form.Input = ({ children, ...restProps }) => (
  <Input {...restProps}>{children}</Input>
);
Form.Button = ({ children, ...restProps }) => (
  <Button {...restProps}>{children}</Button>
);
Form.Link = ({ children, ...restProps }) => (
  <Link {...restProps}>{children}</Link>
);
Form.LinkBlue = ({ children, ...restProps }) => (
  <LinkBlue {...restProps}>{children}</LinkBlue>
);
Form.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
);
Form.TextSmall = ({ children, ...restProps }) => (
  <TextSmall {...restProps}>{children}</TextSmall>
);
Form.Error = ({ children, ...restProps }) => (
  <Error {...restProps}>{children}</Error>
);
