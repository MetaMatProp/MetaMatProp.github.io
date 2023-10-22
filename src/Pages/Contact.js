import emailjs from "@emailjs/browser"
import { useRef } from "react"

import theme from "../theme"

import { Mobile, PC } from "../MediaQuery"

import { useNavigate } from "react-router-dom"
import Bottom from "../Components/Bottom"
import ContactHeader from "../Components/Header"
import { Div } from "../styles/Div"
import { H2 } from "../styles/H"
import { Input, TextArea } from "../styles/Input"
import { P } from "../styles/P"

const Contact = () => {
    const navigate = useNavigate()
    const form = useRef()
    const inputRef = useRef([])

    const sendEmail = (e) => {
        e.preventDefault()
        let inputCheck = true

        if (inputRef.current[0].value === "") {
            alert("'First Name' field is required")
            inputCheck = false
        }
        if (inputCheck && inputRef.current[1].value === "") {
            alert("'Last Name' field is required")
            inputCheck = false
        }
        if (inputCheck && inputRef.current[2].value === "") {
            alert("'Company or Affiation' field is required")
            inputCheck = false
        }
        if (inputCheck && inputRef.current[3].value === "") {
            alert("'Job title' field is required")
            inputCheck = false
        }
        if (inputCheck && inputRef.current[4].value === "") {
            alert("'Email' field is required")
            inputCheck = false
        }
        if (inputCheck && inputRef.current[5].value === "") {
            alert("'Phone number' field is required")
            inputCheck = false
        }
        if (inputCheck && inputRef.current[6].value === "") {
            alert("'Message' field is required")
            inputCheck = false
        }
        if (inputCheck) {
            emailjs
                .sendForm(
                    `${process.env.REACT_APP_SERVICE_ID}`,
                    `${process.env.REACT_APP_TEMPLATE_ID}`,
                    form.current,
                    `${process.env.REACT_APP_USER_ID}`
                )
                .then(
                    (result) => {
                        alert("Message sent successfully")
                        navigate("/")
                    },
                    (error) => {
                        alert("Message delivery failed for unknown reason. Please try again.")
                    }
                )
        }
    }

    return (
        <>
            <PC>
                <ContactHeader />
                <Div display="flex" width="100%" $margin="100px 0 ">
                    <Div width="700px" $padding="20px" $border={`1px solid ${theme.color.red2}`}>
                        <form ref={form}>
                            <Div $margin="7px 0">
                                <H2 fontWeight="800">Fill the form below</H2>
                            </Div>

                            <Div display="flex" width="100%" $justifyContent="space-between">
                                <Div width="49%">
                                    <Div $margin="7px 0">
                                        <P fontSize="sm">First Name *</P>
                                    </Div>
                                    <Div $margin="7px 0" width="100%">
                                        <Input
                                            width="100%"
                                            ref={(e) => (inputRef.current[0] = e)}
                                            required
                                            name="first_name"
                                            $margin="10px 0"
                                            $border={`1px solid ${theme.color.grey}`}
                                            $borderRadius="5px"
                                        />
                                    </Div>
                                </Div>
                                <Div width="49%">
                                    <Div $margin="7px 0">
                                        <P fontSize="sm">Last Name *</P>
                                    </Div>
                                    <Div $margin="7px 0" width="100%">
                                        <Input
                                            width="100%"
                                            ref={(e) => (inputRef.current[1] = e)}
                                            required
                                            name="last_name"
                                            $border={`1px solid ${theme.color.grey}`}
                                            $borderRadius="7px"
                                        />
                                    </Div>
                                </Div>
                            </Div>

                            <Div width="100%">
                                <Div $margin="7px 0">
                                    <P fontSize="sm">Company or Affiation *</P>
                                </Div>
                                <Div width="100%" $margin="7px 0">
                                    <Input
                                        ref={(e) => (inputRef.current[2] = e)}
                                        required
                                        name="company"
                                        width="100%"
                                        $border={`1px solid ${theme.color.grey}`}
                                        $borderRadius="5px"
                                    />
                                </Div>
                            </Div>

                            <Div width="100%">
                                <Div $margin="7px 0">
                                    <P fontSize="sm">Job title *</P>
                                </Div>
                                <Div width="100%" $margin="7px 0">
                                    <Input
                                        ref={(e) => (inputRef.current[3] = e)}
                                        required
                                        name="job"
                                        width="100%"
                                        $border={`1px solid ${theme.color.grey}`}
                                        $borderRadius="5px"
                                    />
                                </Div>
                            </Div>

                            <Div display="flex" width="100%" $justifyContent="space-between">
                                <Div width="49%">
                                    <Div $margin="7px 0">
                                        <P fontSize="sm">Email *</P>
                                    </Div>
                                    <Div $margin="7px 0" width="100%">
                                        <Input
                                            width="100%"
                                            ref={(e) => (inputRef.current[4] = e)}
                                            required
                                            type="email"
                                            name="email"
                                            $margin="10px 0"
                                            $border={`1px solid ${theme.color.grey}`}
                                            $borderRadius="5px"
                                        />
                                    </Div>
                                </Div>
                                <Div width="49%">
                                    <Div $margin="7px 0">
                                        <P fontSize="sm">Phone number *</P>
                                    </Div>
                                    <Div $margin="7px 0" width="100%">
                                        <Input
                                            width="100%"
                                            ref={(e) => (inputRef.current[5] = e)}
                                            required
                                            name="phone"
                                            $border={`1px solid ${theme.color.grey}`}
                                            $borderRadius="5px"
                                        />
                                    </Div>
                                </Div>
                            </Div>

                            <Div width="100%">
                                <Div $margin="7px 0">
                                    <P fontSize="sm" color="grey2">
                                        How did you hear about DesignedAI?
                                    </P>
                                </Div>
                                <Div width="100%" $margin="7px 0">
                                    <Input
                                        name="how"
                                        width="100%"
                                        $border={`1px solid ${theme.color.grey}`}
                                        $borderRadius="5px"
                                    />
                                </Div>
                            </Div>

                            <Div width="100%">
                                <Div $margin="7px 0">
                                    <P fontSize="sm" color="grey2">
                                        What is your task?
                                    </P>
                                </Div>
                                <Div width="100%" $margin="7px 0">
                                    <Input
                                        name="task"
                                        width="100%"
                                        $border={`1px solid ${theme.color.grey}`}
                                        $borderRadius="5px"
                                    />
                                </Div>
                            </Div>

                            <Div width="100%">
                                <Div $margin="7px 0">
                                    <P fontSize="sm" color="grey2">
                                        What brings you to DesignedAI?
                                    </P>
                                </Div>
                                <Div width="100%" $margin="7px 0">
                                    <Input
                                        name="what"
                                        width="100%"
                                        $border={`1px solid ${theme.color.grey}`}
                                        $borderRadius="5px"
                                    />
                                </Div>
                            </Div>

                            <Div width="100%">
                                <Div $margin="7px 0">
                                    <P fontSize="sm">Message*</P>
                                </Div>
                                <Div width="100%" $margin="7px 0">
                                    <TextArea
                                        ref={(e) => (inputRef.current[6] = e)}
                                        required
                                        name="message"
                                        width="100%"
                                        height="200px"
                                        $border={`1px solid ${theme.color.grey}`}
                                        $borderRadius="5px"
                                    />
                                </Div>
                            </Div>

                            <Div
                                onClick={sendEmail}
                                $backgroundColor="red2"
                                $padding="10px 30px"
                                $borderRadius="5px"
                                $pointer
                            >
                                <P>SEND</P>
                            </Div>
                        </form>
                    </Div>
                    <Div display="flex" width="550px" $margin="0 0 0 50px" $padding="30px" direction="column">
                        <Div display="flex">
                            <H2 fontSize="lg" $center fontWeight={800}>
                                Meet with our expert and <br /> have all your questions answered
                            </H2>
                        </Div>
                        <Div display="flex" width="100%" $justifyContent="start" $margin="50px 0 0 0">
                            <P fontSize="sm" color="grey2">
                                We are located at
                            </P>
                        </Div>
                        <Div display="flex" width="100%" $justifyContent="end" $padding="0 0 50px 0">
                            <Div>
                                <P fontSize="sm" color="grey2">
                                    604, 57 Dongtancheomdansaneop 1-ro,
                                    <br />
                                    Hwaseong-si, Gyeonggi-do, 18469,
                                    <br />
                                    South Korea
                                </P>
                            </Div>
                        </Div>
                    </Div>
                </Div>
                <Bottom />
            </PC>

            <Mobile>
                <Div display="flex" width="100%">
                    <Div width="520px" $padding="20px" $margin="10px 0 " $border={`1px solid ${theme.color.red2}`}>
                        <form ref={form}>
                            <Div $margin="7px 0">
                                <H2 fontWeight="800" fontSize="sm">
                                    Fill the form below
                                </H2>
                            </Div>

                            <Div display="flex" width="100%" $justifyContent="space-between">
                                <Div width="49%">
                                    <Div $margin="7px 0">
                                        <P fontSize="xxs">First Name *</P>
                                    </Div>
                                    <Div $margin="7px 0" width="100%">
                                        <Input
                                            width="100%"
                                            ref={(e) => (inputRef.current[0] = e)}
                                            required
                                            name="first_name"
                                            $margin="10px 0"
                                            $border={`1px solid ${theme.color.grey}`}
                                            $borderRadius="5px"
                                        />
                                    </Div>
                                </Div>
                                <Div width="49%">
                                    <Div $margin="7px 0">
                                        <P fontSize="xxs">Last Name *</P>
                                    </Div>
                                    <Div $margin="7px 0" width="100%">
                                        <Input
                                            width="100%"
                                            ref={(e) => (inputRef.current[1] = e)}
                                            required
                                            name="last_name"
                                            $border={`1px solid ${theme.color.grey}`}
                                            $borderRadius="7px"
                                        />
                                    </Div>
                                </Div>
                            </Div>

                            <Div width="100%">
                                <Div $margin="7px 0">
                                    <P fontSize="xxs">Company or Affiation *</P>
                                </Div>
                                <Div width="100%" $margin="7px 0">
                                    <Input
                                        ref={(e) => (inputRef.current[2] = e)}
                                        required
                                        name="company"
                                        width="100%"
                                        $border={`1px solid ${theme.color.grey}`}
                                        $borderRadius="5px"
                                    />
                                </Div>
                            </Div>

                            <Div width="100%">
                                <Div $margin="7px 0">
                                    <P fontSize="xxs">Job title *</P>
                                </Div>
                                <Div width="100%" $margin="7px 0">
                                    <Input
                                        ref={(e) => (inputRef.current[3] = e)}
                                        required
                                        name="job"
                                        width="100%"
                                        $border={`1px solid ${theme.color.grey}`}
                                        $borderRadius="5px"
                                    />
                                </Div>
                            </Div>

                            <Div display="flex" width="100%" $justifyContent="space-between">
                                <Div width="49%">
                                    <Div $margin="7px 0">
                                        <P fontSize="xxs">Email *</P>
                                    </Div>
                                    <Div $margin="7px 0" width="100%">
                                        <Input
                                            width="100%"
                                            ref={(e) => (inputRef.current[4] = e)}
                                            required
                                            type="email"
                                            name="email"
                                            $margin="10px 0"
                                            $border={`1px solid ${theme.color.grey}`}
                                            $borderRadius="5px"
                                        />
                                    </Div>
                                </Div>
                                <Div width="49%">
                                    <Div $margin="7px 0">
                                        <P fontSize="xxs">Phone number *</P>
                                    </Div>
                                    <Div $margin="7px 0" width="100%">
                                        <Input
                                            width="100%"
                                            ref={(e) => (inputRef.current[5] = e)}
                                            required
                                            name="phone"
                                            $border={`1px solid ${theme.color.grey}`}
                                            $borderRadius="5px"
                                        />
                                    </Div>
                                </Div>
                            </Div>

                            <Div width="100%">
                                <Div $margin="7px 0">
                                    <P fontSize="xxs" color="grey2">
                                        How did you hear about DesignedAI?
                                    </P>
                                </Div>
                                <Div width="100%" $margin="7px 0">
                                    <Input
                                        name="how"
                                        width="100%"
                                        $border={`1px solid ${theme.color.grey}`}
                                        $borderRadius="5px"
                                    />
                                </Div>
                            </Div>

                            <Div width="100%">
                                <Div $margin="7px 0">
                                    <P fontSize="xxs" color="grey2">
                                        What is your task?
                                    </P>
                                </Div>
                                <Div width="100%" $margin="7px 0">
                                    <Input
                                        name="task"
                                        width="100%"
                                        $border={`1px solid ${theme.color.grey}`}
                                        $borderRadius="5px"
                                    />
                                </Div>
                            </Div>

                            <Div width="100%">
                                <Div $margin="7px 0">
                                    <P fontSize="xxs" color="grey2">
                                        What brings you to DesignedAI?
                                    </P>
                                </Div>
                                <Div width="100%" $margin="7px 0">
                                    <Input
                                        name="what"
                                        width="100%"
                                        $border={`1px solid ${theme.color.grey}`}
                                        $borderRadius="5px"
                                    />
                                </Div>
                            </Div>

                            <Div width="100%">
                                <Div $margin="7px 0">
                                    <P fontSize="xxs">Message*</P>
                                </Div>
                                <Div width="100%" $margin="7px 0">
                                    <TextArea
                                        ref={(e) => (inputRef.current[6] = e)}
                                        required
                                        name="message"
                                        width="100%"
                                        height="200px"
                                        $border={`1px solid ${theme.color.grey}`}
                                        $borderRadius="5px"
                                    />
                                </Div>
                            </Div>

                            <Div
                                onClick={sendEmail}
                                $backgroundColor="red2"
                                $padding="10px 30px"
                                $borderRadius="5px"
                                $pointer
                            >
                                <P fontSize="xs">SEND</P>
                            </Div>
                        </form>
                    </Div>
                    <Div display="flex" width="520px" $padding="20px" direction="column">
                        <Div display="flex">
                            <H2 fontSize="sm" $center fontWeight={800}>
                                Meet with our expert and <br /> have all your questions answered
                            </H2>
                        </Div>
                        <Div display="flex" width="100%" $justifyContent="start" $margin="50px 0 0 0">
                            <P color="grey2" fontSize="xxs">
                                We are located at
                            </P>
                        </Div>
                        <Div display="flex" width="100%" $justifyContent="end" $padding="0 0 50px 0">
                            <Div>
                                <P color="grey2" fontSize="xxs">
                                    604, 57 Dongtancheomdansaneop 1-ro,
                                    <br />
                                    Hwaseong-si, Gyeonggi-do, 18469,
                                    <br />
                                    South Korea
                                </P>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Mobile>
        </>
    )
}

export default Contact
