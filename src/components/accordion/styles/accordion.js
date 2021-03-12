import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;

`
export const Frame = styled.div`
  margin-bottom: 40px;
`
export const Item = styled.div`
  color: white;
  margin-bottom: 10px;
  max-width: 670px;
  margin: auto;

  &:first-:first-of-type {
    margin-top: 3em;
  }

`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-size: 26px;
  font-weight: normal;
  background: ${({toggleShow}) => toggleShow ? '#e50914' : '#303030'};
  padding: 0.8em 1.2em;
  margin-bottom: 1px;
  user-select: none;
  align-items: center;
  &:hover {
    background: #E50914;
  }
  img {
    filter: brightness(0) invert(1);
    width: 24px;
    @media(max-width: 600px) {
      width: 16px;
    }
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
  
`


export const Body = styled.div`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  padding: 0.8em 1.2em;
  background: #303030;
  white-space: pre-wrap;
  user-select: none;
  overflow: hidden;

  &.closed {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }
  &.open {
    max-height: 1200px;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }
  span {
    display: block;
    padding: 0.8em 2.2em 0.8em 1.2em;
  }
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`
export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`
export const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 28px;
  color: white;
  @media(max-width: 600px) {
    font-size: 35px;
  }

`