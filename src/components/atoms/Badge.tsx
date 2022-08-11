import styled from "styled-components";

const BadgedElementWrapper = styled.div`
  position: relative;
`;
const BadgeStyled = styled.div`
  position: absolute;
  right: -10px;
  top: -10px;
  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ theme }) => theme.palette.main};
  width: ${({ theme }) => theme.spacing(1)};
  height: ${({ theme }) => theme.spacing(1)};
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`;

interface BadgeProps {
  children: React.ReactNode;
  quantity: number;
}

const Badge = ({ children, quantity = 0 }: BadgeProps) => {
  return (
    <BadgedElementWrapper>
      <BadgeStyled>{quantity}</BadgeStyled>
      {children}
    </BadgedElementWrapper>
  );
};

export default Badge;
