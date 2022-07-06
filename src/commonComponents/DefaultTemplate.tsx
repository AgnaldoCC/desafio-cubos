import { ReactNode } from "react"
import styled from "styled-components";
import HomeHeader from "../modules/home/components/HomeHeader"

type DefaultTemplateProps = {
  children: ReactNode;
}

const DefaultTemplate = (props: DefaultTemplateProps) => {
  return (
    <>
      <HomeHeader />
      <Container>
        {props.children}
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 20px;

  @media screen and (min-width: 1024px) {
    padding: 3rem 10rem;
  }
`;

export default DefaultTemplate;