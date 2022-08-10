
import styled from "styled-components"
import { palette } from "../../common/theme"
import Link from "./Link"

const CardContainer = styled.div`
  background-color: ${palette.gray};
  margin: 16px;
`

const CardImage = styled.div`
  img {
    height: 200px;
    width: 100%;
  }
`

const CardContent = styled.div`
  display: flex;
  height: 60px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
`
const Title = styled.span`
  margin-bottom: 12px;
`


interface CardProps {
  imageUrl: string;
  name: string;
  slug: string;
}

function Card({ imageUrl, name, slug }: CardProps) {
  return <CardContainer>
    <CardImage>
      <img src={imageUrl}></img>
    </CardImage>
    <CardContent>
      <Title>{name}</Title>
      <Link to={`/${slug}`}>SHOP</Link>
    </CardContent>
  </CardContainer>
}

export default Card;
