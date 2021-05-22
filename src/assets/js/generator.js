import React from 'react'
import { render } from 'react-dom'
import App from './views/App'

/**
 * We don't need React script after snapshot,
 * since it only used for pages templating purposes.
 * */
window.snapSaveState = () => {
  const generatorScript = document.querySelector('script[src="/assets/js/generator.js"]')
  generatorScript.parentNode.removeChild(generatorScript)
}

render(
  <App />, 
  document.getElementById('app')
)
