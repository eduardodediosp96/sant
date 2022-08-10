import styled from "styled-components";
import { palette, spacing } from "../../common/theme";

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

interface CategoryHeaderProps {
  category: string;
}

const CategoryHeader = ({ category }: CategoryHeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderContent>{category.toLocaleUpperCase()}</HeaderContent>
    </HeaderContainer>
  );
};

export default CategoryHeader;
