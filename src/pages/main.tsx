import Card from "../components/organism/Card";
import { useQuery } from "@apollo/client";
import { GET_COLLECTIONS } from "../providers/collections/queries";
import { Collection, CollectionsData } from "../providers/collections/types";
import CardContainer from "../components/molecules/CardContainer";
import PageHeader from "../components/molecules/PageHeader";
import { Key } from "react";

function Main() {
  const { loading, error, data } = useQuery<CollectionsData>(GET_COLLECTIONS);
  return (
    <div>
      <PageHeader title="My ecommerce" />
      <CardContainer>
        {!loading &&
          !error &&
          data &&
          data?.collections?.items?.map((collection: Collection) => (
            <Card
              key={collection?.id as Key}
              imageUrl={collection.featuredAsset?.source || ""}
              slug={collection.slug}
              name={collection.name}
            />
          ))}
      </CardContainer>
    </div>
  );
}

export default Main;
