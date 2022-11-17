import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { AuthService } from '../../services';

const HomePage = () => {
  const { logout } = useContext(AuthService.AuthContext);

  return(
    <main>
      <div class="card" {...{ center: '' }}>
        <h1>This is a home page</h1>
        <p>should be protected</p>
        <button onClick={() => logout()} >Logout</button>
      </div>
    </main>
  )
}

export default HomePage;