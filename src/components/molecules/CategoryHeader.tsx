import styled from "styled-components";
const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme.palette.black};
  display: flex;
  justify-content: center;
`;

const HeaderContent = styled.div`
  padding: ${(props) => props.theme.spacing(2)};
  color: ${(props) => props.theme.palette.white};
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
