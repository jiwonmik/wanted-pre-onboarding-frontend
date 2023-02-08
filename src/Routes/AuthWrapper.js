import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthWrapper = () => {
    const location = useLocation(); // current location
    const userLogged = JSON.parse(localStorage.getItem("access_token"));

    return userLogged
        ? <Outlet />
        : (
            <Navigate
              to="/"
              replace
              state={{from: location}}
            />
        );
}

export default AuthWrapper;