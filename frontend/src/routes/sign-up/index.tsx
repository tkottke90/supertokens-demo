import { h } from 'preact';
import { Formik, Form, Field, FormikProps } from 'formik';
import { useContext, useEffect } from 'preact/hooks';
import { AuthService } from '../../services';
import { route } from 'preact-router';

type FormFields = { email: string, password: string }

const LoginForm = () => {
  const { login, loggedIn } = useContext(AuthService.AuthContext);

  useEffect(() => {
    if (loggedIn.getValue()) {
      route('/app');
    }
  })

  const triggerLogin = async (values: FormFields) => {
    try {
      await login(values);
    } catch (err) {
      console.dir(err);
    }
  }

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={triggerLogin}
    >
      {(props: FormikProps<FormFields>) => (
        <Form action="">
          <div className="form-field">
            <label htmlFor="email">Username</label>
            <Field
              id="email"
              type="email"
              name="email"
            />
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              name="password"
            />
          </div>

          <div className="form-actions"><button type="submit" >Login</button></div>
        </Form>
      )}
    </Formik>
  );
}

const SignUpPage = () => {
  const { googleAuth } = useContext(AuthService.AuthContext);

  return(
    <main>
      <div className="card login-card">
        <h2>Sign Up</h2>
        <br />
        <button onClick={() => googleAuth()}>Login with Google</button>
        <br />
        <br />
        <hr />
        <br />
        <LoginForm />
        <br />
        <p>Already a user?  <a href="/login">Sign In</a></p>
      </div>
    </main>
  )
}

export default SignUpPage;