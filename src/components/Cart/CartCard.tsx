import styled from "styled-components";
import QuantityDropdown from "../../common/components/QuantityDropdown";
import { Variant } from "../../providers/products/types";
import { mockProducts } from "../../_mock_/products";

const CartCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 200px;
  object-fit: cover;
  height: 150px;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 8px;
  }
`;
const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

interface CartCardProps {
  item: Variant;
  quantity: number;
  updateQuantity: (item: Variant, quantity: number) => void;
}

const CartCard = ({ item, quantity, updateQuantity }: CartCardProps) => {
  //   const image = mockProducts.find((product) => product.variants.includes(item))
  //     ?.featuredAsset.preview;

  return (
    <CartCardContainer>
      <ItemContainer>
        {/* <ItemImage src={image || ""}></ItemImage> */}
        <ItemDetails>
          <span>{item.name}</span>
          <span>${item.priceWithTax}</span>
        </ItemDetails>
      </ItemContainer>
      <QuantityDropdown
        quantity={quantity}
        setQuantity={(quantity) => updateQuantity(item, quantity)}
      />
    </CartCardContainer>
  );
};

export default CartCard;
