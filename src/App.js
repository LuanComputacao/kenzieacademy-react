import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesBuilder from "./routes";
import {Container} from "react-bootstrap";
import NavBar from "./components/organism/NavBar";
import styled from "styled-components"

const StyledAppContent = styled.div`
  padding-top: 60px;
`

export default function App() {
    
    return (
        <Router>
            <div>
                <StyledAppContent>
                    <Container fluid>
                        <RoutesBuilder />
                    </Container>
                </StyledAppContent>
            </div>
        </Router>
    );
}
