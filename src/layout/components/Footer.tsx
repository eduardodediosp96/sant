import styled from "styled-components";

const FooterContainer = styled.div`
  height: ${({ theme }) => theme.sizes.footer.height};
  border-top: solid 1px ${({ theme }) => theme.palette.gray};
  width: 100%;
  background-color: ${({ theme }) => theme.palette.white};
  display: flex;
  align-items: center;

  span {
    font-weight: bold;
    font-size: 20px;
    padding: ${({ theme }) => theme.spacing(1)};
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <span>Ecommerce</span>
    </FooterContainer>
  );
}

export default Footer;
