import styled, { keyframes } from "styled-components";

const Spinner = () => {
  return (
    <Container title='Loading Spinner'>
      <Load />
    </Container>
  );
};

const Container = styled.i`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 50%;
  align-self: center;
`;

const skbounce = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

const Load = styled.i`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid rgba(17, 24, 39, 0.12);
  border-left: 2px solid #2c2c2c;
  position: absolute;
  animation: ${skbounce} 0.9s linear infinite;
  animation-delay: -1s;
`;

export default Spinner;
