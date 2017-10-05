import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/navbar"
import Home from "./pages/home";
import LoginPage from "./pages/loginpage";
import SignInPage from "./pages/signinpage";
import Posts from "./pages/posts";
import Developers from "./pages/developers";
import Profile from "./pages/profile";
import CreatePost from "./pages/createpost";
import NoMatch from "./pages/nomatch";

const App = () =>
	<Router>
		<div>
      <Navbar />
      <Switch>
      	<Route exact path="/" component={Home} />
      	<Route exact path="/login" component={LoginPage} />
      	<Route exact path="/signin" component={SignInPage} />
      	<Route exact path="/posts" component={Posts} />
      	<Route exact path="/developers" component={Developers} />
      	<Route exact path="/profile" component={Profile} />
      	<Route exact path="/createpost" component={CreatePost} />
      	<Route component={NoMatch} />
      </Switch>
    </div>
  </Router>

export default App;
