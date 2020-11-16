import React from "react"
import styled from "styled-components";
import {bgColors, border} from "../../styled/config"

const StyledButton = styled.a`
background: ${props => props.modifier ? bgColors[props.modifier] : bgColors.callToAction};
color: ${bgColors.clear};
border-radius: ${border.radius};
padding: 1em 2em;

    &:hover{
        background: ${props => props.modifier ? bgColors[props.modifier] : bgColors.callToAction};
        cursor: pointer;
    }
`


const Button = ({text, modifier}) => (
    <StyledButton modifier={modifier}>
        {text}
    </StyledButton>
)

export default Button