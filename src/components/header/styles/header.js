import styled from 'styled-components/macro'
import { Link as ReactRouterLink } from 'react-router-dom'
import img from './home-bg.jpg'

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${img}) top left / cover no-repeat;
  /* background: linear-gradient(rgba(0,0,0, 0.5), rgba(0, 0, 0, 0.7)), url(${img}); */
  /* filter: grayscale(40%); */

`

export const Frame = styled.div``

export const Container = styled.div`
  display: flex;
  margin: 0px 56px;
  padding: 18px 20px;
  height: 64px;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
  }
  @media (max-width: 1000px) {
    margin: 0px 30px;
  }
`

export const Logo = styled.img`
  height: auto;
  width: 138px; 
  margin-right: 40px;
  margin-top: 24px;

  @media(max-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  margin-top: 24px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: #f40612;
  }
`
