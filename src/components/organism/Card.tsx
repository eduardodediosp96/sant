import styled from "styled-components";
import { palette, spacing } from "../../common/theme";
import { useNavigate } from "react-router-dom";
import Link from "../atoms/Link";

const CardContainer = styled.div`
  border-radius: 5px;
  background-color: ${palette.gray};
  margin: ${spacing(1)};
  cursor: pointer;
  border: 2px solid transparent;
  &:hover {
    border: ${`1px solid ${palette.main}`};
    box-shadow: ${(props) => props.theme.shadow[3]};
  }
`;

const CardImage = styled.div`
  img {
    height: ${spacing(12.5)};
    width: 100%;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  display: flex;
  height: ${spacing(3.75)};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${spacing(1)};
`;

const Title = styled.span`
  margin-bottom: ${spacing(0.75)};
`;

interface CardProps {
  imageUrl: string;
  name: string;
  slug: string;
}

function Card({ imageUrl, name, slug }: CardProps) {
  let navigate = useNavigate();
  return (
    <CardContainer onClick={() => navigate(`/${slug}`)}>
      <CardImage>
        {!!imageUrl && <img src={imageUrl} alt=""></img>}
      </CardImage>
      <CardContent>
        <Title>{name}</Title>
        <Link to={`/${slug}`}>SHOP</Link>
      </CardContent>
    </CardContainer>
  );
}

export default Card;
