import styled from "styled-components"

const Input = styled.input`
    width: ${(props) => props.width || ""};
    height: ${(props) => props.height || ""};
    margin: ${(props) => props.margin || "0px"};
    padding: ${(props) => props.padding || "5px 10px"};
    background-color: ${(props) => props.theme.color[props.backgroundColor] || "inherit"};
    font-size: ${(props) => props.theme.fontSize[props.fontSize] || props.theme.fontSize.sm};
    color: ${(props) => props.theme.color[props.color] || props.theme.color.default};
    border: ${(props) => props.$border || "none"};
    border-radius: ${(props) => props.$borderRadius || "none"};
    display: ${(props) => props.display || "inline-block"};
    text-indent: ${(props) => props.textIndent || 0};
    &:focus {
        outline: none;
    }
`

const TextInput = styled(Input).attrs({ type: "text" })`
    border: 1px solid ${(props) => props.theme.color.grey1};
    border-radius: 4px;
    ::-webkit-input-placeholder {
        color: ${(props) => props.theme.color.grey2};
    }
    box-sizing: border-box;
    padding: ${(props) => props.padding || "13px 10px"};
    height: ${(props) => props.height || "40px"};
`

const NumberInput = styled(TextInput).attrs({ type: "number" })`
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

const Checkbox = styled.input.attrs({ type: "checkbox" })`
    appearance: none;
    margin: 0;
    width: 18px;
    height: 18px;
    border: 1.5px solid ${(props) => props.theme.color.grey3};
    border-radius: 4px;

    :hover {
        cursor: pointer;
    }

    :checked {
        background: center url("/images/checkbox_img.svg") no-repeat;
        border: none;
    }
`

const Label = styled.label`
    font-size: ${(props) => props.fontSize || "14px"};
    width: ${(props) => props.width || ""};
    height: ${(props) => props.height || ""};
    margin: ${(props) => props.margin || ""};
    padding: ${(props) => props.padding || ""};
    color: ${(props) => props.theme.color[props.color] || props.theme.color.bk};

    :hover {
        cursor: pointer;
    }
`

const Radio = styled.input.attrs({ type: "radio" })`
    appearance: none;
    margin: 0 8px 0 0;
    width: ${(props) => props.width || "18px"};
    height: ${(props) => props.height || "18px"};
    border: 1.5px solid ${(props) => props.theme.color.grey3};
    border-radius: 50%;

    :hover {
        cursor: pointer;
    }

    :checked {
        background: center url("/images/radio_img.svg") no-repeat;
        border: none;
        background-size: cover;
    }
`

const Date = styled.input.attrs({ type: "date" })`
    font-size: 14px;
    width: ${(props) => props.width || ""};
    height: ${(props) => props.height || ""};
    margin: ${(props) => props.margin || ""};
    padding: ${(props) => props.padding || ""};
    border: 1px solid ${(props) => props.theme.color.grey1};
    color: ${(props) => props.theme.color[props.color] || props.theme.color.bk};
`

const TextArea = styled.textarea`
    width: ${(props) => props.width || ""};
    height: ${(props) => props.height || ""};
    margin: ${(props) => props.margin || "0px"};
    padding: ${(props) => props.padding || "12px 14px 14px"};
    background-color: ${(props) => props.theme.color[props.backgroundColor] || "inherit"};
    font-size: ${(props) => props.theme.fontSize[props.fontSize] || props.theme.fontSize.sm};
    color: ${(props) => props.theme.color[props.color] || props.theme.color.bk};
    border: 1px solid ${(props) => props.theme.color.grey1};
    border-radius: ${(props) => props.borderRadius || "4px"};
    display: ${(props) => props.display || "inline-block"};
    resize: none;
    &:focus {
        outline: none;
    }
    ::-webkit-input-placeholder {
        color: ${(props) => props.theme.color.grey2};
    }
`

const Select = styled.select`
    border: 1px solid ${(props) => props.theme.color.grey1};
    border-radius: 4px;
    box-sizing: border-box;
    padding: 0 6px;
    height: 40px;
    width: 100%;
    border-radius: 4px;
    font-size: 14px;

    &:focus {
        outline: none;
    }

    &:invalid {
        color: ${(props) => props.theme.color.grey2};
    }
`

export { Checkbox, Date, Input, Label, NumberInput, Radio, Select, TextArea, TextInput }
