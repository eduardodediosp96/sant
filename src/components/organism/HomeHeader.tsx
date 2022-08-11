import styled from "styled-components";
import Button from "../atoms/Button";

const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.black};
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.palette.white};
`;

const HomeHeader = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <p>PRODUCT NAME</p>
        <p>PRODUCT DESCRIPTION</p>
        <Button label="Buy now" />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default HomeHeader;
