import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

const LinkContainer = styled.div<{ isWhite: boolean }>`
  a {
    color: ${({ isWhite, theme }) => theme.palette[isWhite ? "white" : "main"]};
    text-decoration: none;
  }
`;

interface LinkProps {
  to: string;
  children: React.ReactNode;
  white?: boolean;
}

const Link = ({ to, children, white = false }: LinkProps) => {
  return (
    <LinkContainer isWhite={white}>
      <RouterLink to={to}>
        {children}
      </RouterLink>
    </LinkContainer>
  );
};

export default Link;
