import styled from "styled-components";
import HomeHeader from "../components/Home/HomeHeader";
import Card from "../components/molecules/Card";
import { useQuery } from "@apollo/client";
import { GET_COLLECTIONS } from "../providers/collections/queries";
import { Collection, CollectionsData } from "../providers/collections/types";
import CardContainer from "../components/molecules/CardContainer";
import PageHeader from "../common/components/PageHeader";

function Main() {
  const { loading, error, data } = useQuery<CollectionsData>(GET_COLLECTIONS);
  console.log('lllool', data)
  return (
    <div>
      <PageHeader title="My ecommerce" />
      <CardContainer>
        {
          data &&
          data?.collections?.items?.map((collection: Collection) => (
            <Card
              imageUrl={collection.featuredAsset?.source || ''}
              slug={collection.slug}
              name={collection.name}
            />
          ))}
      </CardContainer>
    </div>
  );
}

export default Main;
