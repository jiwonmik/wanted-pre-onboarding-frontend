import { Navigate } from 'react-router-dom';

function PrivateRoute ({authenticated, component: Component}){
    return (
        authenticated ? Component: <Navigate to='/signin'/>
    )
}

export default PrivateRoute;