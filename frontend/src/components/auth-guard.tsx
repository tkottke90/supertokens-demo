import { FunctionalComponent, JSX } from "preact";
import { Route, route } from "preact-router";
import { useContext, useEffect } from "preact/hooks";
import { AuthService } from "../services";

const AuthGuard: FunctionalComponent<{path: string, component: () => JSX.Element}> = ({ path, component }) => {
  const { loggedIn } = useContext(AuthService.AuthContext);

  useEffect(() => {
    if (!loggedIn.getValue()) {
      route('/login');
    }
  })

  return(<Route path={path} component={component} />);
}

export default AuthGuard;