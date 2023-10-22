import React from "react"

import theme from "../theme"

import { Mobile, PC } from "../MediaQuery"
import { Div, Section } from "../styles/Div"
import { H2 } from "../styles/H"
import { P } from "../styles/P"

const Values = () => {
    return (
        <>
            <PC>
                <Section id="performance">
                    <Div $backgroundColor="grey1" width="100%" $padding="0 0 30px 0" $margin="0 0 100px 0">
                        <Div width="100%" $backgroundColor="grey" $padding="15px 0">
                            <P fontSize="xxl" $center>
                                Values Of The Metep AI Software Framework
                            </P>
                        </Div>
                        <Div display="flex" width="100%" $padding="50px 0 0 0" $justifyContent="space-evenly">
                            <Div
                                width="400px"
                                display="flex"
                                $minHeight="700px"
                                direction="column"
                                $justifyContent="space-evenly"
                            >
                                <Div>
                                    <H2 fontSize="xxxl" color="red" fontWeight="800">
                                        Latency
                                    </H2>
                                </Div>
                                <Div
                                    $backgroundColor="redlayer1"
                                    $padding="50px"
                                    $borderRadius="100px/ 80px;"
                                    $shadow={`1px 3px 3px ${theme.color.grey}`}
                                >
                                    <P fontSize="xxxl" color="red" fontWeight="800">
                                        30%
                                    </P>
                                </Div>
                                <Div
                                    width="400px"
                                    height="450px"
                                    $backgroundColor="wh"
                                    $padding="30px"
                                    $borderRadius="10px"
                                >
                                    <P $whitespace="normal" fontSize="md" $lineHeight="1.6">
                                        Low latency can make your AI products & services more responsive, saving the
                                        most valuable time of your customers and increasing customer satisfaction.
                                    </P>
                                </Div>
                            </Div>
                            <Div
                                width="400px"
                                display="flex"
                                $minHeight="700px"
                                direction="column"
                                $justifyContent="space-evenly"
                            >
                                <Div>
                                    <H2 fontSize="xxxl" color="red" fontWeight="800">
                                        Memory
                                    </H2>
                                </Div>
                                <Div
                                    $backgroundColor="redlayer1"
                                    $padding="50px"
                                    $borderRadius="100px/ 80px;"
                                    $shadow={`1px 3px 3px ${theme.color.grey}`}
                                >
                                    <P fontSize="xxxl" color="red" fontWeight="800">
                                        30%
                                    </P>
                                </Div>
                                <Div
                                    width="400px"
                                    height="450px"
                                    $backgroundColor="wh"
                                    $padding="30px"
                                    $borderRadius="10px"
                                >
                                    <P $whitespace="normal" fontSize="md" $lineHeight="1.6">
                                        Low memory usage can make executing more instances and improve the throughput of
                                        your AI applications without extra HW cost.
                                        <br />
                                        <br />
                                        For memory-restricted devices in edgeAI and tinyML areas, it will improve
                                        applicability and make the impossible possible.
                                    </P>
                                </Div>
                            </Div>
                            <Div
                                width="400px"
                                display="flex"
                                $minHeight="700px"
                                direction="column"
                                $justifyContent="space-evenly"
                            >
                                <Div>
                                    <H2 fontSize="xxxl" color="red" fontWeight="800">
                                        Energy
                                    </H2>
                                </Div>
                                <Div
                                    $backgroundColor="redlayer1"
                                    $padding="50px"
                                    $borderRadius="100px/ 80px;"
                                    $shadow={`1px 3px 3px ${theme.color.grey}`}
                                >
                                    <P fontSize="xxxl" color="red" fontWeight="800">
                                        30%
                                    </P>
                                </Div>
                                <Div
                                    width="400px"
                                    height="450px"
                                    $backgroundColor="wh"
                                    $padding="30px"
                                    $borderRadius="10px"
                                >
                                    <P $whitespace="normal" fontSize="md" $lineHeight="1.6">
                                        Energy efficiency can make your cloud computing service businesses more
                                        profitable by reducing electricity bills, while increasing battery life of
                                        mobile AI products to improve applicability and usability.
                                        <br />
                                        <br />
                                        Best of all, you can make our planet healthier by saving the energy needed to
                                        run AI.
                                    </P>
                                </Div>
                            </Div>
                        </Div>
                        <Div width="100%" $padding="50px 0">
                            <P fontSize="xl" $center fontWeight="800">
                                Enhance your AI business opportunities with truly innovative DesignedAI Metep software
                                technologies.
                            </P>
                            <br />
                            <br />
                            <P fontSize="xl" $center fontWeight="800" $lineHeight="2">
                                Optimizing performance, computing resources, and energy consumption through software
                                <br />
                                technologies has been one of the great challenging problems in AI util DesignedAI Metep.
                            </P>
                        </Div>
                    </Div>
                </Section>
            </PC>
            <Mobile>
                <Div $backgroundColor="grey1" width="100%" $margin="0 0 100px 0">
                    <Div width="100%" $backgroundColor="grey" $padding="15px 0">
                        <P $center fontSize="xs">
                            Values Of The Metep AI Software Framework
                        </P>
                    </Div>
                    <Div width="100%">
                        <Div
                            width="100%"
                            height="350px"
                            display="flex"
                            direction="column"
                            $justifyContent="space-around"
                            $margin="20px 0 0 0"
                        >
                            <Div>
                                <H2 fontWeight="800" color="red" fontSize="sm">
                                    Latency
                                </H2>
                            </Div>

                            <Div
                                $backgroundColor="redlayer1"
                                $padding="30px"
                                $borderRadius="80px/ 60px;"
                                $shadow={`1px 3px 3px ${theme.color.grey}`}
                            >
                                <P fontWeight="800" color="red" fontSize="sm">
                                    30%
                                </P>
                            </Div>

                            <Div
                                width="300px"
                                $padding="20px"
                                $minHeight="200px"
                                $backgroundColor="wh"
                                $borderRadius="10px"
                            >
                                <P $whitespace="normal" fontSize="xxs" $lineHeight="1.6">
                                    Low latency can make your AI products & services more responsive, saving the most
                                    valuable time of your customers and increasing customer satisfaction.
                                </P>
                            </Div>
                        </Div>

                        <Div
                            width="100%"
                            height="350px"
                            display="flex"
                            direction="column"
                            $justifyContent="space-around"
                            $margin="20px 0 0 0"
                        >
                            <Div>
                                <H2 fontWeight="800" color="red" fontSize="sm">
                                    Memory
                                </H2>
                            </Div>

                            <Div
                                $backgroundColor="redlayer1"
                                $padding="30px"
                                $borderRadius="80px/ 60px;"
                                $shadow={`1px 3px 3px ${theme.color.grey}`}
                            >
                                <P fontWeight="800" color="red" fontSize="sm">
                                    30%
                                </P>
                            </Div>

                            <Div
                                width="300px"
                                $padding="20px"
                                $minHeight="200px"
                                $backgroundColor="wh"
                                $borderRadius="10px"
                            >
                                <P $whitespace="normal" fontSize="xxs" $lineHeight="1.6">
                                    Low memory usage can make executing more instances and improve the throughput of
                                    your AI applications without extra HW cost.
                                    <br />
                                    <br />
                                    For memory-restricted devices in edgeAI and tinyML areas, it will improve
                                    applicability and make the impossible possible.
                                </P>
                            </Div>
                        </Div>

                        <Div
                            width="100%"
                            height="350px"
                            display="flex"
                            direction="column"
                            $justifyContent="space-around"
                            $margin="20px 0 0 0"
                        >
                            <Div>
                                <H2 fontWeight="800" color="red" fontSize="sm">
                                    Energy
                                </H2>
                            </Div>

                            <Div
                                $backgroundColor="redlayer1"
                                $padding="30px"
                                $borderRadius="80px/ 60px;"
                                $shadow={`1px 3px 3px ${theme.color.grey}`}
                            >
                                <P fontWeight="800" color="red" fontSize="sm">
                                    30%
                                </P>
                            </Div>

                            <Div
                                width="300px"
                                $padding="20px"
                                $minHeight="200px"
                                $backgroundColor="wh"
                                $borderRadius="10px"
                            >
                                <P $whitespace="normal" fontSize="xxs" $lineHeight="1.6">
                                    Energy efficiency can make your cloud computing service businesses more profitable
                                    by reducing electricity bills, while increasing battery life of mobile AI products
                                    to improve applicability and usability.
                                    <br />
                                    <br />
                                    Best of all, you can make our planet healthier by saving the energy needed to run
                                    AI.
                                </P>
                            </Div>
                        </Div>
                    </Div>
                    <Div width="100%" $padding="50px">
                        <P fontSize="xxs" fontWeight="800" $lineHeight="2">
                            Enhance your AI business opportunities with truly innovative DesignedAI Metep software
                            technologies.
                        </P>
                        <br />
                        <br />
                        <P fontSize="xxs" fontWeight="800" $lineHeight="2">
                            Optimizing performance, computing resources, and energy consumption through software
                            <br />
                            technologies has been one of the great challenging problems in AI util DesignedAI Metep.
                        </P>
                    </Div>
                </Div>
            </Mobile>
        </>
    )
}

export default Values
