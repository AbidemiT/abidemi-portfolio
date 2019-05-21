import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import "@fortawesome/fontawesome-free/css/all.css";
// import "https://fonts.googleapis.com/css?family=Montserrat|Roboto&display=swap";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
