import { useContext, useState } from "react"
import styled from "styled-components"
import Button from "../../common/components/Button"
import { Product } from "../../common/types/Product.types"
import Select from 'react-select'
import { CartContext } from "../../common/context/CartProvider"

const ProductDetailsContainer = styled.div`
  display: flex;
  margin-top: 32px;
`

const ImageContainer = styled.div`
width: 40%;
  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }
`

const DetailsContainer = styled.div`
  width: 40%;
  margin: auto;
  display: flex;
  flex-direction: column;
`

const VariantsContainer = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(4, 1fr);
  margin: 24px 0px;
`

const AddToCartContainer = styled.div`
  display: flex;
  gap: 16px;
`

interface ProductDetailsProps {
  product: Product
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { addItem } = useContext(CartContext);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const quantityOptions = Array.from(Array(10).keys()).map((option) => { return { label: option.toString(), value: option } });

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
            Price: <b>{selectedVariant.priceWithTax} {selectedVariant.currencyCode}</b>
          </p>
        </div>
        <VariantsContainer>
          {product.variants.map((variant) => <Button label={variant.name} variant="secondary" onClick={() => setSelectedVariant(variant)} selected={variant.id === selectedVariant.id} />)}
        </VariantsContainer>
        <AddToCartContainer>
          <Select value={{ label: quantity.toString(), value: quantity }} options={quantityOptions} placeholder="Quantity" onChange={(quantity) => setQuantity(quantity?.value || 1)} />
          <Button label="Add to cart" onClick={() => addItem(selectedVariant, quantity)} />
        </AddToCartContainer>
      </DetailsContainer>
    </ProductDetailsContainer >

  )
}

export default ProductDetails
