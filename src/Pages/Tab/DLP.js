import React from "react";
import { styled } from "styled-components";

import theme from "../../theme";

import { Mobile, PC } from "../../MediaQuery";
import { Div } from "../../styles/Div";
import Img from "../../styles/Img";
import { P } from "../../styles/P";

const HR = styled.hr`
    width: 15%;
    margin: 0;
`;

const MobileHR = styled.hr`
    width: 3%;
    margin: 0;
`;

const AbDiv = styled(Div)`
    position: absolute;

    bottom: 0px;
    right: 10px;
`;

const ReDiv = styled(Div)`
    position: relative;
`;

const contentList = [
    ["conv_0", "conv_4", "batch size"],
    ["3x16x1024", "128x128x128", "128"],
    ["conv_1", "conv_5", "filter size"],
    ["16x16x1024", "256x256x64", "3"],
    ["conv_2", "conv_6", "stride"],
    ["32x32x256", "512x512x32", "1"],
    ["conv_3", "conv_7", "dilation"],
    ["64x64x256", "1024x1024x16", "1"],
];
const DLP = () => {
    return (
        <>
            <PC>
                <Div width="100%" display="flex">
                    <Div width="100%" display="flex">
                        <Div width="100%" $padding="30px" $margin=" 0 0 50px 0" $backgroundColor="grey1">
                            <P fontSize="lg">
                                Convolution is one of the most compute-intensive deep learning primitive operations,
                                which takes 80% computation of most of convolutional neural networks. See our
                                resource-efficient the state-of-the-art performance over a variety of convolution
                                operations.
                            </P>
                        </Div>
                    </Div>

                    <Div width="100%" display="flex">
                        <Div
                            width="20%"
                            display="flex"
                            direction="column"
                            $borderRadius="100px"
                            $backgroundColor="blue"
                            $padding="10px 50px"
                        >
                            <Div display="flex">
                                <P fontWeight="800" $lineHeight="2">
                                    Latency
                                </P>
                            </Div>
                            <Div display="flex">
                                <P fontWeight="800" fontSize="xl">
                                    5.3X
                                </P>
                            </Div>
                        </Div>
                        <HR />
                        <Div
                            width="20%"
                            display="flex"
                            direction="column"
                            $borderRadius="20px"
                            $backgroundColor="redlayer1"
                            $padding="30px 50px"
                        >
                            <Div display="flex">
                                <P fontWeight="800" fontSize="xl">
                                    Metep
                                </P>
                            </Div>
                        </Div>
                        <HR />
                        <Div
                            width="20%"
                            display="flex"
                            direction="column"
                            $borderRadius="100px"
                            $backgroundColor="blue"
                            $padding="10px 50px"
                        >
                            <Div display="flex">
                                <P fontWeight="800" $lineHeight="2">
                                    Memory
                                </P>
                            </Div>
                            <Div display="flex">
                                <P fontWeight="800" fontSize="xl">
                                    2.2X
                                </P>
                            </Div>
                        </Div>
                    </Div>

                    <Div width="90%">
                        <Div display="flex" width="100%" $margin="30px 0 0 0" $justifyContent="space-evenly">
                            <Div width="100%" $margin="20px 0">
                                <P fontWeight={800}>* Less is better</P>
                            </Div>

                            <Div $minWidth="550px">
                                <Div
                                    width="100%"
                                    $padding="8px"
                                    $backgroundColor="blue"
                                    $borderRadius="50px"
                                    display="flex"
                                    $margin="0 0 30px 0"
                                >
                                    <Div>
                                        <P fontSize="xl" fontWeight="800">
                                            Latency
                                        </P>
                                    </Div>
                                </Div>
                                <Div height="40%">
                                    <Img src="/images/DLP-latency.png" />
                                </Div>
                            </Div>
                            <Div $minWidth="550px">
                                <Div
                                    width="100%"
                                    $padding="8px"
                                    $backgroundColor="blue"
                                    $borderRadius="50px"
                                    display="flex"
                                    $margin="0 0 30px 0"
                                >
                                    <Div>
                                        <P fontSize="xl" fontWeight="800">
                                            Memory Usage
                                        </P>
                                    </Div>
                                </Div>
                                <Div height="40%">
                                    <Img src="/images/DLP-memory.png" />
                                </Div>
                            </Div>
                        </Div>

                        <Div width="100%">
                            <Div width="100%" display="flex">
                                <Div $margin="30px 0">
                                    <P>Convolution parameters(IC x OC x H(W))</P>
                                </Div>
                            </Div>
                            <Div width="100%" $border={`1px solid ${theme.color.grey}`} padding="20px" display="flex">
                                {contentList.map((element) => (
                                    <Div $margin="10px 0">
                                        <Div display="flex" $justifyContent="end" width="150px">
                                            <Div>
                                                <P>{element[0]}</P>
                                            </Div>
                                        </Div>
                                        <Div display="flex" $justifyContent="end" width="150px">
                                            <Div>
                                                <P>{element[1]}</P>
                                            </Div>
                                        </Div>
                                        <Div display="flex" $justifyContent="end" width="150px">
                                            <Div>
                                                <P>{element[2]}</P>
                                            </Div>
                                        </Div>
                                    </Div>
                                ))}
                            </Div>
                        </Div>

                        <ReDiv width="100%" $margin="20px 0">
                            <Div>
                                <P $lineHeight="1.6" fontSize="sm">
                                    <i>
                                        * Benchmark Environment: Intel Xeon E-2695v4 2 sockets (multi-cores CPUs-based
                                        computation)
                                        <br />
                                        * Benchmark Frameworks Metep: C++(Ours), Framework A: C++(vendor optimized DL
                                        library), Framework B/C: Python(enterprise open source frameworks)
                                        <br />
                                        * Benchmark Numerical Precision: fp32
                                        <br />
                                    </i>
                                </P>
                                <AbDiv>
                                    <P $lineHeight="1.6" fontSize="sm">
                                        <i>(*Results can differ from other execution environments)</i>
                                    </P>
                                </AbDiv>
                            </Div>
                        </ReDiv>
                    </Div>
                </Div>
            </PC>

            <Mobile>
                <Div width="100%" display="flex">
                    <Div width="100%" display="flex">
                        <Div width="100%" $padding="10px" $backgroundColor="grey1">
                            <P fontSize="xxs" $lineHeight="1.6">
                                Convolution is one of the most compute-intensive deep learning primitive operations,
                                which takes 80% computation of most of convolutional neural networks. See our
                                resource-efficient the state-of-the-art performance over a variety of convolution
                                operations.
                            </P>
                        </Div>
                    </Div>

                    <Div width="100%" display="flex" $margin="20px 0">
                        <Div
                            width="100px"
                            display="flex"
                            direction="column"
                            $borderRadius="100px"
                            $backgroundColor="blue"
                            $padding="10px"
                        >
                            <Div display="flex">
                                <P fontSize="xxs" fontWeight="800">
                                    Latency
                                </P>
                            </Div>
                            <Div display="flex">
                                <P fontWeight="800" fontSize="xxxs">
                                    5.3X
                                </P>
                            </Div>
                        </Div>
                        <MobileHR />
                        <Div
                            width="100px"
                            display="flex"
                            direction="column"
                            $borderRadius="5px"
                            $backgroundColor="redlayer1"
                            $padding="10px"
                        >
                            <Div display="flex">
                                <P fontWeight="800" fontSize="xxs">
                                    Metep
                                </P>
                            </Div>
                        </Div>
                        <MobileHR />
                        <Div
                            width="100px"
                            display="flex"
                            direction="column"
                            $borderRadius="100px"
                            $backgroundColor="blue"
                            $padding="10px "
                        >
                            <Div display="flex">
                                <P fontWeight="800" fontSize="xxs">
                                    Memory
                                </P>
                            </Div>
                            <Div display="flex">
                                <P fontWeight="800" fontSize="xxxs">
                                    2.2X
                                </P>
                            </Div>
                        </Div>
                    </Div>

                    <Div width="100%">
                        <Div width="100%" $margin="20px 0">
                            <P fontWeight={800} fontSize="xxxs">
                                * Less is better
                            </P>
                        </Div>
                        <Div display="flex" width="100%" $justifyContent="space-evenly">
                            <Div>
                                <Div
                                    width="100%"
                                    $padding="8px"
                                    $backgroundColor="blue"
                                    $borderRadius="50px"
                                    display="flex"
                                    $margin="0 0 30px 0"
                                >
                                    <Div>
                                        <P fontSize="xxs" fontWeight="800">
                                            Latency
                                        </P>
                                    </Div>
                                </Div>
                                <Div height="150px">
                                    <Img src="/images/DLP-latency.png" />
                                </Div>
                            </Div>
                            <Div>
                                <Div
                                    width="100%"
                                    $padding="8px"
                                    $backgroundColor="blue"
                                    $borderRadius="50px"
                                    display="flex"
                                    $margin="0 0 30px 0"
                                >
                                    <Div>
                                        <P fontSize="xxs" fontWeight="800">
                                            Memory Usage
                                        </P>
                                    </Div>
                                </Div>
                                <Div height="150px">
                                    <Img src="/images/DLP-memory.png" />
                                </Div>
                            </Div>
                        </Div>

                        <Div width="100%">
                            <Div width="100%" display="flex">
                                <Div $margin="20px 0">
                                    <P fontSize="xxs">Convolution parameters(IC x OC x H(W))</P>
                                </Div>
                            </Div>
                            <Div width="100%" $border={`1px solid ${theme.color.grey}`} padding="20px">
                                {contentList.map((element) => (
                                    <Div $margin="10px 0" width="100%" display="flex">
                                        <Div display="flex" width="33%">
                                            <Div>
                                                <P fontSize="xxs" $center>
                                                    {element[0]}
                                                </P>
                                            </Div>
                                        </Div>
                                        <Div display="flex" width="33%">
                                            <Div>
                                                <P fontSize="xxs" $center>
                                                    {element[1]}
                                                </P>
                                            </Div>
                                        </Div>
                                        <Div display="flex" width="33%">
                                            <Div>
                                                <P fontSize="xxs" $center>
                                                    {element[2]}
                                                </P>
                                            </Div>
                                        </Div>
                                    </Div>
                                ))}
                            </Div>
                        </Div>

                        <Div width="100%" $margin="20px 0">
                            <Div>
                                <P $lineHeight="1.6" fontSize="xxxs">
                                    <i>
                                        * Benchmark Environment: Intel Xeon E-2695v4 2 sockets (multi-cores CPUs-based
                                        computation)
                                        <br />
                                        * Benchmark Frameworks Metep: C++(Ours), Framework A: C++(vendor optimized DL
                                        library), Framework B/C: Python(enterprise open source frameworks)
                                        <br />
                                        * Benchmark Numerical Precision: fp32
                                        <br />
                                    </i>
                                </P>
                                <Div>
                                    <P $lineHeight="1.6" fontSize="xxxs">
                                        <i>(*Results can differ from other execution environments)</i>
                                    </P>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Mobile>
        </>
    );
};

export default DLP;
