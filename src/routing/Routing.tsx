import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import AddItem from "../pages/AddItem/AddItem";
import { Browse } from "../pages/Browse/Browse";
import { Homepage } from "../pages/Homepage/Homepage";
import SignIn from "../pages/SignInPage/SignIn";
import { SignOut } from "../pages/SignOut";
import { SignUp } from "../pages/SignUpPage/SignUp";
import ProtectedRoute from "./ProtectedRoute";
import ViewItem from "../pages/ViewItem/ViewItem";
import ViewUser from "../pages/ViewUser/ViewUser";
import { MakeOffer } from "../pages/MakeOffer/MakeOffer";

const Routing = (props: any) => {
    return (
        <Router>
            { props.children }
            <Switch>
                <Redirect from="/" to="/sign-in" exact/>
                <Route path="/sign-in" component={ SignIn } exact />
                <Route path="/sign-up" component={ SignUp } exact />
                <ProtectedRoute path="/homepage" component={ Homepage } exact />
                <ProtectedRoute path="/browse" component={ Browse } exact />
                <ProtectedRoute path="/add-item" component={ AddItem } exact />
                <ProtectedRoute path="/sign-out" component={ SignOut } exact />
                <ProtectedRoute path="/items/:id" component={ ViewItem } />
                <ProtectedRoute path="/users/:id" component={ ViewUser } />
                <ProtectedRoute path="/make-offer/:id" component={ MakeOffer } />
                <ProtectedRoute path="/view-user/:id" component={ ViewUser } />
            </Switch>
        </Router>
    )
}

export default Routing;
