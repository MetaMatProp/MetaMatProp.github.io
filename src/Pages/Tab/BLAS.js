import React from "react";
import styled from "styled-components";

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

const BLAS = () => {
    return (
        <>
            <PC>
                <Div width="100%" display="flex" $padding="30px" $margin=" 0 0 50px 0" $backgroundColor="grey1">
                    <Div>
                        <P fontSize="xl">
                            Our innovative BLAS-GEMM compute-kernel technology delivers the state-of-the-art performance
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
                                Computing
                            </P>
                        </Div>
                        <Div display="flex">
                            <P fontWeight="800" fontSize="xl">
                                2.5X
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
                                1.6X
                            </P>
                        </Div>
                    </Div>
                    <Div display="flex" width="100%" $margin="50px 0" $backgroundColor="darkBlue">
                        <Div $padding="10px 20px">
                            <P fontSize="lg">Fused Matrix multiplication (GEMM) Task: C = C + (A-B)(A+B)</P>
                        </Div>
                    </Div>
                </Div>
                <Div display="flex" width="100%" $margin="30px 0 0 0" $justifyContent="space-evenly">
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
                                    Computing Performance
                                </P>
                            </Div>
                        </Div>
                        <Div display="flex" width="100%" $margin="20px 0" $justifyContent="end">
                            <Div>
                                <P fontSize="sm" fontWeight="600">
                                    *High is better
                                </P>
                            </Div>
                        </Div>
                        <Div height="500px">
                            <Img src="/images/BLAS-computing.png" />
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
                        <Div display="flex" width="100%" $justifyContent="end" $margin="20px 0">
                            <Div>
                                <P fontSize="sm" fontWeight="600">
                                    *Less is better
                                </P>
                            </Div>
                        </Div>
                        <Div height="500px">
                            <Img src="/images/BLAS-memory.png" />
                        </Div>
                    </Div>
                    <ReDiv width="100%" $margin="20px 0 0 40px">
                        <Div>
                            <P $lineHeight="1.6" fontSize="sm">
                                <i>
                                    * Benchmark Environment: Intel Xeon E-2640v4 (Broadwell,10 cores/socket, 2 sockets),
                                    multi-cores CPU-based computation
                                    <br />
                                    * Benchmark Frameworks: OpenBlas/Blis: open-source BLAS library, Library(A): vendor
                                    optimized commercial BLAS library, Metep: C++(Ours)
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
            </PC>
            <Mobile>
                <Div width="100%" display="flex" $padding="10px" $margin=" 0 0 15px 0" $backgroundColor="grey1">
                    <Div>
                        <P fontSize="xxs" $lineHeight="1.6">
                            Our innovative BLAS-GEMM compute-kernel technology delivers the state-of-the-art performance
                        </P>
                    </Div>
                </Div>

                <Div width="100%" display="flex">
                    <Div
                        width="100px"
                        display="flex"
                        direction="column"
                        $borderRadius="100px"
                        $backgroundColor="blue"
                        $padding="10px"
                    >
                        <Div display="flex">
                            <P fontWeight="800" fontSize="xxs">
                                Computing
                            </P>
                        </Div>
                        <Div display="flex">
                            <P fontWeight="800" fontSize="xxxs">
                                2.5X
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
                        $padding="10px"
                    >
                        <Div display="flex">
                            <P fontWeight="800" fontSize="xxs">
                                Memory
                            </P>
                        </Div>
                        <Div display="flex">
                            <P fontWeight="800" fontSize="xxxs">
                                1.6X
                            </P>
                        </Div>
                    </Div>
                    <Div display="flex" width="100%" $margin="50px 0" $backgroundColor="darkBlue">
                        <Div $padding="10px 20px">
                            <P fontSize="xxs" $center $lineHeight="1.6">
                                Fused Matrix multiplication (GEMM)
                                <br /> Task: C = C + (A-B)(A+B)
                            </P>
                        </Div>
                    </Div>
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
                                    Computing Performance
                                </P>
                            </Div>
                        </Div>
                        <Div display="flex" width="100%" $margin="20px 0" $justifyContent="end">
                            <Div>
                                <P fontSize="xxxs" fontWeight="600">
                                    *High is better
                                </P>
                            </Div>
                        </Div>
                        <Div height="200px">
                            <Img src="/images/BLAS-computing.png" />
                        </Div>
                    </Div>
                    <Div>
                        <Div
                            width="100%"
                            $padding="8px"
                            $backgroundColor="blue"
                            $borderRadius="50px"
                            display="flex"
                            $margin="30px 0"
                        >
                            <Div>
                                <P fontSize="xxs" fontWeight="800">
                                    Memory Usage
                                </P>
                            </Div>
                        </Div>
                        <Div display="flex" width="100%" $justifyContent="end" $margin="20px 0">
                            <Div>
                                <P fontSize="xxxs" fontWeight="600">
                                    *Less is better
                                </P>
                            </Div>
                        </Div>
                        <Div height="200px">
                            <Img src="/images/BLAS-memory.png" />
                        </Div>
                    </Div>
                    <Div width="100%" $margin="20px 0 0 20px ">
                        <Div>
                            <P $lineHeight="1.6" fontSize="xxxs">
                                <i>
                                    * Benchmark Environment: Intel Xeon E-2640v4 (Broadwell,10 cores/socket, 2 sockets),
                                    multi-cores CPU-based computation
                                    <br />
                                    * Benchmark Frameworks: OpenBlas/Blis: open-source BLAS library, Library(A): vendor
                                    optimized commercial BLAS library, Metep: C++(Ours)
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
            </Mobile>
        </>
    );
};

export default BLAS;
