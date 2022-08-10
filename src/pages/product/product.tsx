import { useParams } from "react-router-dom";
import styled from "styled-components";
import Link from "../../common/components/Link";
import ProductDetails from "../../components/Products/ProductDetails";
import { mockProducts } from "../../_mock_/products";

const ProductContainer = styled.div`
  width: 80%;
  margin: 32px auto;
`

function Product() {
  const productSlug = useParams();
  const product = mockProducts.find(product => product.id === productSlug.product);
  return <ProductContainer>
    <Link to={`/${productSlug.category}`}>Go back</Link>
    {product && <ProductDetails product={product} />}
  </ProductContainer>;
}

export default Product;
