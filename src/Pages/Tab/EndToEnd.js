import React from "react";
import { styled } from "styled-components";

import { Mobile, PC } from "../../MediaQuery";
import { Div } from "../../styles/Div";
import Img from "../../styles/Img";
import { P } from "../../styles/P";

const AbDiv = styled(Div)`
    position: absolute;

    bottom: 0px;
    right: 10px;
`;

const ReDiv = styled(Div)`
    position: relative;
`;

const EndToEnd = () => {
    return (
        <>
            <PC>
                <Div $padding="50px 30px" $borderRadius="10px">
                    <Div $margin="0 0 30px 0">
                        <P fontSize="lg" color="bk" $whitespace="normal" $lineHeight="1.4">
                            DesignedAI Metep framework achieves the significantly superior performance with less
                            computing resources for end-to-end real-time object detection task based on Yolov4 model
                            compared to the world-famous deep learning frameworks, based on the same multi-core CPUs HW
                            platform.
                        </P>
                    </Div>
                    <Div width="100%" display="flex">
                        <Div width="100%">
                            <P color="bk" fontSize="sm" fontWeight="800">
                                * Less is better.
                            </P>
                        </Div>
                        <Div
                            display="flex"
                            direction="column"
                            width="100%"
                            $margin="30px 0 0 0"
                            $justifyContent="space-evenly"
                        >
                            <Div width="100%" display="flex">
                                <Div
                                    width="100%"
                                    $padding="8px"
                                    $backgroundColor="blue"
                                    $borderRadius="50px"
                                    display="flex"
                                    $margin="0 0 30px 0"
                                >
                                    <Div>
                                        <P fontSize="lg">Latency per image</P>
                                    </Div>
                                </Div>
                                <Div height="200px">
                                    <Img src="/images/pc_latency.png" />
                                </Div>
                            </Div>
                            <Div width="100%" display="flex">
                                <Div
                                    width="100%"
                                    $padding="8px"
                                    $backgroundColor="blue"
                                    $borderRadius="50px"
                                    display="flex"
                                    $margin="0 0 30px 0"
                                >
                                    <Div>
                                        <P fontSize="lg">Memory Usage</P>
                                    </Div>
                                </Div>
                                <Div height="200px">
                                    <Img src="/images/pc_memory.png" />
                                </Div>
                            </Div>
                            <Div width="100%" display="flex">
                                <Div
                                    width="100%"
                                    $padding="8px"
                                    $backgroundColor="blue"
                                    $borderRadius="50px"
                                    display="flex"
                                    $margin="0 0 30px 0"
                                >
                                    <Div>
                                        <P fontSize="lg">Energy Consumption</P>
                                    </Div>
                                </Div>
                                <Div height="200px">
                                    <Img src="/images/pc_energy.png" />
                                </Div>
                            </Div>
                        </Div>

                        <ReDiv width="100%">
                            <Div>
                                <P fontSize="sm" $lineHeight="1.6">
                                    <i>
                                        * HW: Intel Xeon E-2695v4 (Broadwell), multi-core CPUs-based computation
                                        <br />
                                        * Framework Environment: Metep: C++ (Ours), Framework A/B: Python (enterprise
                                        open source frameworks), Darknet: C++
                                        <br />
                                        * Precision: fp32
                                        <br />
                                    </i>
                                </P>
                                <AbDiv>
                                    <P fontSize="sm" $lineHeight="1.6">
                                        <i>(*Results can differ from other execution environments)</i>
                                    </P>
                                </AbDiv>
                            </Div>
                        </ReDiv>
                    </Div>
                </Div>
            </PC>
            <Mobile>
                <Div $padding="10px" $borderRadius="10px">
                    <Div>
                        <P fontSize="xxs" color="bk" $whitespace="normal" $lineHeight="1.6">
                            DesignedAI Metep framework achieves the significantly superior performance with less
                            computing resources for end-to-end real-time object detection task based on Yolov4 model
                            compared to the world-famous deep learning frameworks, based on the same multi-core CPUs HW
                            platform.
                        </P>
                    </Div>

                    <Div width="100%" $margin="50px 0 0 0">
                        <P color="bk" fontSize="xxxs" fontWeight="800">
                            * Less is better.
                        </P>
                    </Div>

                    <Div display="flex" width="100%" $margin="30px 0 0 0" $justifyContent="space-evenly">
                        <Div>
                            <Div
                                width="100%"
                                $padding="8px"
                                $backgroundColor="blue"
                                $borderRadius="50px"
                                display="flex"
                                $margin="0 0 10px 0"
                            >
                                <Div>
                                    <P fontSize="xxs" fontWeight="800">
                                        Latency per image
                                    </P>
                                </Div>
                            </Div>
                            <Div height="120px">
                                <Img src="/images/mobile_latency.png" />
                            </Div>
                        </Div>
                        <Div>
                            <Div
                                width="100%"
                                $padding="8px"
                                $backgroundColor="blue"
                                $borderRadius="50px"
                                display="flex"
                                $margin="0 0 10px 0"
                            >
                                <Div>
                                    <P fontSize="xxs" fontWeight="800">
                                        Memory Usage
                                    </P>
                                </Div>
                            </Div>
                            <Div height="120px">
                                <Img src="/images/mobile_memory.png" />
                            </Div>
                        </Div>
                        <Div>
                            <Div
                                width="100%"
                                $padding="8px"
                                $backgroundColor="blue"
                                $borderRadius="50px"
                                display="flex"
                            >
                                <Div>
                                    <P fontSize="xxs" fontWeight="800">
                                        Energy Consumption
                                    </P>
                                </Div>
                            </Div>
                            <Div height="120px">
                                <Img src="/images/mobile_energy.png" />
                            </Div>
                        </Div>
                    </Div>

                    <Div width="100%">
                        <Div>
                            <P fontSize="xxxs" $lineHeight="1.6">
                                <i>
                                    * HW: Intel Xeon E-2695v4 (Broadwell), multi-core CPUs-based computation
                                    <br />
                                    * Framework Environment: Metep: C++ (Ours), Framework A/B: Python (enterprise open
                                    source frameworks), Darknet: C++
                                    <br />
                                    * Precision: fp32
                                    <br />
                                </i>
                            </P>
                            <Div $margin="10px 0 0 0">
                                <P fontSize="xxxs" $lineHeight="1.6">
                                    <i>(*Results can differ from other execution environments)</i>
                                </P>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Mobile>
        </>
    );
};

export default EndToEnd;
