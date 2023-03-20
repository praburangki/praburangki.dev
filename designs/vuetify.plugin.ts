import { createVuetify } from 'vuetify';
import * as directives from 'vuetify/directives';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    directives,
  });

  nuxtApp.vueApp.use(vuetify);
});
