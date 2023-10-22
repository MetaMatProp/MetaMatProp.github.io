import styled from "styled-components"

const Div = styled.div`
    width: ${(props) => props.width || "fit-content"};
    height: ${(props) => props.height || "fit-content"};
    margin: ${(props) => props.$margin || "0px"};
    padding: ${(props) => props.$padding || "0px"};
    background-color: ${(props) => props.theme.color[props.$backgroundColor] || "transparent"};
    z-index: ${(props) => props.zIndex || "auto"};
    border: ${(props) => props.$border || "none"};
    border-top: ${(props) => props.borderTop || ""};
    border-bottom: ${(props) => props.$borderBottom || ""};
    border-right: ${(props) => props.borderRight || ""};
    border-left: ${(props) => props.borderLeft || ""};
    border-radius: ${(props) => props.$borderRadius || "none"};
    border-collapse: collapse;
    display: ${(props) => props.display || "block"};
    align-items: ${(props) => props.$alignItems || "center"};
    justify-content: ${(props) => props.$justifyContent || "center"};
    flex-direction: ${(props) => props.direction || "row"};
    flex-wrap: ${(props) => props.wrap || "wrap"};
    ${(props) => props.$pointer && "cursor:pointer;"};
    min-height: ${(props) => props.$minHeight || ""};
    min-width: ${(props) => props.$minWidth || ""};
    overflow: ${(props) => props.overflow || "visible"};
    box-shadow: ${(props) => props.$shadow || ""};
    max-height: ${(props) => props.$maxHeight || ""};
`

const Section = styled(Div)`
    display: flex;
    align-items: center;
    justify-contents; center;
    // max-width: 1450px;
    width: calc(100vw - (100vw - 100%));
`
const MainSection = styled(Div)`
    display: flex;
    align-items: center;
    justify-contents; center;
    min-width: 100vw;
`

const SuperDiv = styled(Div)`
    overflow-y: hidden;
    overflow-x: hidden;
    width: 100%;
`
export { Div, MainSection, Section, SuperDiv }
