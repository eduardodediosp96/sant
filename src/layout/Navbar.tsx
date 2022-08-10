
import styled from "styled-components";
import Link from "../common/components/Link";
import { palette } from "../common/theme";
import { mockCategories } from "../_mock_/categories";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  background-color: ${palette.black};
  margin: 0px;
  padding: 16px;
`

const Navbar = () => {
  return <NavbarContainer>
    <>
      <Link to="/" white>Home</Link>
      {mockCategories.map((category) =>
        <Link key={category.id} to={`/${category.slug}`} white>{category.name}</Link>
      )}
    </>
  </NavbarContainer>;
}

export default Navbar;
