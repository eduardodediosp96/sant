import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { CollectionsData } from "../providers/collections/types";
import { GET_COLLECTIONS } from "../providers/collections/queries";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useContext } from "react";
import { CartContext } from "../common/context/CartProvider";

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Container = styled.div`
  flex: 1 1 auto;
`;

const Layout = () => {
  const { itemsQuantity } = useContext(CartContext);
  const { loading, error, data } = useQuery<CollectionsData>(GET_COLLECTIONS);
  return (
    <LayoutWrapper>
      <Navbar
        collections={data || null}
        loading={loading}
        error={error}
        cartBadgeNumber={itemsQuantity}
      />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
