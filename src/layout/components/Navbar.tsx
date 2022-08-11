import { ApolloError } from "@apollo/client";
import { Key, useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIconStyled } from "../../components/atoms/FAIcon";
import Link from "../../components/atoms/Link";
import { Collection, CollectionsData } from "../../providers/collections/types";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import Badge from "../../components/atoms/Badge";
import useMediaQuery from "../../hooks/useMediaQuery";
import theme from "../../common/theme";

const NavbarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(1.5)};
  background-color: ${({ theme }) => theme.palette.black};
  max-height: ${({ theme }) => theme.sizes.navbar.height};
  margin: 0;
  padding: ${({ theme }) => theme.spacing(1)}
    ${({ theme }) => theme.spacing(3.5)};

  @media ${theme.mediaQueries.laptop} {
    padding: ${({ theme }) => theme.spacing(1)}
      ${({ theme }) => theme.spacing(1.5)};
  }
`;

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing(1.5)};
  margin: 0;

  @media ${theme.mediaQueries.laptop} {
    justify-content: flex-start;
  }
`;
const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const MobileMenu = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.black};
  color: ${({ theme }) => theme.palette.white};
  gap: ${({ theme }) => theme.spacing(1.5)};
  padding: ${({ theme }) => theme.spacing(1.5)} 0;
  border: none;
`;

const Navbar = (props: {
  collections: CollectionsData | null;
  loading: Boolean;
  error: ApolloError | undefined;
  cartBadgeNumber: number;
}) => {
  const [open, setOpen] = useState(false);
  const { collections, loading, error, cartBadgeNumber } = props;
  const isMobile = useMediaQuery(theme.mediaQueries.laptop);

  useEffect(() => {
    setOpen(false);
  }, [isMobile]);

  const displayNavigation = () => {
    if (loading && error) return null;
    return collections?.collections?.items.map((collection: Collection) => (
      <div onClick={() => setOpen(!open)} key={collection.id as Key}>
        <Link to={`/${collection.slug}`} white>
          {collection.name}
        </Link>
      </div>
    ));
  };

  return (
    <>
      <NavbarContainer>
        <CategoriesContainer>
          <>
            <Link to="/" white>
              Home
            </Link>
            {!isMobile && displayNavigation()}
          </>
        </CategoriesContainer>
        <IconsWrapper>
          <Link to="/cart">
            <Badge quantity={cartBadgeNumber}>
              <FontAwesomeIconStyled icon={faCartShopping} color={"white"} />
            </Badge>
          </Link>
          {isMobile && (
            <FontAwesomeIconStyled
              icon={faBars}
              color={"white"}
              onClick={() => setOpen(!open)}
            />
          )}
        </IconsWrapper>
      </NavbarContainer>
      {isMobile && <MobileMenu open={open}>{displayNavigation()}</MobileMenu>}
    </>
  );
};

export default Navbar;
