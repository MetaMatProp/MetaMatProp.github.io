import React from "react";
import { styled } from "styled-components";

import theme from "../theme";

import { Mobile, PC } from "../MediaQuery";

import { Div, Section } from "../styles/Div";
import { P } from "../styles/P";

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    z-index: -1;
`;

const VideoDiv = styled(Div)`
    margin: 20px 0 0 0;
    box-shadow: 3px 3px 3px ${theme.color.grey1};
    border: 1px solid ${theme.color.grey1};
    padding: 30px;
`;

const UseCase = () => {
    return (
        <>
            <PC>
                <Section id="useCase">
                    <Div $margin="0 10px" display="flex" width="100%">
                        <Div width="100%" $padding="40px 0">
                            <Div width="100%" display="flex">
                                <Div width="100%" $backgroundColor="grey" $padding="15px 0">
                                    <P fontSize="xxl" $center>
                                        See Our Real-time Object Detection Use Case
                                    </P>
                                </Div>
                            </Div>
                            <Div display="flex" width="100%">
                                <VideoDiv>
                                    <Video muted controls>
                                        <source src="/images/useCase.mp4"></source>
                                    </Video>
                                </VideoDiv>
                            </Div>
                        </Div>
                    </Div>
                </Section>
            </PC>

            <Mobile>
                <Div display="flex" width="100%" $margin="0 0 50px 0">
                    <Div width="100%" display="flex">
                        <Div width="100%" $backgroundColor="grey" $padding="10px 0">
                            <P fontSize="xs" $center $whitespace="normal">
                                See Our Real-time Object Detection Use Case
                            </P>
                        </Div>
                    </Div>
                    <Div display="flex">
                        <VideoDiv>
                            <Video muted controls>
                                <source src="/images/useCase.mp4"></source>
                            </Video>
                        </VideoDiv>
                    </Div>
                </Div>
            </Mobile>
        </>
    );
};

export default UseCase;
