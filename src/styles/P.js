import styled from "styled-components"

const P = styled.p`
    width: 100%;
    height: fit-content;
    margin: 0;
    padding: 0;
    font-size: ${(props) => props.theme.fontSize[props.fontSize] || props.theme.fontSize.md};
    font-weight: ${(props) => props.fontWeight || "500"};
    word-wrap: break-word;
    color: ${(props) => props.theme.color[props.color] || props.theme.color.bk};
    white-space: ${(props) => props.$whitespace || "normal"};
    overflow: hidden;
    text-overflow: ellipsis;
    ${(props) => props.$center && "text-align: center"};
    ${(props) => props.underline && "text-decoration-line: underline"};
    line-height: ${(props) => props.$lineHeight || "1.2"};
`

const Pre = styled.pre`
    width: 100%;
    height: fit-content;
    margin: 0;
    padding: 0;
    font-size: ${(props) => props.theme.fontSize[props.fontSize] || props.theme.fontSize.md};
    font-weight: ${(props) => props.fontWeight || "500"};
    word-wrap: break-word;
    color: ${(props) => props.theme.color[props.color] || props.theme.color.bk};
    white-space: ${(props) => props.whitespace || "nowrap"};
    overflow: hidden;
    text-overflow: ellipsis;
    ${(props) => props.$center && "text-align: center"};
    ${(props) => props.underline && "text-decoration-line: underline"};
`

export { P, Pre }
