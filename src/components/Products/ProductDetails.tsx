import { useContext, useState } from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import { Product } from "../../common/types/Product.types";
import { CartContext } from "../../common/context/CartProvider";
import QuantityDropdown from "../../common/components/QuantityDropdown";
import {
  ProductInventory,
  ProductSearchedBySlugData,
} from "../../providers/products/types";

const ProductDetailsContainer = styled.div`
  display: flex;
  margin-top: 32px;
`;

const ImageContainer = styled.div`
  width: 40%;
  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }
`;

const DetailsContainer = styled.div`
  width: 40%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const VariantsContainer = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(4, 1fr);
  margin: 24px 0px;
`;

const AddToCartContainer = styled.div`
  display: flex;
  gap: 16px;
`;

interface ProductDetailsProps {
  data: ProductSearchedBySlugData;
}

const ProductDetails = ({ data }: ProductDetailsProps) => {
  const { product } = data;
  const { updateQuantity } = useContext(CartContext);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <ProductDetailsContainer>
      <ImageContainer>
        <img src={product.featuredAsset.preview}></img>
      </ImageContainer>
      <DetailsContainer>
        <div>
          <p>{selectedVariant.name}</p>
          <p>{product.description}</p>
          <p>
            Price:{" "}
            <b>
              {selectedVariant.priceWithTax} {selectedVariant.currencyCode}
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
            onClick={() => updateQuantity(selectedVariant, quantity)}
          />
        </AddToCartContainer>
      </DetailsContainer>
    </ProductDetailsContainer>
  );
};

export default ProductDetails;
