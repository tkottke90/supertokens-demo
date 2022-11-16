import { createContext } from 'preact';
import { route } from 'preact-router';
import { signal } from '@preact/signals';
import { useState } from 'preact/hooks';
import SuperTokens from "supertokens-web-js";
import Session from "supertokens-web-js/recipe/session";
import ThirdPartyEmailPassword from "supertokens-web-js/recipe/thirdpartyemailpassword";

const loggedIn = signal<boolean>(false);

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

export async function isLoggedIn() {
  
  if (await Session.doesSessionExist()) {
    route('/login');
  }
}

export const AuthContext = createContext({ loggedIn });