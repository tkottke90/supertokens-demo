import { h } from 'preact';

const HomePage = () => {


  return(
    <main>
      <div class="card" {...{ center: '' }}>
        <h1>This is a home page</h1>
        <p>should be protected</p>
      </div>
    </main>
  )
}

export default HomePage;