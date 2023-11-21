import React from "react";

import { Mobile, PC } from "../MediaQuery";

import { styled } from "styled-components";
import { Div, MainSection } from "../styles/Div";
import { P } from "../styles/P";

const Video = styled.video`
    position: absolute;
    top: 0px;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

const MainDiv = styled(Div)`
    height: 100vh;
    position: relative;
    z-index: 1;
    width: 100vw;
`;

const Main = () => {
    return (
        <>
            <PC>
                <MainSection id="main">
                    <Video autoPlay muted loop>
                        <source src=" /images/background.mp4"></source>
                    </Video>
                    <MainDiv display="flex" $justifyContent="space-evenly" direction="column" $margin="30px 0">
                        <Div display="flex" $padding="20px 25px" $borderRadius="10px">
                            <P fontSize="xxxl" color="wh" $center fontWeight="800">
                                Artificial Intelligence designed by humans for humanity
                            </P>
                        </Div>

                        <Div width="100%">
                            <Div display="flex" width="100%" $margin="0 0 20px 0">
                                <P color="blue" fontSize="xxxxl" $center fontWeight="800">
                                    DesignedAI
                                </P>
                            </Div>
                        </Div>
                        <Div width="100%">
                            <Div display="flex" width="100%" $margin="0 0 50px 0 ">
                                <P color="wh" fontSize="xxxl" $center fontWeight="400">
                                    We created the fastest and the most cost-efficient general AI software framework
                                </P>
                            </Div>
                            <Div display="flex" width="100%" $margin="0 0 20px 0">
                                <Div $margin="0 10px 0 0 ">
                                    <P color="wh" fontSize="xxxl" $center>
                                        Metep
                                    </P>
                                </Div>
                                <Div>
                                    <P color="wh" fontSize="xxxl" $center fontWeight="800">
                                        (Me
                                    </P>
                                </Div>
                                <Div>
                                    <P color="wh" fontSize="xxxl" $center>
                                        ta-
                                    </P>
                                </Div>
                                <Div>
                                    <P color="wh" fontSize="xxxl" $center fontWeight="800">
                                        Te
                                    </P>
                                </Div>
                                <Div>
                                    <P color="wh" fontSize="xxxl" $center>
                                        nsor
                                    </P>
                                </Div>
                                <Div>
                                    <P color="wh" fontSize="xxxl" $center fontWeight="800">
                                        P
                                    </P>
                                </Div>
                                <Div>
                                    <P color="wh" fontSize="xxxl" $center>
                                        ropagation)
                                    </P>
                                </Div>
                            </Div>
                        </Div>
                    </MainDiv>
                </MainSection>
            </PC>
            <Mobile>
                <Div id="main" width="100%" height="100vh">
                    <Video autoPlay muted loop>
                        <source src=" /images/background.mp4"></source>
                    </Video>
                    <MainDiv display="flex" $justifyContent="space-evenly" direction="column" $margin="30px 0">
                        <Div display="flex" $padding="20px 25px" $borderRadius="10px">
                            <P fontSize="sm" color="wh" $center fontWeight="800">
                                Artificial Intelligence designed by humans for humanity
                            </P>
                        </Div>
                        <Div width="100%">
                            <Div display="flex" width="100%" $margin="0 0 20px 0">
                                <P color="blue" fontSize="sm" $center fontWeight="800">
                                    DesignedAI
                                </P>
                            </Div>
                        </Div>
                        <Div width="100%">
                            <Div display="flex" width="100%">
                                <P color="wh" fontSize="xs" $center fontWeight="400" $whitespace="normal">
                                    We created <br />
                                    the fastest and the most cost-efficient
                                    <br />
                                    general AI software framework
                                </P>
                            </Div>
                            <Div display="flex" width="100%" $margin="20px 0">
                                <Div $margin="0 10px 0 0 ">
                                    <P color="wh" fontSize="xs" $center>
                                        Metep
                                    </P>
                                </Div>
                                <Div>
                                    <P color="wh" fontSize="xs" $center fontWeight="800">
                                        (Me
                                    </P>
                                </Div>
                                <Div>
                                    <P color="wh" fontSize="xs" $center>
                                        ta-
                                    </P>
                                </Div>
                                <Div>
                                    <P color="wh" fontSize="xs" $center fontWeight="800">
                                        Te
                                    </P>
                                </Div>
                                <Div>
                                    <P color="wh" fontSize="xs" $center>
                                        nsor
                                    </P>
                                </Div>
                                <Div>
                                    <P color="wh" fontSize="xs" $center fontWeight="800">
                                        P
                                    </P>
                                </Div>
                                <Div>
                                    <P color="wh" fontSize="xs" $center>
                                        ropagation)
                                    </P>
                                </Div>
                            </Div>
                        </Div>
                    </MainDiv>
                </Div>
            </Mobile>
        </>
    );
};

export default Main;
