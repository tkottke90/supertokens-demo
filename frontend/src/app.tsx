import { Route, route, Router } from 'preact-router'
import './app.scss'
import { AuthGuard } from './components'
import SSORedirect from './components/sso-redirect'
import HomePage from './routes/home'
import LoginPage from './routes/login'
import PublicPage from './routes/public'
import SignUpPage from './routes/sign-up'
import { AuthService } from './services'


const NotFound = () => {
  return (
    <main>
      <div class="card">
        <h1>404 Not Found</h1>
        <button onClick={() => route('/')} >Go Back</button>
      </div>
    </main>
  )
}

export function App() {
  return (
    <AuthService.AuthContext.Provider value={AuthService.AuthContextValues}>
      <Router>
          <Route path="/" component={PublicPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/sign-up" component={SignUpPage} />
          <AuthGuard path="/app" component={HomePage} />
          <SSORedirect path="/auth/callback/:provider" />
          <Route default component={NotFound}/>
      </Router>
    </AuthService.AuthContext.Provider>
  )
}
