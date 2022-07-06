import styled from "styled-components";
import { Movie } from "../../../types/commonTypes";
import CardSection from "./CardSection";

type InfoColumnProps = {
  title: string;
  content: string;
}

const InfoColumn = (props: InfoColumnProps) => {
  return (
    <Column>
      <InfoColumnTitle>{props.title}</InfoColumnTitle>
      <InfoColumnContent>{props.content}</InfoColumnContent>
    </Column>
  )
};

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const InfoColumnTitle = styled.h6`
  color: #a3a3a3;
  font-size: 14px;
  margin: 0;
`;

const InfoColumnContent = styled.span`
  color: #FFFFFF;
  font-size: 16px;
`;

export default InfoColumn;