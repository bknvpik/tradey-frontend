import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { AuthContext } from './AuthContext';
import Loading from '../pages/Loading/Loading';


const ProtectedRoute = ({ component: Component, ...rest }: any) => {

    const { auth, isLoading } = useContext(AuthContext)
    console.log(auth, isLoading)

    return (
        <Route
            {...rest}
            render={props => (
                !isLoading
                    ?
                    (
                        auth
                            ?
                            <Component {...props} />
                            :
                            <Redirect to='/sign-in' />
                    )
                    :
                    <Loading />
            )}
        />
    )

}

export default ProtectedRoute;