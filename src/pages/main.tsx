import styled from "styled-components";
import HomeHeader from "../components/Home/HomeHeader";
import { mockCategories } from "../_mock_/categories";
import { Category } from "../components/Categories/Category.types";
import Card from "../common/components/Card";

const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 60%;
  margin: 12px auto;
`

function Main() {
  return <div>
    <HomeHeader />
    <CategoriesContainer>
      {mockCategories.map((category) => <Card imageUrl={category.featuredAsset.source} slug={category.slug} name={category.name} />)}
    </CategoriesContainer>
  </div>;
}

export default Main;
