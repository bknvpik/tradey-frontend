import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { AddItem } from "../pages/AddItem/AddItem";
import { Browse } from "../pages/Browse/Browse";
import { Homepage } from "../pages/Homepage/Homepage";
import ItemView from "../pages/ViewItem/ViewItem";
import SignIn from "../pages/SignInPage/SignIn";
import { SignOut } from "../pages/SignOut";
import { SignUp } from "../pages/SignUpPage/SignUp";
import ProtectedRoute from "./ProtectedRoute";
import ViewItem from "../pages/ViewItem/ViewItem";
import ViewUser from "../pages/ViewUser/ViewUser";

export const Routing = (props: any) => {
    return (
        <Router>
            { props.children }
            <Switch>
                <Redirect from="/" to="/homepage" exact/>
                <Route path="/homepage" component={ Homepage } exact />
                <Route path="/browse" component={ Browse } exact />
                <Route path="/add-item" component={ AddItem } exact />
                <Route path="/sign-in" component={ SignIn } exact />
                <Route path="/sign-up" component={ SignUp } exact />
                <Route path="/sign-out" component={ SignOut } exact />
                <Route path="/items/:id" component={ ViewItem } />
                <Route path="/users/:id" component={ ViewUser } />
            </Switch>
        </Router>
    )
}
