import { ReactNode } from "react"
import styled from "styled-components";
import HomeHeader from "../modules/home/components/HomeHeader"

type DefaultTemplateProps = {
  children: ReactNode;
}

const DefaultTemplate = (props: DefaultTemplateProps) => {
  return (
    <Container>
      <HomeHeader />
      {props.children}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default DefaultTemplate;