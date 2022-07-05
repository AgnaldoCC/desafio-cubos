import { CircularProgressbar } from "react-circular-progressbar";
import styled from "styled-components";

type ProgressBarCircleProps = {
  percentage: number;
}

const ProgressBarCircle = (props: ProgressBarCircleProps) => {
  return (
    <ProgressBar>
      <CircularProgressbar
        value={props.percentage}
        text={`${props.percentage}%`}
        styles={{
          path: {
            stroke: `#000000`,
          },
          trail: {
            stroke: "#FFFFFF",
          },
          text: {
            textAnchor: 'middle',
            fontSize: "35px",
            dominantBaseline: 'middle'
          }
        }}
      />
    </ProgressBar>
  )
}

const ProgressBar = styled.div`
  width: 50px;
  height: 50px;
`;

export default ProgressBarCircle;