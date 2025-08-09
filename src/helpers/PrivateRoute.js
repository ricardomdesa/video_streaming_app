import KeyCloakService from "./KeycloakService";

const PrivateRoute = ({ children }) => {

 const isLoggedIn = KeyCloakService.GetInstance().authenticated;

 return isLoggedIn ? children : null;
};

export default PrivateRoute;