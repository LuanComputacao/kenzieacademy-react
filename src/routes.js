import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Curso from "./components/pages/Curso";
import QuemSomos from "./components/pages/QuemSomos"


const RoutesBuilder = (props) => {
  const routes = {
    home: {
      route: "/",
      text: "Home",
      component: props.Home,
    },
    quemSomos: {
      route: "/about",
      text: "Quem Somos",
      component: props.QuemSomos,
    },
    curso: {
      route: "/users",
      text: "Curso",
      component: props.Curso,
    },
  };

  return (
    <Switch>
        <Route path={routes.quemSomos.route}><QuemSomos/></Route>
        <Route path={routes.curso.route}><Curso/></Route>
        <Route path={routes.home.route}><Home/></Route>
    </Switch>
  );
};

export default RoutesBuilder;
