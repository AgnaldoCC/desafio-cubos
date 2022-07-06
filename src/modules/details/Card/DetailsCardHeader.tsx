import styled from "styled-components";
import ProgressBarCircle from "../../../commonComponents/ProgessBarCircle";

type DetailsCardHeaderProps = {
  percentage: number;
  title: string;
}

const DetailsCardHeader = (props: DetailsCardHeaderProps) => {
  return (
    <Header>
      <Title>{props.title}</Title>
      <ProgressBarCircle theme="light" percentage={props.percentage} />
    </Header>
  )
};

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h1`
  color: #FFFFFF;
  font-weight: 600;
  font-size: 30px;
`;


export default DetailsCardHeader;