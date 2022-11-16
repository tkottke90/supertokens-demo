import { render } from 'preact'
import { App } from './app'
import './index.scss'
import './services';

render(<App />, document.getElementById('app') as HTMLElement)
