import styled from "styled-components"

const HomeHeader = () => {
  return (
    <HomeHeaderContainer>
      <HomeHeaderTitle>Melhores Filmes</HomeHeaderTitle>
    </HomeHeaderContainer>
  );
}

const HomeHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: #2c2c2c;
`;

const HomeHeaderTitle = styled.h1`
  font-size: 30px;
  color: #FFFFFF
`;

export default HomeHeader;