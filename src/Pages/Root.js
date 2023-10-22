import { Div } from "../styles/Div"

import styled from "styled-components"
import Bottom from "../Components/Bottom"
import ContactHeader from "../Components/Header"
import About from "./About"
import Main from "./Main"
import Product from "./Product"
import Tab from "./Tab/Tab"
import UseCase from "./UseCase"
import Values from "./Values"

const RootDiv = styled(Div)`
    box-sizing: border-box;
    width: calc(100vw - (100vw - 100%));
`

const Root = () => {
    return (
        <RootDiv>
            <ContactHeader />
            <Main />
            <Div width="100%" display="flex" direction="column">
                <Product />
                <UseCase />
                <Values />
                <Tab />
                <About />
            </Div>
            <Bottom />
        </RootDiv>
    )
}

export default Root
