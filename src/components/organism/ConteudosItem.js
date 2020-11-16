import {Col, Image, Row} from "react-bootstrap";
import styled from "styled-components";
import {bgColors, text} from "../../styled/config"
import checkLightBlue from "../../images/check-light-blue.svg";
import playerCover from "../../images/player-cover.png"

const StyledConteudosItem = styled.div`
  background-color: ${bgColors.secondary};
  margin: 0  -15px;
  color: ${text.clear};
`

const StyledTittle = styled.h4`
  font-size: 1.5em;
  font-weight: normal;
`

const StyledIcon = styled.div`
  background: url(${checkLightBlue}) no-repeat;
  background-size: 1em;
  padding: 1.2em;
`

const StyledListItem = styled.li`
  list-style: none;
  display: flex;
`

const ConteudosItem = ({modulo}) => (
    <StyledConteudosItem>
        <Col>
            <StyledTittle>Hard Skills</StyledTittle>
            <ul>
                <Row>
                    {modulo.hardSkills.map(hardSkill => (
                        <Col md={6}>
                            <StyledListItem> <StyledIcon/> {hardSkill}</StyledListItem>
                        </Col>
                    ))}
                </Row>
            </ul>
            <StyledTittle>Soft Skills e preparação para o mercado de trabalho</StyledTittle>
            <ul>
                <Row>
                    {modulo.softSkills.map(softSkill => (
                        <Col md={6}>
                            <StyledListItem><StyledIcon/>{softSkill}</StyledListItem>
                        </Col>
                    ))}
                </Row>
            </ul>
            <StyledTittle>Veja o que nossos alunos desenvolvem neste módulo</StyledTittle>
            <Row>
                <Col md={2}>
                    <Image rounded fluid src={playerCover} alt=""/>
                </Col>
                <Col md={8}>
                    <strong>{modulo.project.title}</strong><br/>
                    {modulo.project.description}
                </Col>
            </Row>
        </Col>
    </StyledConteudosItem>
)

export default ConteudosItem