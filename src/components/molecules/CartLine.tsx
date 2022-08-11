import styled from "styled-components";
import QuantityDropdown from "../atoms/QuantityDropdown";
import { Variant } from "../../providers/products/types";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIconStyled } from "../atoms/FAIcon";

const CartLineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  align-items: center;
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

const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

interface CartLineProps {
  item: Variant;
  quantity: number;
  updateQuantity: (item: Variant, quantity: number) => void;
  removeItem: (id: string) => void;
}

const CartLine = ({
  item,
  quantity,
  updateQuantity,
  removeItem,
}: CartLineProps) => {
  return (
    <CartLineContainer>
      <ItemContainer>
        <ItemDetails>
          <span>{item.name}</span>
          <span>${(parseFloat(item.priceWithTax) / 100).toFixed(2)}</span>
        </ItemDetails>
      </ItemContainer>
      <OptionsContainer>
        <QuantityDropdown
          quantity={quantity}
          setQuantity={(quantity) => updateQuantity(item, quantity)}
        />
        <FontAwesomeIconStyled
          icon={faTrash}
          onClick={() => removeItem(item.id)}
        />
      </OptionsContainer>
    </CartLineContainer>
  );
};

export default CartLine;
