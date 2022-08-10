import { Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "../../common/components/Card";
import CategoryHeader from "../../common/components/CategoryHeader";
import { mockCategories } from "../../_mock_/categories";
import { mockProducts } from "../../_mock_/products";

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 60%;
  margin: 12px auto;
`

function Category() {
    const categorySlug = useParams();
    const category = mockCategories.find(category => category.slug == categorySlug.category);
    return <>
        <CategoryHeader category={category?.name || ''} />
        <ProductsContainer>
            {mockProducts.map((product) => <Card key={product.id} imageUrl={product.featuredAsset.preview} slug={`${categorySlug.category}/${product.id}`} name={product.name} />)}
        </ProductsContainer>
    </>
}

export default Category;