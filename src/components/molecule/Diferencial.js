import React from "react";
import styled from "styled-components";
import okBubble from "../../images/ok-bubble.svg"
import {text} from "../../styled/config"


const StyledDiferencial = styled.div`
  padding: 1em 1em;
  display: flex;
  flex-direction: row;
  color: ${text.grey};
`

const StyledIcon = styled.div`
  background: url(${okBubble}) no-repeat;
  background-size: 2.4em;
  padding: 1.2em;
`

const StyledHeader = styled.h3`
  flex-direction: row;
  display: flex;
  margin: 0.5em 0 0;
  padding-bottom: 0.5em;
  font-size: 1.1em;
`

const StyledText = styled.p`
  font-size: 1.1em;
  flex-direction: row;
  display: flex;
  align-items: center;
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0.6em;
`

function Diferencial({data}) {
    return (
        <StyledDiferencial>
            <StyledIcon/>
            <StyledContent>
                <StyledHeader>
                    {data.title}
                </StyledHeader>
                <StyledText>
                    {data.text}
                </StyledText>
            </StyledContent>
        </StyledDiferencial>
    )
}

export default Diferencial