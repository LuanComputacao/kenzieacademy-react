import React from "react"
import styled from "styled-components";
import Config from "../../styled/config"

const StyledButton = styled.a`
background: ${Config.bgColors.secondary};
color: ${Config.bgColors.clear};
border-radius: ${Config.border.radius};
padding: 1em 2em;

    &:hover{
        background: ${Config.bgColors.callToAction};
        cursor: pointer;
    }
`


const Button = ({text}) => {
    return <StyledButton>
        {text}
    </StyledButton>
}

export default Button