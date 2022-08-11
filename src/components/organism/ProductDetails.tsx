import { useContext, useState } from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import { CartContext } from "../../common/context/CartProvider";
import QuantityDropdown from "../atoms/QuantityDropdown";
import { ProductSearchedBySlugData } from "../../providers/products/types";
import { useNavigate } from "react-router-dom";

const ProductDetailsContainer = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing(2)};

  @media ${({ theme }) => theme.mediaQueries.laptop} {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  width: 40%;
  img {
    width: 100%;
    height: ${({ theme }) => theme.spacing(37.5)};
    object-fit: cover;
  }
  @media ${({ theme }) => theme.mediaQueries.laptop} {
    width: 100%;
  }
`;

const DetailsContainer = styled.div`
  width: 40%;
  margin: auto;
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.mediaQueries.laptop} {
    width: auto;
    align-items: center;
  }
`;

const VariantsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(0.5)};
  margin: ${({ theme }) => theme.spacing(1.5)} 0;
  @media ${({ theme }) => theme.mediaQueries.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const AddToCartContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;

interface ProductDetailsProps {
  data: ProductSearchedBySlugData;
}

const ProductDetails = ({ data }: ProductDetailsProps) => {
  const { product } = data;
  const { updateQuantity } = useContext(CartContext);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  return (
    <ProductDetailsContainer>
      <ImageContainer>
        <img src={product.featuredAsset.preview} alt="" />
      </ImageContainer>
      <DetailsContainer>
        <div>
          <p>{selectedVariant.name}</p>
          <p>{product.description}</p>
          <p>
            <span>Price: </span>
            <b>
              {(parseFloat(selectedVariant.priceWithTax) / 100).toFixed(2)}
              {selectedVariant.currencyCode}
            </b>
          </p>
        </div>
        <VariantsContainer>
          {product.variants.map((variant) => (
            <Button
              key={variant.id}
              label={variant.name}
              variant="secondary"
              onClick={() => setSelectedVariant(variant)}
              selected={variant.id === selectedVariant.id}
            />
          ))}
        </VariantsContainer>
        <AddToCartContainer>
          <QuantityDropdown quantity={quantity} setQuantity={setQuantity} />
          <Button
            label="Add to cart"
            onClick={() => {
              updateQuantity(selectedVariant, quantity);
              navigate("/");
            }}
          />
        </AddToCartContainer>
      </DetailsContainer>
    </ProductDetailsContainer>
  );
};

export default ProductDetails;
