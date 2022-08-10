import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import { palette } from "../../common/theme";

const LinkItem = styled(RouterLink)<{ white: boolean }>`
  color: ${({ white }) => (white ? palette.white : palette.main)};
  text-decoration: none;
`;

interface LinkProps {
  to: string;
  children: React.ReactNode;
  white?: boolean;
}

const Link = ({ to, children, white = false }: LinkProps) => {
  return (
    <LinkItem white={white} to={to}>
      {children}
    </LinkItem>
  );
};

export default Link;
