import styled from "styled-components";
import { palette } from "../common/theme";

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0px;
  height: 70px;
  border-top: ${`solid 1px ${palette.gray}`};
  width: 100%;
  background-color: ${palette.white};
  display: flex;
  align-items: center;

  span {
    font-weight: bold;
    font-size: 20px;
    padding: 16px;
  }
`

function Footer() {
  return <FooterContainer>
    <span>Ecommerce</span>
  </FooterContainer>;
}

export default Footer;
