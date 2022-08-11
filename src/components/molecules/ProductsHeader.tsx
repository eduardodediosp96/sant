interface ProductsHeaderProps {
  title: string
}

function ProductCategory(props: ProductsHeaderProps) {
  return <p>{props.title}</p>
}

export default ProductCategory
