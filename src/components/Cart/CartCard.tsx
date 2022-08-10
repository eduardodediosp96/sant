import styled from "styled-components";
import { Variant } from "../../common/types/Product.types";

const CartCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

interface CartCardProps {
    item: Variant;
    quantity: number;
}

const CartCard = ({ item, quantity }: CartCardProps) => {
    return <CartCardContainer>
        <span>{item.name}</span>
        <span>{quantity}</span>
    </CartCardContainer>
}

export default CartCard;