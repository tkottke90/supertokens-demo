import { Fragment, FunctionalComponent, JSX } from "preact";
import { useCallback, useContext, useEffect } from "preact/hooks";
import { AuthService } from "../services";
import {} from 'supertokens-web-js'
import { useSignalEffect } from '@preact/signals';
import { Route, route } from "preact-router";

const SSOComponent = () => (null);

const SSORedirect: FunctionalComponent<{path: string}> = ({ path }) => {
  const { thirdPartyResponse } = useContext(AuthService.AuthContext);

  useEffect(() => {
    thirdPartyResponse();
  })

  return(<Route path={path} component={SSOComponent} />);
}

export default SSORedirect;