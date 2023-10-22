import { useState } from "react"
import { styled } from "styled-components"

import theme from "../../theme"

import { Mobile, PC } from "../../MediaQuery"
import { Div, Section } from "../../styles/Div"
import { P } from "../../styles/P"

import { useNavigate } from "react-router-dom"
import BLAS from "./BLAS"
import DLP from "./DLP"
import EndToEnd from "./EndToEnd"
import Tensor from "./Tensor"

const TabDiv = styled.div`
    width: 200px;
    height: 80px;
    padding: 10px 20px;
    margin: 0 20px 0 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ $clicked }) => {
        if ($clicked) {
            return `${theme.color.redlayer1};`
        }
        return `${theme.color.grey1};`
    }};
`

const TabMobileDiv = styled.div`
    width: 85px;
    height: 60px;
    margin: 0 5px 0 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ $clicked }) => {
        if ($clicked) {
            return `${theme.color.redlayer1};`
        }
        return `${theme.color.grey1};`
    }};
`

const TabP = styled.p`
    margin: 0;
    font-size: ${theme.fontSize.lg};
    text-align: center;
    color: ${({ $clicked }) => {
        if ($clicked) {
            return `${theme.color.red};`
        }
        return `${theme.color.bk};`
    }};
`

const TabMobileP = styled.p`
    margin: 0;
    font-size: ${theme.fontSize.xxs};
    text-align: center;
    color: ${({ $clicked }) => {
        if ($clicked) {
            return `${theme.color.red};`
        }
        return `${theme.color.bk};`
    }};
`

const Tab = () => {
    const [currentTab, setTab] = useState(0)

    const menuArr = [
        { name: "End-to-end", content: <EndToEnd /> },
        { name: `Tensor Operations`, content: <Tensor /> },
        { name: "DL Primitives", content: <DLP /> },
        { name: "BLAS Kernels", content: <BLAS /> },
    ]

    const selectMenuHandler = (index) => {
        setTab(index)
    }

    const navigate = useNavigate()

    const moveContact = () => {
        navigate("/contact")
    }

    return (
        <>
            <PC>
                <Section>
                    <Div width="100%" $margin="0 0 100px 0">
                        <Div width="100%" $backgroundColor="grey1" $padding="15px 0">
                            <P fontSize="xxl" $center fontWeight="800">
                                See our results
                            </P>
                        </Div>
                    </Div>
                    <Div width="100%" $padding="20px " display="flex" $justifyContent="start">
                        {menuArr.map((tab, index) => {
                            return (
                                <TabDiv
                                    key={index}
                                    $clicked={currentTab === index}
                                    onClick={() => selectMenuHandler(index)}
                                >
                                    <Div width="100%">
                                        <TabP $clicked={currentTab === index}>{tab.name}</TabP>
                                    </Div>
                                </TabDiv>
                            )
                        })}
                    </Div>
                    <Div width="100%" $padding="20px" $backgroundColor="grey1">
                        {menuArr[currentTab].content}
                    </Div>
                    <Div width="100%" display="flex">
                        <Div
                            $backgroundColor="redlayer1"
                            $margin="20px 0 100px 0"
                            $padding="20px 30px"
                            $borderRadius="10px"
                            onClick={moveContact}
                            $pointer
                        >
                            <P fontSize="lg" fontWeight={700}>
                                Contact us for all your question
                            </P>
                        </Div>
                    </Div>
                </Section>
            </PC>
            <Mobile>
                <Div width="100%" $margin="0 0 50px 0">
                    <Div width="100%" $backgroundColor="grey1" $padding="15px 0">
                        <P fontSize="sm" $center fontWeight="800">
                            See our results
                        </P>
                    </Div>
                </Div>

                <Div width="100%" display="flex" $justifyContent="start" margin="0 0 20px 0">
                    {menuArr.map((tab, index) => {
                        return (
                            <TabMobileDiv
                                key={index}
                                $clicked={currentTab === index}
                                onClick={() => selectMenuHandler(index)}
                            >
                                <Div width="100%">
                                    <TabMobileP $clicked={currentTab === index} fontSize="xs">
                                        {tab.name}
                                    </TabMobileP>
                                </Div>
                            </TabMobileDiv>
                        )
                    })}
                    <Div width="100%" $padding="20px" $backgroundColor="grey1">
                        {menuArr[currentTab].content}
                    </Div>
                    <Div width="100%" display="flex">
                        <Div
                            $backgroundColor="redlayer1"
                            $margin="20px 0 100px 0"
                            $padding="20px 30px"
                            $borderRadius="10px"
                            onClick={moveContact}
                        >
                            <P fontSize="xxs" fontWeight={700}>
                                Contact us for all your question
                            </P>
                        </Div>
                    </Div>
                </Div>
            </Mobile>
        </>
    )
}

export default Tab
