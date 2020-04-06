import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
fetch('/setting.json').then(res => res.json()).then(conf => {
  fetch('/data.json').then(res => res.json()).then(prods => {

    new Vue({
      data() {
        return { prods: prods ,conf:conf};
      },
      render: h => h(App),
    }).$mount('#app')
  })
})

