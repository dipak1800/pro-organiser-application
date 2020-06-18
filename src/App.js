import React from "react";
import "./App.css";
import Pre_Loader from "./Components/Pre-Loader/Pre_Loader";

import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Homepage from "./Pages/Homepage/Homepage";
import Board_Page from "./Pages/Create_Board_Page/Board_Page";
import MyBoard from "./Pages/Individual_Board_Page/MyBoard";
import SignIn_SignUp_Form from "./Components/SignIn_SignUp_Form/SignIn_SignUp";
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/signin" component={SignIn_SignUp_Form} />
        <Route path="/" exact component={Homepage} />
        <Route path="/createboard" exact strict component={Board_Page} />
        <Route path="/:boardName" component={MyBoard} />
      </Switch>
    </div>
  );
};

export default App;
