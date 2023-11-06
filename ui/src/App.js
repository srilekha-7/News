import React from "react";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthenticatedHomePage from "./pages/AuthenticatedHomePage";
import Profile from "./pages/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/details" Component={DetailsPage} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/home" Component={AuthenticatedHomePage} />
          <Route path="/profile" Component={Profile} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
