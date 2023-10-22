import styled from "styled-components"

const Button = styled.button`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
  margin: ${(props) => props.margin || "0px"};
  padding: ${(props) => props.padding || "0px"};
  background-color: ${(props) =>
    props.theme.color[props.backgroundColor] || "inherit"};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.radius || "0"};
  cursor: pointer;
`

export default Button
