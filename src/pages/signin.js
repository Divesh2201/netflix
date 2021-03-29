import React, { useState } from 'react';
import HeaderContainer from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';

export default function Signin() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [error, seterror] = useState('');

  let isInvalid = password === '' || email === '';
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <br></br>
          <Form.Base onSubmit={handleSubmit} method="POST">
            <Form.Input
              type="email"
              placeholder="Email Address"
              onChange={e => setemail(e.target.value)}
              value={email}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              onChange={e => setpassword(e.target.value)}
              value={password}
            />
            <Form.Button type="submit" disabled={isInvalid}>
              Sign In
            </Form.Button>
          </Form.Base>
          <Form.TextSmall>
            <Form.LinkBlue>Login with Facebook</Form.LinkBlue>
          </Form.TextSmall>
          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <Form.LinkBlue>Learn more.</Form.LinkBlue>
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}
