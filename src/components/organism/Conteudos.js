import styled from 'styled-components'
import {Nav, Col, Tab, Row} from "react-bootstrap";
import {bgColors, text} from '../../styled/config'
import ConteudosItem from "./ConteudosItem";
import {useState} from "react";
import Fade from "react-bootstrap/Fade";

const NavItem = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    
    & a{
      height: 6em;
      background-color: ${props => props.selected ? bgColors.secondary : bgColors.clear};
      color: ${props => props.selected ? text.clear : text.grey};
      display: flex;
      justify-content: center;
      align-items: center;
      border: ${props => props.selected ? "none" : `1px solid ${text.grey}25`
};
      
      & h3 {
        font-size: 1.6em;
        font-weight: normal;
        text-align: center;
      }
    }
`

const Conteudos = ({modulos}) => {
    const [key, setKey] = useState('m1');

    return (
        <Col>
            <Tab.Container id="conteudos-tabs" defaultActiveKey={modulos[0].eventKey}>
                <Row>
                    {modulos.map(modulo => (
                        <NavItem selected={modulo.eventKey === key}>
                            <Nav.Link eventKey={modulo.eventKey} onSelect={(k) => setKey(k)}>
                                <h3>{modulo.title}</h3>
                            </Nav.Link>
                        </NavItem>
                    ))}
                </Row>

                <Row>
                    <Col>
                        <Tab.Content>
                            {modulos.map(modulo => (
                                <Tab.Pane eventKey={modulo.eventKey} transition={Fade}>
                                    <ConteudosItem modulo={modulo}/>
                                </Tab.Pane>
                            ))}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Col>
    )
}

export default Conteudos