import styled from "styled-components";
import { palette } from "../theme";

const StyledButton = styled.button`
    background-color: ${palette.main};
    color: ${palette.white};
    width: fit-content;
    height: 40px;
    min-width: 120px;
`

interface ButtonProps {
    label: string;
}

const Button = ({ label }: ButtonProps) => {
    return <StyledButton>{label}</StyledButton>
}

export default Button;