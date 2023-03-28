import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css';

function Login() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  return isAuthenticated ? null : <div className="redirectingDiv"><h3>Redirecting to login page...</h3></div>;
}

export default Login;
