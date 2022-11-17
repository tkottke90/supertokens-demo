import { createContext } from 'preact';
import { route } from 'preact-router';
import SuperTokens from "supertokens-web-js";
import Session from "supertokens-web-js/recipe/session";
import ThirdPartyEmailPassword from "supertokens-web-js/recipe/thirdpartyemailpassword";
import { getAuthorisationURLWithQueryParamsAndSetState } from "supertokens-web-js/recipe/thirdpartyemailpassword";
import { BehaviorSubject } from 'rxjs';
import { thirdPartySignInAndUp } from "supertokens-web-js/recipe/thirdpartyemailpassword";

type User = Record<string, any>;

const loggedIn = new BehaviorSubject<boolean>(false);
const user = new BehaviorSubject<User | undefined>(undefined);

loggedIn.subscribe(v => console.log('User Logged In Changed - ', v));

SuperTokens.init({
  appInfo: {
    apiDomain: window.location.origin,
    apiBasePath: "/api/auth",
    appName: "..."
  },
  recipeList: [
    Session.init({
      onHandleEvent: (context) => {
        const { action } = context;
      
        // console.log('Action: ', action);
        switch (action) {
          case 'ACCESS_TOKEN_PAYLOAD_UPDATED': {
            break;
          }
          case 'REFRESH_SESSION': {
            break;
          }
          case 'SESSION_CREATED': {
            console.dir(context);
      
            route('/app');
            break;
          }
          case 'SIGN_OUT': {
            loggedIn.next(false);
            user.next(undefined);
            break;
          }
          case 'UNAUTHORISED': {
            if (context.sessionExpiredOrRevoked) {
              route('/login');
            }

            break;
          }
          default:
            console.log('Unidentified Action - Their documentation is sketchy');
        }
      }
    }), 
    ThirdPartyEmailPassword.init()
  ] 
});

Session
  .doesSessionExist()
  .then(result => {
    loggedIn.next(result);
  });

async function login(request: { email: string, password: string }) {
  const result = await ThirdPartyEmailPassword.emailPasswordSignIn({
    formFields: [
      { id: 'email', value: request.email },
      { id: 'password', value: request.password }
    ]
  });

  if (result.status != 'OK') {
    throw new Error(result.status);
  }

  // Call API to get user info
}

async function googleAuth() {
  try {
    const authUrl = await getAuthorisationURLWithQueryParamsAndSetState({
      providerId: 'google',
      authorisationURL: `${window.location.origin}/auth/callback/google`,
    });

    window.location.assign(authUrl);
  } catch (error) {
    console.error(error);
  }
}

async function thirdPartyResponse() {
  const response = await thirdPartySignInAndUp();

  console.dir(response);

  if (response.status === 'OK') {
    loggedIn.next(true);

    if (response.createdNewUser) {
      // Create a new user in the backend
    } else {
      // Call API to get user info
    }

    route('/app');
  } else {
    loggedIn.next(false);
    route(`/login?error="Error Logging In"`);
  }
}

async function logout() {
  await Session.signOut()
  loggedIn.next(await Session.doesSessionExist());

  route('/login');
}


export const AuthContextValues = {
  googleAuth,
  login,
  logout,
  loggedIn,
  thirdPartyResponse,
  user
};

export const AuthContext = createContext(AuthContextValues);