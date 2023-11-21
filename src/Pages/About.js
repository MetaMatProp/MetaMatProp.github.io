import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import theme from "../theme";

import { Mobile, PC } from "../MediaQuery";

import { Div, Section } from "../styles/Div";
import { H2 } from "../styles/H";
import { P } from "../styles/P";

const MoveDiv = styled(Div)`
    cursor: pointer;
`;

const About = () => {
    const navigate = useNavigate();
    const moveEvent = () => {
        navigate("/contact");
    };
    return (
        <>
            <PC>
                <Section id="about">
                    <Div $backgroundColor="grey1" width="100%" $padding="0 0 30px 0" $margin="0 0 100px 0">
                        <Div width="100%" $backgroundColor="grey" $padding="15px 0">
                            <P fontSize="xxl" $center fontWeight="800">
                                Where DesignedAI can help you!
                            </P>
                        </Div>
                        <Div display="flex" width="100%" $margin="50px 0 0 0 ">
                            <Div width="90%" display="flex" $margin="80px 0 0 0">
                                <Div $minWidth="35%" $backgroundColor="redlayer1" $padding="50px" height="100%">
                                    <Div width="100%">
                                        <P fontWeight="800" fontSize="xl" $lineHeight="1.6" $center>
                                            Cloud service providers
                                        </P>
                                    </Div>
                                </Div>
                                <Div $padding="0 0 0 50px" width="60%">
                                    <Div width="100%">
                                        <P $whitespace="normal" fontSize="lg" $lineHeight="1.6">
                                            Cut your cloud cost. We can help to run multiple instances of your AI mode
                                            without additional cost and save electricity bill.
                                            <br />
                                            <br />
                                            Make more responsive to customer. We can help to process your data faster.
                                        </P>
                                    </Div>
                                </Div>
                            </Div>
                            <Div width="90%" display="flex" $margin="80px 0 0 0">
                                <Div $minWidth="35%" $backgroundColor="redlayer1" $padding="30px 50px" height="100%">
                                    <Div width="100%">
                                        <P fontWeight="800" fontSize="xl" $lineHeight="1.6" $center>
                                            AI chip makers
                                        </P>
                                    </Div>
                                </Div>
                                <Div $padding="0 0 0 50px" width="60%">
                                    <Div width="100%">
                                        <P $whitespace="normal" fontSize="lg" $lineHeight="1.6">
                                            Preserve the best performance of your AI chip at application level. We can
                                            help to develop AI software stacks including compute-kernels for your AI
                                            chips.
                                        </P>
                                    </Div>
                                </Div>
                            </Div>
                            <Div width="90%" display="flex" $margin="80px 0 0 0">
                                <Div $minWidth="35%" $backgroundColor="redlayer1" $padding="50px" height="100%">
                                    <Div width="100%">
                                        <P fontWeight="800" fontSize="xl" $lineHeight="1.6" $center>
                                            Edge and tiny AI area
                                        </P>
                                    </Div>
                                </Div>
                                <Div $padding="0 0 0 50px" width="60%">
                                    <Div width="100%">
                                        <P $whitespace="normal" fontSize="lg" $lineHeight="1.6">
                                            Be more sustainable. We can help to last the battery longer.
                                            <br />
                                            <br />
                                            Reduce development cost and time. We can help to optimize your AI model on a
                                            resouce-limited target device.
                                        </P>
                                    </Div>
                                </Div>
                            </Div>
                            <Div width="90%" display="flex" $margin="80px 0 0 0">
                                <Div $minWidth="35%" $backgroundColor="redlayer1" $padding="20px 50px" height="100%">
                                    <Div width="100%">
                                        <P fontWeight="800" fontSize="xl" $lineHeight="1.6" $center>
                                            Company for introducing AI
                                        </P>
                                    </Div>
                                </Div>
                                <Div $padding="0 0 0 50px" width="60%">
                                    <Div width="100%">
                                        <P $whitespace="normal" fontSize="lg" $lineHeight="1.6">
                                            Make AI adoption fast and easy. We can help to build custom AI solution as
                                            well as consult AI expertise for your business purpose.
                                        </P>
                                    </Div>
                                </Div>
                            </Div>
                            <Div width="90%" display="flex" $margin="80px 0">
                                <Div $minWidth="35%" $backgroundColor="redlayer1" $padding="20px 50px" height="100%">
                                    <Div width="100%">
                                        <P fontWeight="800" fontSize="xl" $lineHeight="1.6" $center>
                                            Scientific research groups
                                        </P>
                                    </Div>
                                </Div>
                                <Div $padding="0 0 0 50px" width="60%">
                                    <Div width="100%">
                                        <P $whitespace="normal" fontSize="lg" $lineHeight="1.6">
                                            Focus on your domain task. We can help to run your computation algorithm or
                                            simulation more efficiently.
                                        </P>
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                    </Div>

                    <Div width="100vw" height="100vh" display="flex">
                        <Div
                            width="80%"
                            $padding="50px 70px"
                            display="flex"
                            direction="column"
                            $border={`1px solid ${theme.color.red2}`}
                        >
                            <Div $margin="0 0 50px 0">
                                <H2 fontSize="xxxl" fontWeight="800" $center>
                                    We are excited to help your AI business and become a partner with you!
                                </H2>
                            </Div>
                            <MoveDiv
                                $backgroundColor="red2"
                                display="flex"
                                $padding="30px 50px"
                                $margin="0 0 50px 0"
                                $borderRadius="30px"
                                pointer
                                onClick={moveEvent}
                            >
                                <H2 fontSize="xxxl" fontWeight="800" $center>
                                    Contact us for all your questions
                                </H2>
                            </MoveDiv>
                        </Div>
                    </Div>
                </Section>
            </PC>

            <Mobile>
                <Div $backgroundColor="grey1" width="100%" $margin="0 0 100px 0">
                    <Div width="100%" $backgroundColor="grey" $padding="15px 0">
                        <P fontSize="xs" $center fontWeight="800">
                            Where DesignedAI can help you!
                        </P>
                    </Div>
                    <Div display="flex" width="100%" $margin="10px 0 30px">
                        <Div width="90%" display="flex" direction="column" $margin="30px 0 0 0">
                            <Div
                                width="100%"
                                $margin="0 0 30px 0"
                                $padding="20px"
                                $backgroundColor="redlayer1"
                                height="100%"
                            >
                                <Div width="100%">
                                    <P fontWeight="800" fontSize="xs" $lineHeight="1.6" $center>
                                        Cloud service providers
                                    </P>
                                </Div>
                            </Div>
                            <Div width="100%">
                                <Div width="100%">
                                    <P $whitespace="normal" fontSize="xxs" $lineHeight="1.6">
                                        Cut your cloud cost. We can help to run multiple instances of your AI mode
                                        without additional cost and save electricity bill.
                                        <br />
                                        <br />
                                        Make more responsive to customer. We can help to process your data faster.
                                    </P>
                                </Div>
                            </Div>
                        </Div>
                        <Div width="90%" display="flex" direction="column" $margin="30px 0 0 0">
                            <Div
                                width="100%"
                                $margin="0 0 30px 0"
                                $padding="20px"
                                $backgroundColor="redlayer1"
                                height="100%"
                            >
                                <Div width="100%">
                                    <P fontWeight="800" $lineHeight="1.6" $center fontSize="xs">
                                        AI chip makers
                                    </P>
                                </Div>
                            </Div>
                            <Div width="100%">
                                <Div width="100%">
                                    <P $whitespace="normal" fontSize="xxs" $lineHeight="1.6">
                                        Preserve the best performance of your AI chip at application level. We can help
                                        to develop AI software stacks including compute-kernels for your AI chips.
                                    </P>
                                </Div>
                            </Div>
                        </Div>
                        <Div width="90%" display="flex" direction="column" $margin="30px 0 0 0">
                            <Div
                                width="100%"
                                $margin="0 0 30px 0"
                                $padding="20px"
                                $backgroundColor="redlayer1"
                                height="100%"
                            >
                                <Div width="100%">
                                    <P fontWeight="800" $lineHeight="1.6" $center fontSize="xs">
                                        Edge and tiny AI area
                                    </P>
                                </Div>
                            </Div>
                            <Div width="100%">
                                <Div width="100%">
                                    <P $whitespace="normal" fontSize="xxs" $lineHeight="1.6">
                                        Be more sustainable. We can help to last the battery longer.
                                        <br />
                                        <br />
                                        Reduce development cost and time. We can help to optimize your AI model on a
                                        resouce-limited target device.
                                    </P>
                                </Div>
                            </Div>
                        </Div>
                        <Div width="90%" display="flex" direction="column" $margin="30px 0 0 0">
                            <Div
                                width="100%"
                                $margin="0 0 30px 0"
                                $padding="20px"
                                $backgroundColor="redlayer1"
                                height="100%"
                            >
                                <Div width="100%">
                                    <P fontWeight="800" $lineHeight="1.6" $center fontSize="xs">
                                        Company for introducing AI
                                    </P>
                                </Div>
                            </Div>
                            <Div width="100%">
                                <Div width="100%">
                                    <P $whitespace="normal" fontSize="xxs" $lineHeight="1.6">
                                        Make AI adoption fast and easy. We can help to build custom AI solution as well
                                        as consult AI expertise for your business purpose.
                                    </P>
                                </Div>
                            </Div>
                        </Div>
                        <Div width="90%" display="flex" direction="column" $margin="30px 0 0 0">
                            <Div
                                width="100%"
                                $margin="0 0 30px 0"
                                $padding="20px"
                                $backgroundColor="redlayer1"
                                height="100%"
                            >
                                <Div width="100%">
                                    <P fontWeight="800" $lineHeight="1.6" $center fontSize="xs">
                                        Scientific research groups
                                    </P>
                                </Div>
                            </Div>
                            <Div width="100%">
                                <Div width="100%">
                                    <P $whitespace="normal" fontSize="xxs" $lineHeight="1.6">
                                        Focus on your domain task. We can help to run your computation algorithm or
                                        simulation more efficiently.
                                    </P>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                </Div>

                <Div width="100vw" height="100vh" display="flex">
                    <Div
                        width="80%"
                        $padding="20px"
                        display="flex"
                        direction="column"
                        $border={`1px solid ${theme.color.red2}`}
                    >
                        <Div $margin="0 0 30px 0">
                            <H2 fontSize="sm" fontWeight="800" $center>
                                We are excited to help your AI business and become a partner with you!
                            </H2>
                        </Div>
                        <Div
                            $backgroundColor="red2"
                            display="flex"
                            $padding="20px"
                            $margin="0 0 30px 0"
                            $borderRadius="30px"
                            pointer
                            onClick={moveEvent}
                        >
                            <H2 fontSize="sm" fontWeight="800" $center>
                                Contact us for all your questions
                            </H2>
                        </Div>
                    </Div>
                </Div>
            </Mobile>
        </>
    );
};

export default About;
