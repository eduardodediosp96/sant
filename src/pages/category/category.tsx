import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "../../components/molecules/Card";
import CategoryHeader from "../../common/components/CategoryHeader";
import { FETCH_PRODUCTS_BY_COLLECTION } from "../../providers/products/queries";
import {
  ProductInventorySearchedData,
  ProductInventorySearchedVars,
} from "../../providers/products/types";
import { spacing } from "../../common/theme";

const CategoriesContainer = styled.div`
  height: 100%;
`;
const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 60%;
  margin: ${`${spacing(0.75)} auto`};
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
      <CategoryHeader category={categorySlug.category || ""} />
      <ProductsContainer>
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
      </ProductsContainer>
    </CategoriesContainer>
  );
}

export default Category;
