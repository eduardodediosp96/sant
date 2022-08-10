import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { CollectionsData } from "../providers/collections/types";
import { GET_COLLECTIONS } from "../providers/collections/queries";

const Container = styled.div`
  padding-bottom: 70px;
  min-height: 100vh;
`;

const Layout = () => {
  const { loading, error, data } = useQuery<CollectionsData>(GET_COLLECTIONS);
  return (
    <>
      <Navbar collections={data || null} loading={loading} error={error} />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
