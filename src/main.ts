import { createApp } from 'vue'
import { RplLink, RplImg } from '@dpc-sdp/ripple-ui-core/vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Stub analytics
app.provide('$rplEvent', {emit: () => {}})

// Register atomic components
app.component('RplLink', RplLink)
app.component('RplImg', RplImg)

app.use(router)

app.mount('#app')
