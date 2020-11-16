import React from "react"
import Button from "../atoms/Button";
import {Col, Row} from "react-bootstrap";
import styled from "styled-components"
import bannerMulherCafe from "../../images/banner-mulher-cafe.png"
import {text} from "../../styled/config"


const MainBanner = styled.div`
  background: url(${bannerMulherCafe}) right;
  height: 100vh;
  margin: -90px -15px 0;
  padding-top: 90px;
  color: ${text.clear};
  
  & h1{
    font-weight: 500;
    font-size: 3em;
  }
`

const Home = () => {
    return (
        <Row>
            <Col>
                <MainBanner>
                    <h1>Programe seu futuro aqui</h1>
                    <Button text="Quero Participar" modifier="callToAction2"/>
                </MainBanner>
            </Col>
        </Row>
    )
}

export default Home