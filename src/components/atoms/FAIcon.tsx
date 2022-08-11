import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  color: ${({ color, theme }) => color ?? theme.palette.black};
  cursor: pointer;
`;
