import { Fragment, FunctionalComponent } from "preact";
import { useEffect } from "preact/hooks";
import { AuthService } from "../services";


const AuthGuard: FunctionalComponent = ({ children }) => {
  useEffect(() => {
    AuthService
      .isLoggedIn()
  }, []);


  return(<Fragment>{children}</Fragment>);
}

export default AuthGuard;