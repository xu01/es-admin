import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routerConfig from './router.config.js'

Vue.use(ElementUI);
Vue.use(VueResource);
Vue.use(VueRouter);

require('./assets/UEditor/ueditor.config.js');
require('./assets/UEditor/ueditor.all.js');

const router = new VueRouter(routerConfig);

//标题随路由页面name变化
router.afterEach((to,from,next) => {
  document.title=to.name;
})

new Vue({
  router,
  el: '#app',
  render: h => h(App),
  data(){
    return{
      eventHub:new Vue()
    }
  }
})
