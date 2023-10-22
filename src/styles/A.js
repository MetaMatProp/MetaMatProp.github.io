import styled from "styled-components"

const A = styled.a`
    width: 100%;
    height: fit-content;
    margin: 0;
    padding: 0;
    font-size: ${(props) => props.theme.fontSize[props.fontSize] || props.theme.fontSize.md};
    font-weight: ${(props) => props.fontWeight || "500"};
    word-wrap: break-word;
    color: ${(props) => props.theme.color[props.color] || props.theme.color.bk};
    overflow: hidden;
    text-overflow: ellipsis;
    ${(props) => props.center && "text-align: center"};
`

export default A
