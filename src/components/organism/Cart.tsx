import styled from "styled-components";
import Button from "../atoms/Button";
import CartLine from "../molecules/CartLine";
import { Variant } from "../../providers/products/types";

const CartContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(1)};
  max-width: ${({ theme }) => theme.spacing(40)};
  height: 100%;
  width: 100%;
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(2)} 0px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
  button {
    width: 100%;
  }
`;

interface CardProps {
  items: {
    item: Variant;
    quantity: number;
  }[];
  total: number;
  updateQuantity: (item: Variant, quantity: number) => void;
  removeItem: (id: string) => void;
  checkout: () => void;
}

export const Cart = ({
  items,
  total,
  updateQuantity,
  removeItem,
  checkout,
}: CardProps) => {
  return (
    <CartContainer>
      {items.map((item) => (
        <CartLine
          key={item.item.id}
          item={item.item}
          quantity={item.quantity}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
        />
      ))}
      <TotalContainer>
        <span>TOTAL</span>
        <b>{`$ ${(total / 100).toFixed(2)}`}</b>
      </TotalContainer>
      <ButtonContainer>
        <Button label="CHECKOUT" onClick={checkout} />
      </ButtonContainer>
    </CartContainer>
  );
};
