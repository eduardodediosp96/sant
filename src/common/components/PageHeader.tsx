import styled from "styled-components";
import { palette, spacing } from "../theme";

const HeaderContainer = styled.div`
  background-color: ${palette.black};
  display: flex;
  justify-content: center;
`;

const HeaderContent = styled.div`
  padding: ${spacing(2)};
  color: ${palette.white};
  font-size: 48px;
`;

interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderContent>{title.toLocaleUpperCase()}</HeaderContent>
    </HeaderContainer>
  );
};

export default PageHeader;
