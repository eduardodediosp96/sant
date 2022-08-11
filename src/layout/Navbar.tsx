import { ApolloError } from "@apollo/client";
import { Key } from "react";
import styled from "styled-components";
import Link from "../components/atoms/Link";
import { palette } from "../common/theme";
import { Collection, CollectionsData } from "../providers/collections/types";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  background-color: ${palette.black};
  margin: 0px;
  padding: 16px 24px;
`;

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 24px;
  margin: 0px;
`;

const Navbar = (props: {
  collections: CollectionsData | null;
  loading: Boolean;
  error: ApolloError | undefined;
}) => {
  const { collections, loading, error } = props;
  return (
    <NavbarContainer>
      <CategoriesContainer>
        <>
          <Link to="/" white>
            Home
          </Link>
          {/* {!loading &&
            !error &&
            collections &&
            collections?.collections.items.map((collection: Collection) => (
              <Link key={collection.id as Key} to={`/${collection.slug}`} white>
                {collection.name}
              </Link>
            ))} */}
        </>
      </CategoriesContainer>
      <Link to="/cart" white>
        CART
      </Link>
    </NavbarContainer>
  );
};

export default Navbar;
