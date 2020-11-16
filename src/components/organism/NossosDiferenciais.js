import Diferencial from "../molecule/Diferencial";
import styled from "styled-components";
import {bgColors, gutter} from "../../styled/config";
import {Col, Row} from "react-bootstrap";
import DiferencialDepoimentosAccordion from "../molecule/DiferencialDepoimentosAccordion";


const StyledNossosDiferenciais = styled.div`
  background-color: ${bgColors.grey};
  padding: ${gutter};
`

const NossosDiferenciais = ({depoimentos, diferenciais}) => {
    return (
        <StyledNossosDiferenciais>
            <h2>Nossos diferenciais</h2>
            <DiferencialDepoimentosAccordion depoimentos={depoimentos}/>
            <Row>
                {diferenciais.map(data => (
                    <Col lg={6}><Diferencial data={data}/></Col>
                ))}
            </Row>
        </StyledNossosDiferenciais>
    )
}

export default NossosDiferenciais