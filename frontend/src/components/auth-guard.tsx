import { Fragment, FunctionalComponent, JSX } from "preact";
import { useCallback, useContext, useEffect } from "preact/hooks";
import { AuthService } from "../services";
import {} from 'supertokens-web-js'
import { useSignalEffect } from '@preact/signals';
import { Route, route } from "preact-router";

const AuthGuard: FunctionalComponent<{path: string, component: () => JSX.Element}> = ({ path, component }) => {
  const { loggedIn } = useContext(AuthService.AuthContext);

  useSignalEffect(() => {
    if (!loggedIn.value) {
      route('/login');
    }
  })

  return(<Route path={path} component={component} />);
}

export default AuthGuard;