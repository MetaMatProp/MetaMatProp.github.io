import styled from "styled-components"

const H1 = styled.h1`
    width: 100%;
    height: fit-content;
    margin: 0;
    padding: 0;
    font-size: ${(props) => props.theme.fontSize[props.fontSize] || props.theme.fontSize.xl};
    font-weight: ${(props) => props.fontWeight || "700"};
    color: ${(props) => props.theme.color[props.color] || props.theme.color.bk};
    ${(props) => props.$center && "text-align: center"};
    line-height: ${(props) => props.$lineHeight || "1.2"};
`

const H2 = styled.h2`
    width: 100%;
    height: fit-content;
    margin: 0;
    padding: 0;
    font-size: ${(props) => props.theme.fontSize[props.fontSize] || props.theme.fontSize.lg};
    font-weight: ${(props) => props.fontWeight || "500"};
    color: ${(props) => props.theme.color[props.color] || props.theme.color.bk};
    ${(props) => props.$center && "text-align: center"};
    line-height: ${(props) => props.$lineHeight || "1.2"};
`

export { H1, H2 }
