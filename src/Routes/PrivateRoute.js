import { Navigate } from 'react-router-dom';

function PrivateRoute ({authenticated, component: Component}){
    return (
        authenticated ?  <Navigate to='/signin'/> : Component
    )
}

export default PrivateRoute;