# Demo: SuperTokens

I learned recently about [SuperTokens](https://supertokens.com) as an alternative to Firebase Auth, Auth0, and Keycloak.  The market themselves as a developer friendly solution to authentication as a service. 

For this project I followed their [Email/Password and Social Tutorial](https://supertokens.com/docs/thirdpartyemailpassword/introduction) (using my own UI) to learn about how to implement this in an existing project.  

Overall it seems to live up to it's selling points and was fairly straight forward to implement.  I think I will be using it in the future as an alternative to Keycloak which I have found to be a struggle to implement.

## Project Setup

To use this project you will need to have the following setup:
- NodeJS (v16 or newer)
- NPM
- Docker & Docker Compose

To setup this project you will first need to clone the repo:

```shell
git clone git@github.com:tkottke90/supertokens-demo.git
```

After you have done that, we need to setup the "_SuperTokens Core_" which is a docker container that handles all of the logic around authentication flows.  The _backend_ is loaded with configurations to interact with this docker container using the SuperTokens SDK.  You can use the provided `setup.sh` script to get going:

```shell
./setup.sh
```

The script will also take care of running `npm install` on both the _frontend_ and _backend_ directories to get them up and ready to go.

Finally open a terminal for each environment and run `npm run start` to spin up the backend and frontend.  The backend uses _Nodemon_ and _TS-Node_ and the frontend is _Preact_ and _Vite_.

```shell
# Terminal 1
cd frontend
npm run start
```

```shell
# Terminal 2
cd backend
npm run start
```

Vite will provide you with a link in your terminal to open the page in your web browser and you should be off to the races!