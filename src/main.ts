import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Pinia
import { createPinia } from 'pinia'

const vuetify = createVuetify({
    components,
    directives,
})

const pinia = createPinia()

createApp(App).use(vuetify).use(pinia).mount('#app')
