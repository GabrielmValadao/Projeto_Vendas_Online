import { createApp } from "vue";
import App from "./App.vue";
// router
import router from "./router/index";

//vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

//vuex
import store from "../src/store/index";
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
  },
});

const app = createApp(App);
app
  .use(router)
  .use(vuetify)
  .use(store)

  .mount("#app");
