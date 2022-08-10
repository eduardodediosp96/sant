import styled from "styled-components";
import { palette } from "../theme";

const StyledButton = styled.button<{ variant: string, selected: boolean }>`
    background-color:  ${({ variant }) => variant === 'primary' ? palette.main : palette.white};
    color: ${({ variant }) => variant === 'primary' ? palette.white : palette.black};
    width: fit-content;
    height: 40px;
    min-width: 120px;
    border: ${({ variant }) => variant === 'primary' ? 'none' : `solid 1px ${palette.black}`};
    cursor: pointer;
    box-shadow: ${({ selected }) => selected ? `0px 0px 10px ${palette.main}` : 'none'};
`

interface ButtonProps {
    label: string;
    onClick?: () => void;
    variant?: string;
    selected?: boolean;
}

const Button = ({ label, variant = 'primary', selected = false, ...rest }: ButtonProps) => {
    return <StyledButton variant={variant} selected={selected} {...rest}>{label}</StyledButton>
}

export default Button;