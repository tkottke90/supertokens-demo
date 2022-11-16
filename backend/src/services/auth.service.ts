import { Application } from 'express';
import supertokens from 'supertokens-node';
import Session from 'supertokens-node/recipe/session';
import ThirdPartyEmailPassword, {
  Google
} from 'supertokens-node/recipe/thirdpartyemailpassword';
import { middleware, errorHandler } from 'supertokens-node/framework/express';

supertokens.init({
  framework: 'express',
  supertokens: {
    // https://try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
    connectionURI: 'http://localhost:3567'
    // apiKey: <API_KEY(if configured)>,
  },
  appInfo: {
    // learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo
    appName: 'My Personal Finance',
    apiDomain: 'http://localhost:5000',
    websiteDomain: 'http://localhost:5173',
    apiBasePath: '/auth',
    websiteBasePath: '/auth'
  },
  recipeList: [
    ThirdPartyEmailPassword.init({
      providers: [
        Google({
          clientId:
            '507582452934-us9guo9a84atvs0adaavtl0vlit1tpfk.apps.googleusercontent.com',
          clientSecret: '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'
        })
      ]
    }),
    Session.init() // initializes session features
  ]
});

export function setAuthEndpoints(app: Application) {
  app.use(middleware());
}

export function setAuthErrorResponse(app: Application) {
  app.use(errorHandler());
}
