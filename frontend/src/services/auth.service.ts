import { createContext } from 'preact';
import { useState } from 'preact/hooks';
import SuperTokens from "supertokens-web-js";
import Session from "supertokens-web-js/recipe/session";
import ThirdPartyEmailPassword from "supertokens-web-js/recipe/thirdpartyemailpassword";

SuperTokens.init({
  appInfo: {
    apiDomain: "http://localhost:5001",
    apiBasePath: "/auth",
    appName: "..."
  },
  recipeList: [
    Session.init(), 
    ThirdPartyEmailPassword.init()
  ] 
});

export function isLoggedIn() {
  return Session.doesSessionExist();
}

export const AuthContext = createContext({  });