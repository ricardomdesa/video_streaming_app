import Keycloak from "keycloak-js";

const keycloakInstance = new Keycloak();

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */

let isInitializing = false;
let isInitialized = false;

const Login = (onAuthenticatedCallback: Function) => {
  if (isInitializing || isInitialized) return;
  isInitializing = true;
  keycloakInstance
    .init({ onLoad: "login-required", pkceMethod: "S256" })
    .then(function (authenticated) {
      isInitialized = true;
      isInitializing = false;
      authenticated ? onAuthenticatedCallback() : alert("non authenticated");
    })
    .catch((e) => {
      isInitializing = false;
      console.dir(e);
      console.log(`keycloak init exception: ${e}`);
    });
};

const UserName = () => keycloakInstance.tokenParsed?.preferred_username;
const UserRoles = () => keycloakInstance.tokenParsed?.realm_access?.roles;
const GetAccessToken = () => keycloakInstance.token;

const GetInstance = () => keycloakInstance;

const KeyCloakService = {
  CallLogin: Login,
  GetUserName: UserName,
  GetUserRoles: UserRoles,
  GetInstance: GetInstance,
  GetAccessToken: GetAccessToken,
};

export default KeyCloakService;
