import 'normalize.css'
import './fonts.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import { createApp, type Component } from 'vue'
import { FontAwesomeIcon } from './app/config/fontawesome'
import App from '@/app/App.vue'
import components from './shared/components'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

components.forEach((component) => {
  app.component(component[0] as string, component[1] as Component)
})

app.mount('#app')
