import React from "react"

import { Mobile, PC } from "../MediaQuery"

import { Div, Section } from "../styles/Div"
import { H2 } from "../styles/H"
import { P } from "../styles/P"

const Product = () => {
    return (
        <>
            <PC>
                <Section id="product">
                    <Div width="100%" $margin="0 0 100px 0">
                        <Div width="100%" $margin="30px 0 0 0">
                            <Div width="100%" $backgroundColor="blue" $padding="15px 0">
                                <P fontSize="xxl" $center>
                                    Faster, Less Memory, Less Energy, and Easy Deployment
                                </P>
                            </Div>
                            <Div width="100%" $backgroundColor="lightBlue" $padding="30px 0">
                                <P fontSize="xxl" $center $lineHeight="1.6">
                                    DesignedAI helps to save your valuable time and money
                                    <br />
                                    for your AI products & services, and scientific computation problems.
                                </P>
                            </Div>
                        </Div>

                        <Div $margin="30px 0" display="flex" $backgroundColor="grey1" width="100%">
                            <Div width="100%" display="flex" $justifyContent="space-evenly" $padding="80px 0 40px 0">
                                <Div width="40%" display="flex">
                                    <Div>
                                        <H2 fontSize="xxxl" fontWeight="800" color="red" $center>
                                            Boost Your AI Business <br /> with DesignedAI
                                        </H2>
                                    </Div>
                                </Div>
                                <Div width="750px">
                                    <P color="red1" fontSize="lg" $lineHeight="1.6">
                                        DesignedAI is creating the next-generation AI software
                                        <br />
                                        framework technology that helps your AI products or services
                                        <br />
                                        to be more cost-efficient and more accessible for everyone.
                                        <br />
                                        <br />
                                        Our Metep AI framework supports to run your AI model faster <br />
                                        at low cost so you can maximize the profit.
                                        <br />
                                        <br />
                                        We are looking forward to pioneering the new future AI with you.
                                    </P>
                                </Div>
                            </Div>

                            <Div display="flex" width="100%" $margin="50px 0 0 0 ">
                                <Div
                                    $borderRadius="15px"
                                    width="90%"
                                    $padding="30px"
                                    display="flex"
                                    $justifyContent="space-between"
                                >
                                    <Div width="38%">
                                        <Div display="flex" width="100%">
                                            <Div>
                                                <H2 fontSize="xxl" fontWeight="800" color="red">
                                                    Our Technology
                                                </H2>
                                            </Div>
                                        </Div>
                                        <Div
                                            height="700px"
                                            width="100%"
                                            display="flex"
                                            direction="column"
                                            $justifyContent="space-around"
                                        >
                                            <Div display="flex" width="100%" height="115px" $backgroundColor="wh">
                                                <Div $padding="10px">
                                                    <P $whitespace="normal" $lineHeight="1.6" $center>
                                                        Truly end-to-end & whole-stack code optimization
                                                    </P>
                                                </Div>
                                            </Div>
                                            <Div display="flex" width="100%" height="115px" $backgroundColor="wh">
                                                <Div $padding="10px">
                                                    <P $whitespace="normal" $lineHeight="1.6" $center>
                                                        Automatic operator fusion & tensor composition
                                                    </P>
                                                </Div>
                                            </Div>
                                            <Div display="flex" width="100%" height="115px" $backgroundColor="wh">
                                                <Div $padding="10px">
                                                    <P $whitespace="normal" $lineHeight="1.6" $center>
                                                        High-performance & scalable compute-kernels
                                                    </P>
                                                </Div>
                                            </Div>
                                            <Div display="flex" width="100%" height="115px" $backgroundColor="wh">
                                                <Div $padding="10px">
                                                    <P $whitespace="normal" $lineHeight="1.6" $center>
                                                        Portable & direct deployment
                                                    </P>
                                                </Div>
                                            </Div>
                                            <Div display="flex" width="100%" height="115px" $backgroundColor="wh">
                                                <Div $padding="20px">
                                                    <P $whitespace="normal" $lineHeight="1.6" $center>
                                                        Easy & abstract tensor API
                                                    </P>
                                                </Div>
                                            </Div>
                                        </Div>
                                    </Div>

                                    <Div width="25%" height="700px" display="flex">
                                        <Div
                                            display="flex"
                                            $backgroundColor="wh"
                                            $padding="50px 30px"
                                            $borderRadius="100px"
                                            $margin="50px 0 0 0"
                                        >
                                            <P $center fontSize="xxl" fontWeight="800" color="red">
                                                Metep
                                                <br />
                                                AI Framework
                                            </P>
                                        </Div>
                                    </Div>
                                    <Div width="32%">
                                        <Div display="flex" width="100%">
                                            <Div>
                                                <H2 fontSize="xxl" fontWeight="800" color="red">
                                                    Customer Value
                                                </H2>
                                            </Div>
                                        </Div>
                                        <Div
                                            height="700px"
                                            width="100%"
                                            display="flex"
                                            direction="column"
                                            $justifyContent="space-around"
                                        >
                                            <Div display="flex" width="100%" height="115px" $backgroundColor="wh">
                                                <Div>
                                                    <P $whitespace="normal" $lineHeight="1.6" $center>
                                                        Promote AI service/product quality
                                                    </P>
                                                </Div>
                                            </Div>
                                            <Div display="flex" width="100%" height="115px" $backgroundColor="wh">
                                                <Div>
                                                    <P $whitespace="normal" $lineHeight="1.6" $center>
                                                        Reduce AI cost & maximize profit
                                                    </P>
                                                </Div>
                                            </Div>
                                            <Div display="flex" width="100%" height="115px" $backgroundColor="wh">
                                                <Div>
                                                    <P $whitespace="normal" $lineHeight="1.6" $center>
                                                        Shorten development time
                                                    </P>
                                                </Div>
                                            </Div>

                                            <Div display="flex" width="100%" height="115px" $backgroundColor="wh">
                                                <Div>
                                                    <P $whitespace="normal" $lineHeight="1.6" $center>
                                                        Make our planet healthier
                                                    </P>
                                                </Div>
                                            </Div>
                                        </Div>
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                </Section>
            </PC>

            <Mobile>
                <Div width="100%" display="flex" $margin="0 0 100px 0">
                    <Div width="100%" $margin="30px 0 0 0">
                        <Div width="100%" $backgroundColor="blue" $padding="15px 0">
                            <P fontSize="xs" $center>
                                Faster, Less Memory, Less Energy, and Easy Deployment
                            </P>
                        </Div>
                        <Div width="100%" $backgroundColor="lightBlue" $padding="30px 10px">
                            <P fontSize="xs" $lineHeight="1.6">
                                DesignedAI helps to save your valuable time and money for your AI products & services,
                                and scientific computation problems.
                            </P>
                        </Div>
                    </Div>

                    <Div $margin="30px 0" display="flex" $backgroundColor="grey1" width="100%">
                        <Div width="100%" $padding="40px 0 0 0 ">
                            <Div width="100%" display="flex">
                                <Div>
                                    <H2 fontSize="xs" fontWeight="800" color="red" $center $lineHeight="1.6">
                                        Boost Your AI Business <br /> with DesignedAI
                                    </H2>
                                </Div>
                            </Div>
                            <Div width="100%" $padding="20px ">
                                <P color="red1" fontSize="xxs" $lineHeight="1.6">
                                    DesignedAI is creating the next-generation AI software
                                    <br />
                                    framework technology that helps your AI products or services
                                    <br />
                                    to be more cost-efficient and more accessible for everyone.
                                    <br />
                                    <br />
                                    Our Metep AI framework supports to run your AI model faster <br />
                                    at low cost so you can maximize the profit.
                                    <br />
                                    <br />
                                    We are looking forward to pioneering the new future AI with you.
                                </P>
                            </Div>
                        </Div>
                        <Div display="flex" width="100%" $margin="50px 0 ">
                            <Div $borderRadius="15px" width="100%" display="flex" $justifyContent="space-between">
                                <Div
                                    width="100%"
                                    height="450px"
                                    display="flex"
                                    direction="column"
                                    $justifyContent="space-around"
                                >
                                    <Div>
                                        <H2 fontSize="xs" fontWeight="800" color="red">
                                            Our Technology
                                        </H2>
                                    </Div>

                                    <Div
                                        display="flex"
                                        width="80%"
                                        height="60px"
                                        $backgroundColor="wh"
                                        $padding="10px 30px"
                                    >
                                        <P fontSize="xxs" $whitespace="normal" $lineHeight="1.6" $center>
                                            Truly end-to-end & whole-stack code optimization
                                        </P>
                                    </Div>
                                    <Div display="flex" width="80%" height="60px" $backgroundColor="wh" $padding="10px">
                                        <P fontSize="xxs" $whitespace="normal" $lineHeight="1.6" $center>
                                            Automatic operator fusion & tensor composition
                                        </P>
                                    </Div>
                                    <Div display="flex" width="80%" height="60px" $backgroundColor="wh" $padding="10px">
                                        <P fontSize="xxs" $whitespace="normal" $lineHeight="1.6" $center>
                                            High-performance & scalable compute-kernels
                                        </P>
                                    </Div>
                                    <Div display="flex" width="80%" height="60px" $backgroundColor="wh" $padding="10px">
                                        <P fontSize="xxs" $whitespace="normal" $lineHeight="1.6" $center>
                                            Portable & direct deployment
                                        </P>
                                    </Div>
                                    <Div display="flex" width="80%" height="60px" $backgroundColor="wh" $padding="10px">
                                        <P fontSize="xxs" $whitespace="normal" $lineHeight="1.6" $center>
                                            Easy & abstract tensor API
                                        </P>
                                    </Div>
                                </Div>
                                <Div width="100%" display="flex" $margin="50px 0 ">
                                    <Div display="flex" $backgroundColor="wh" $padding="20px" $borderRadius="100px">
                                        <P $center fontWeight="800" color="red" fontSize="xs">
                                            Metep
                                            <br />
                                            AI Framework
                                        </P>
                                    </Div>
                                </Div>
                                <Div
                                    width="100%"
                                    height="350px"
                                    display="flex"
                                    direction="column"
                                    $justifyContent="space-between"
                                >
                                    <Div>
                                        <H2 fontSize="xs" fontWeight="800" color="red">
                                            Customer Value
                                        </H2>
                                    </Div>

                                    <Div display="flex" width="80%" height="60px" $backgroundColor="wh" $padding="10px">
                                        <P fontSize="xxs" $whitespace="normal" $lineHeight="1.6" $center>
                                            Promote AI service/product quality
                                        </P>
                                    </Div>
                                    <Div display="flex" width="80%" height="60px" $backgroundColor="wh" $padding="10px">
                                        <P fontSize="xxs" $whitespace="normal" $lineHeight="1.6" $center>
                                            Reduce AI cost & maximize profit
                                        </P>
                                    </Div>
                                    <Div display="flex" width="80%" height="60px" $backgroundColor="wh" $padding="10px">
                                        <P fontSize="xxs" $whitespace="normal" $lineHeight="1.6" $center>
                                            Shorten development time
                                        </P>
                                    </Div>

                                    <Div display="flex" width="80%" height="60px" $backgroundColor="wh" $padding="10px">
                                        <P fontSize="xxs" $whitespace="normal" $lineHeight="1.6" $center>
                                            Make our planet healthier
                                        </P>
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Mobile>
        </>
    )
}

export default Product
