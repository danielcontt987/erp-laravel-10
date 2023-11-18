/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createApp, ref } from 'vue';

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        themes: {
          light: {
            colors: {
              primary: '#001f4a',
              primary_dark: '#051942',
              fail: '#F50057',
              secondary: '#00337C',
              secondary_dark: '#001f4a',
              background: '#E2E2E2',
              white: '#FFFFFF',
              grey: "#A2A2A2",
              black: '#000000',
              drawerColor: "#1744a5",
              success: '#27AE60',
              accent: "#00CFB5",
              error: "#C22F2F",
              success_card: '#27AE60',
            },
          },
        },
      },
  })


/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp({
  setup(){
    const show1 = ref(false)
    return { show1 };
  }
});
app.use(vuetify)


import ExampleComponent from './components/ExampleComponent.vue';
app.component('example-component', ExampleComponent);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

// const app = new Vue({
//   el: "#app",
//   vuetify,
//   router,
//   store: store,
//   data: () => {
//     return {
//       show1: false,
//     };
//   },

app.mount('#app');
