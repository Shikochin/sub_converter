import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import './styles/base.css'

// Pinia
import { createPinia } from 'pinia'

const vuetify = createVuetify({
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: '#F1F5F9',
                    secondary: '#F1F8FF',
                    button: '#BADBFE',
                },
            },
        },
    },
})

const pinia = createPinia()

createApp(App).use(vuetify).use(pinia).mount('#app')
