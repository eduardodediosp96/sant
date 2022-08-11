import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

const LinkItem = styled(RouterLink)<{ white?: boolean | undefined }>`
  color: ${({ white, theme }) => theme.palette[white ? "white" : "main"]};
  text-decoration: none;
`;

interface LinkProps {
  to: string;
  children: React.ReactNode;
  white?: boolean;
}

const Link = ({ to, children, white }: LinkProps) => {
  return (
    <LinkItem to={to} white>
      {children}
    </LinkItem>
  );
};

export default Link;
