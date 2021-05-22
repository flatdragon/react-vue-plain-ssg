import { createApp } from 'vue'
import HelloWorld from './components/HelloWorld'

const app = createApp({})

app.component('HelloWorld', HelloWorld)

if (navigator.userAgent !== 'ReactSnap') {
  // Initializing Vue only when real request comes in
  document.addEventListener('DOMContentLoaded', () => {
    app.mount('#app')
  })
}
