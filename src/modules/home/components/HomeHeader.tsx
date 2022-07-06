import Link from "next/link";
import styled from "styled-components";

const HomeHeader = () => {
  return (
    <HomeHeaderContainer>
      <Link href={"/"}>
      <HomeHeaderTitle>Melhores Filmes</HomeHeaderTitle>
      </Link>
    </HomeHeaderContainer>
  );
}

const HomeHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: #2c2c2c;
  padding: 10px;
`;

const HomeHeaderTitle = styled.a`
  font-size: 30px;
  color: #FFFFFF;
  text-decoration: none;
  cursor: pointer;
`;

export default HomeHeader;