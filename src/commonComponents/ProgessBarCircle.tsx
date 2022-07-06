import { CircularProgressbar } from "react-circular-progressbar";
import styled from "styled-components";

type ProgressBarCircleProps = {
  percentage: number;
  theme?: string;
}

const ProgressBarCircle = (props: ProgressBarCircleProps) => {
  return (
    <ProgressBar>
      <CircularProgressbar
        value={props.percentage}
        text={`${props.percentage}%`}
        styles={{
          path: {
            stroke: props.theme === 'light' ? "#FFFFFF" : `#000000`,
          },
          trail: {
            stroke: props.theme === 'light' ? "transparent" : `#FFFFFF`,
          },
          text: {
            textAnchor: 'middle',
            fontSize: "35px",
            dominantBaseline: 'middle',
            fill: props.theme === 'light' ? "#FFFFFF" : `#000000`,
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