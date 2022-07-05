import styled from "styled-components";

const CardImage = styled.img`
  border-radius: 12px 12px 0 0;
  
  @media screen and (min-width: 1024px) {
    max-height: 500px;
    border-radius: 12px 0 0 12px;
  }
`;

export default CardImage;