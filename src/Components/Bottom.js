import React from "react"

import { PC } from "../MediaQuery"

import { Div } from "../styles/Div"
import Img from "../styles/Img"
import { P } from "../styles/P"

const Bottom = () => {
    return (
        <PC>
            <Div width="100%" $backgroundColor="bk" $padding="30px">
                <Div
                    width="100%"
                    display="flex"
                    $justifyContent="space-between"
                    $borderBottom="1px solid white"
                    $padding="40px 0"
                >
                    <Div display="flex">
                        <Div height="40px" $margin="0 20px 0 0">
                            <Img src="/images/logo.jpg" />
                        </Div>
                        <Div>
                            <P color="wh" fontWeight="800" fontSize="lg">
                                DesignedAI
                            </P>
                        </Div>
                    </Div>
                </Div>
                <Div width="100%" display="flex" $justifyContent="end">
                    <Div $margin="10px 20px 0 0">
                        <P color="wh">© copyrights DesignedAI</P>
                    </Div>
                </Div>
            </Div>
        </PC>
    )
}

export default Bottom
