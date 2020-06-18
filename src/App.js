import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Pre_Loader from "./Components/Pre-Loader/Pre_Loader";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Homepage from "./Pages/Homepage/Homepage";
import Board_Page from "./Pages/Create_Board_Page/Board_Page";
import MyBoard from "./Pages/Individual_Board_Page/MyBoard";
import SignIn_SignUp_Form from "./Components/SignIn_SignUp_Form/SignIn_SignUp";
import { auth } from "./Firebase/firebase.utils"; //so that our appn listens to user state changes from firebase

const App = () => {
  const [currentUser, serCurrentUser] = useState(null);
  let unSubscribeFromAuth = null;
  useEffect(() => {
    unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      serCurrentUser(user);
      console.log(user);
    });
    return () => {
      console.log("it works as component will unmount.");
      unSubscribeFromAuth(); //it will close the subscription
    };
  }, []);
  return (
    <div className="App">
      <NavBar currentUser={currentUser} />
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
