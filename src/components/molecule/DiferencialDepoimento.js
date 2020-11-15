import React from "react";
import styled from "styled-components";
import doubleQuotes from "../../images/double-quotes.svg"
import colors from "../../styled/config"


const StyledDiferencial = styled.div`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  color: ${colors.text.grey};
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 0.6em;
`

const StyledIcon = styled.div`
  background: url(${doubleQuotes}) no-repeat;
  background-size: 2.6em;
  padding: 1.3em;
`


const StyledText = styled.p`
  flex-direction: row;
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 1.2em;
  font-style: italic;
  line-height: 1.4em;
  padding-right: 6em;
`

const StyledAluno = styled.div`
  display: flex;
  flex-direction: column;
  align-self: end;
  padding: 2em;
`

const StyledAlunoNome = styled.div`
  font-weight: bold;
  padding: 0 0 0.3em;
`

function Diferencial({data}) {
    return (
        <StyledDiferencial>
            <StyledContent>
                <StyledIcon/><StyledText>{data.text}</StyledText>
            </StyledContent>
            <StyledAluno>
                <StyledAlunoNome>{data.aluno}</StyledAlunoNome>
                <div>Aluno Kenzie Academy</div>
            </StyledAluno>
        </StyledDiferencial>
    )
}

export default Diferencial