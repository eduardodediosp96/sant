import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Link from "../../components/atoms/Link";
import ProductDetails from "../../components/Products/ProductDetails";
import { GET_PRODUCT_BY_SLUG } from "../../providers/products/queries";
import {
  ProductInventory,
  ProductSearchedBySlugData,
  ProductSearchedBySlugVars,
} from "../../providers/products/types";
import { mockProducts } from "../../_mock_/products";

const ProductContainer = styled.div`
  width: 80%;
  margin: 32px auto;
`;

function Product() {
  const productSlug = useParams();
  const { loading, error, data } = useQuery<
    ProductSearchedBySlugData,
    ProductSearchedBySlugVars
  >(GET_PRODUCT_BY_SLUG, {
    variables: { slug: productSlug.product || undefined },
  });
  const product = mockProducts.find(
    (product) => product.id === productSlug.product
  );
  console.log({ data }, data?.product.id);
  return (
    <ProductContainer>
      <Link to={`/${productSlug.category}`}>Go back</Link>
      {data && data && (
        <ProductDetails data={data as ProductSearchedBySlugData} />
      )}
    </ProductContainer>
  );
}

export default Product;
