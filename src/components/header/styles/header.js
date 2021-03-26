import styled from 'styled-components/macro'
import { Link as ReactRouterLink } from 'react-router-dom'

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url('https://divesh2201.github.io/netflix/images/misc/home-bg.jpg') top left / cover no-repeat;
  /* background: linear-gradient(rgba(0,0,0, 0.5), rgba(0, 0, 0, 0.7)), url('https://divesh2201.github.io/netflix/images/misc/home-bg-ind.jpg'); */
`

export const Frame = styled.div``

export const Container = styled.div`
  display: flex;
  margin: 0px 56px;
  padding: 18px 20px;
  height: 80px;
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
  width: 148px; 
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
  margin-top: 20px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: #f40612;
  }
`
