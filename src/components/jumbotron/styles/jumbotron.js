import styled from 'styled-components/macro'


export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  max-width: 1100px;
  margin: auto;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    text-align: center;
    padding: 0 45px;
    width: 100%;
  }
`
export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`

export const SubTitle = styled.h2`
  font-size = 26px;
  line-height = normal;
  font-weight = normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }

`

export const Video = styled.video`
  width: 540px;
  height: 520px;
  @media (max-width: 600px) {
    width: 330px;
    height: 330px;
    margin: auto;
  }
`
