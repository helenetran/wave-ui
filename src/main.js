import Vue from 'vue'
import App from './app'
import router from './router'
import WaveUI from '@/wave-ui/index'

Vue.config.productionTip = false

Vue.use(WaveUI)

const waveui = new WaveUI({
  colors: {
    primary: '#234781',
    secondary: '#e0f1ff'
  },
  icons: ['fa', 'ion'],
})

new Vue({
  router,
  waveui,
  render: h => h(App)
}).$mount('#app')