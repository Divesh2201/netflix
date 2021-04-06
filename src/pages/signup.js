import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import HeaderContainer from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import { FirebaseContext } from '../context/firebase';
import styled, { useTheme } from 'styled-components';
import * as ROUTES from '../constants/routes';

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  let isInvalid = password === '' || email === '' || firstName === '';
  const handleSubmit = event => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        result.user.updateProfile({
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1,
        });
      })
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch(error => {
        setFirstName('');
        setPassword('');
        setEmail('');
        setError(error.message);
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <br></br>
          <Form.Base onSubmit={handleSubmit} method="POST">
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <Form.Input
              type="email"
              placeholder="Email Address"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
            <Form.Button type="submit" disabled={isInvalid}>
              Sign Up
            </Form.Button>
          </Form.Base>
          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in</Form.Link>
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
