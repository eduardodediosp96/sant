import styled from "styled-components";
import HomeHeader from "../components/Home/HomeHeader";
import Card from "../components/molecules/Card";
import { useQuery } from "@apollo/client";
import { GET_COLLECTIONS } from "../providers/collections/queries";
import { Collection, CollectionsData } from "../providers/collections/types";

const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 60%;
  margin: 12px auto;
  height: 100%;
`;

function Main() {
  const { loading, error, data } = useQuery<CollectionsData>(GET_COLLECTIONS);
  return (
    <div>
      <HomeHeader />
      <CategoriesContainer>
        {!loading &&
          !error &&
          data &&
          data?.collections?.items?.map((collection: Collection) => (
            <Card
              imageUrl={collection.featuredAsset.source}
              slug={collection.slug}
              name={collection.name}
            />
          ))}
      </CategoriesContainer>
    </div>
  );
}

export default Main;
