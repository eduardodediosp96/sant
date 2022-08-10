import { useContext } from "react";
import styled from "styled-components";
import Button from "../../components/atoms/Button";
import { CartContext } from "../../common/context/CartProvider";
import CartCard from "../../components/Cart/CartCard";

const CartContainer = styled.div`
  padding: 16px;
  width: 50%;
  margin: auto;
`;
const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 0px;
`;
const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;

  button {
    width: 100%;
  }
`;

const Cart = () => {
  const { items, total, updateQuantity } = useContext(CartContext);

  return (
    <CartContainer>
      {items.map((item) => (
        <CartCard
          key={item.item.id}
          item={item.item}
          quantity={item.quantity}
          updateQuantity={updateQuantity}
        />
      ))}
      <TotalContainer>
        <span>TOTAL</span>
        <b>{`$ ${total}`}</b>
      </TotalContainer>
      <ButtonContainer>
        <Button label="CHECKOUT" />
      </ButtonContainer>
    </CartContainer>
  );
};

export default Cart;
