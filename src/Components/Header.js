import React from "react"
import styled from "styled-components"

import { useNavigate } from "react-router-dom"
import { PC } from "../MediaQuery"
import { Div } from "../styles/Div"
import Img from "../styles/Img"
import { P } from "../styles/P"

const StyledHeader = styled(Div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    width: 100%;
    height: 60px;
    padding: 0 0 0 30px;
`

const ContactHeader = () => {
    const navigate = useNavigate()
    const movePage = () => {
        navigate("/")
    }
    const moveContact = () => {
        navigate("/contact")
    }

    return (
        <PC>
            <StyledHeader $backgroundColor="bk">
                <Div display="flex" $pointer onClick={movePage}>
                    <Div width="40px" height="40px">
                        <Img src="/images/logo.jpg" $objectFit="fill" />
                    </Div>
                    <Div $padding="0 0 0 30px ">
                        <P color="wh" fontSize="lg" fontWeight="800">
                            DesignedAI
                        </P>
                    </Div>
                </Div>
                <Div
                    display="flex"
                    $pointer
                    $justifyContent="end"
                    width="700px"
                    $padding="0 30px 0 0"
                    onClick={moveContact}
                >
                    <Div>
                        <P color="wh" fontSize="lg">
                            Contact
                        </P>
                    </Div>
                </Div>
            </StyledHeader>
        </PC>
    )
}

export default ContactHeader
