
import styled from "styled-components";
import Link from "../common/components/Link";
import { palette } from "../common/theme";
import { mockCategories } from "../_mock_/categories";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  background-color: ${palette.black};
  margin: 0px;
  padding: 16px 24px;
`

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 24px;
  margin: 0px;
`

const Navbar = () => {
  return <NavbarContainer>
    <CategoriesContainer>
      <>
        <Link to="/" white>Home</Link>
        {mockCategories.map((category) =>
          <Link key={category.id} to={`/${category.slug}`} white>{category.name}</Link>
        )}
      </>
    </CategoriesContainer>
    <Link to="/cart" white>CART</Link>
  </NavbarContainer>;
}

export default Navbar;
