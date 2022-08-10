import { useContext } from "react";
import styled from "styled-components";
import Button from "../../common/components/Button";
import { CartContext } from "../../common/context/CartProvider";
import CartCard from "../../components/Cart/CartCard";

const CartContainer = styled.div`
    padding: 16px;
`
const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Cart = () => {
    const { items, total } = useContext(CartContext);
    return <CartContainer>
        {items.map((item) => <CartCard item={item.item} quantity={item.quantity} />)}
        <TotalContainer>
            <span>TOTAL</span>
            <b>{`$ ${total}`}</b>
        </TotalContainer>
        <Button label="CHECKOUT" />
    </CartContainer>
}

export default Cart;