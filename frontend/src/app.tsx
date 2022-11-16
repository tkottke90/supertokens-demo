import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import './app.scss'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="card">
        <h1>New Preact/Express App!</h1>
        <p>You setup another new one.  I am sure the template made it nice!</p>
      </div>
    </>
  )
}
