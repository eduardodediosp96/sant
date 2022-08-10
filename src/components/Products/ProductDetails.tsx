import { Product } from "./Product.types"

interface ProductDetailsProps {
  product: Product
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <>
      {/* <div>
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>
          {product.currency} {product.price}
        </p>
      </div>
      <button >Add to cart</button>
      <div>
        <p>Features</p>
        <p>{product.features}</p>
      </div> */}
      {/* <Typography>
        <Title>In the box</Title>
        {product.items.map((item, index) => (
          <Paragraph key={index}>
            {item.quantity}x {item.name}
          </Paragraph>
        ))}
      </Typography> */}
    </>
  )
}

export default ProductDetails
