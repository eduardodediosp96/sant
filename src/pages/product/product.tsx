import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Link from "../../components/atoms/Link";
import ProductDetails from "../../components/organism/ProductDetails";
import { GET_PRODUCT_BY_SLUG } from "../../providers/products/queries";
import {
  ProductSearchedBySlugData,
  ProductSearchedBySlugVars,
} from "../../providers/products/types";

const ProductContainer = styled.div`
  width: 80%;
  margin: ${({ theme }) => theme.spacing(2)} auto;
`;

function Product() {
  const productSlug = useParams();
  const { loading, error, data } = useQuery<
    ProductSearchedBySlugData,
    ProductSearchedBySlugVars
  >(GET_PRODUCT_BY_SLUG, {
    variables: { slug: productSlug.product || undefined },
  });
  console.log({ data });
  return (
    <ProductContainer>
      <Link to={`/${productSlug.category}`}>Go back</Link>
      {!loading && !error && data && (
        <ProductDetails data={data as ProductSearchedBySlugData} />
      )}
    </ProductContainer>
  );
}

export default Product;
