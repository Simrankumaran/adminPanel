import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AdminView from "./components/AdminView/AdminView";
import CareTeamView from "./components/CareTeam/CareTeamView";
import Login from "./components/LoginView/HomePage";

// Containers
const App = () => {
  return (
    <BrowserRouter>
      <Route path="/Login" component={Login} />
      <Route path="/Admin" component={AdminView} />
      <Route path="/CareTeam" component={CareTeamView} />
    </BrowserRouter>
  );
};

export default App;
