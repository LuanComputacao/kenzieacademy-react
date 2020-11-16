import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import routes from "./routes";
import Home from "./components/pages/Home";
import Curso from "./components/pages/Curso";
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
                <NavBar routes={routes}/>
                <StyledAppContent>
                    <Container fluid>
                        <Switch>
                            <Route path={routes.quemSomos.route}><About/></Route>
                            <Route path={routes.curso.route}><Curso/></Route>
                            <Route path={routes.home.route}><Home/></Route>
                        </Switch>
                    </Container>
                </StyledAppContent>
            </div>
        </Router>
    );
}


function About() {
    return <h2>About</h2>;
}

