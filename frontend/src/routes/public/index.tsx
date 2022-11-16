import { h } from 'preact';
import { route } from 'preact-router';

const PublicPage = () => {


  return(
    <main>
      <div class="card" {...{ center: '' }}>
        <h1>This is a public page</h1>
        <p>This page should be available at all times for users to see</p>

        <button onClick={() => route('/app')} >Goto App</button>
      </div>
    </main>
  )
}

export default PublicPage;