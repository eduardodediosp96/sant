import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "../../components/molecules/Card";
import PageHeader from "../../common/components/PageHeader";
import { FETCH_PRODUCTS_BY_COLLECTION } from "../../providers/products/queries";
import {
  ProductInventorySearchedData,
  ProductInventorySearchedVars,
} from "../../providers/products/types";
import theme, { spacing } from "../../common/theme";
import CardContainer from "../../components/molecules/CardContainer";

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
              imageUrl={product.productAsset.preview}
              slug={`${categorySlug.category}/${product.slug}`}
              name={product.productName}
            />
          ))}
      </CardContainer>
    </CategoriesContainer >
  );
}

export default Category;
