import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Browse } from "../pages/Browse/Browse";
import { SignIn } from "../pages/SignInPage/SignIn";
import { SignUp } from "../pages/SignUpPage/SignUp";

export const Routing = (props: any) => {
    return (
        <Router>
            { props.children }
            <Switch>
            <Route path="/items">
                <Browse />
            </Route>
            <Route path="/sign-in">
                <SignIn />
            </Route>
            <Route path="/sign-up">
                <SignUp />
            </Route>
            </Switch>
        </Router>
    )
}
