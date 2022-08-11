import React from "react";
import styled from "styled-components";
import theme, { spacing } from "../../common/theme";

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, ${({ theme }) => theme.spacing(18.75)});
  margin: ${`${spacing(0.75)} auto`};

  @media ${theme.mediaQueries.laptop} {
    grid-template-columns: repeat(2, ${({ theme }) => theme.spacing(13.75)});
  }

  @media ${theme.mediaQueries.mobileL} {
    grid-template-columns: repeat(1, ${({ theme }) => theme.spacing(13.75)});
  }
`;

const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <SectionContainer>
      <ProductsContainer>{children}</ProductsContainer>
    </SectionContainer>
  );
};

export default CardContainer;
