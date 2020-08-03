import "@/assets/scss/main.scss";
import "@mdi/font/css/materialdesignicons.css";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
import { i18n } from "./i18n";
import { Trans } from "./plugins/translation";

Vue.use(Buefy);

/* Components */
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";

Vue.component("vue-phone-number-input", VuePhoneNumberInput);

Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans);

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount("#app");

Vue.prototype.$scrollToTop = () => window.scrollTo(0, 0);
