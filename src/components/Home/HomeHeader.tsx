import styled from "styled-components";
import Button from "../../common/components/Button";
import { palette } from "../../common/theme";

const HeaderContainer = styled.div`
    background-color: ${palette.black}
`

const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    color: ${palette.white}
`

const HomeHeader = () => {
    return <HeaderContainer>
        <HeaderContent>
            <p>PRODUCT NAME</p>
            <p>PRODUCT DESCRIPTION</p>
            <Button label="Buy now" />
        </HeaderContent>
    </HeaderContainer>
}

export default HomeHeader;