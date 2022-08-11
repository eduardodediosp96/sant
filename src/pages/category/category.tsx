import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "../../components/organism/Card";
import PageHeader from "../../components/molecules/PageHeader";
import { FETCH_PRODUCTS_BY_COLLECTION } from "../../providers/products/queries";
import {
  ProductInventorySearchedData,
  ProductInventorySearchedVars,
} from "../../providers/products/types";
import CardContainer from "../../components/molecules/CardContainer";
import { Key } from "react";

const CategoriesContainer = styled.div`
  height: 100%;
`;

function Category() {
  const categorySlug = useParams();
  const { loading, error, data } = useQuery<
    ProductInventorySearchedData,
    ProductInventorySearchedVars
  >(FETCH_PRODUCTS_BY_COLLECTION, {
    variables: { collectionSlug: categorySlug.category || undefined },
  });

  return (
    <CategoriesContainer>
      <PageHeader title={categorySlug.category || ""} />
      <CardContainer>
        {!loading &&
          !error &&
          data &&
          data?.search?.items.map((product) => (
            <Card
              key={product.productId as Key}
              imageUrl={product?.productAsset?.preview}
              slug={`${categorySlug.category}/${product.slug}`}
              name={product.productName}
            />
          ))}
      </CardContainer>
    </CategoriesContainer>
  );
}

export default Category;
