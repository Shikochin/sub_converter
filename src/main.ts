import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
// Material Design Icons
import '@mdi/font/css/materialdesignicons.min.css'
import './styles/main.css'

// Pinia
import { createPinia } from 'pinia'

const vuetify = createVuetify({
    theme: {
        themes: {
            light: {
                colors: {
                    primary: '#F1F5F9',
                    secondary: '#E8EBEF',
                    button: '#B3E5FC',
                },
            },
        },
    },
})

const pinia = createPinia()

createApp(App).use(vuetify).use(pinia).mount('#app')
