import { ReactNode } from "react";
import styled from "styled-components";

type CardSectionProps = {
  title: string;
  children: ReactNode;
}

const CardSection = (props: CardSectionProps) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Line />
      {props.children}
    </Container>
  )
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 20px;
  color: #FFFFFF;  
  font-weight: 500;
  margin: 0 0 5px 0;
`;

const Line = styled.div`
  height: 3px;
  width: 100%;
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 60%, transparent 73%);
`;

export default CardSection;