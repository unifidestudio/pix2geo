/**
 * This is your client vue app entrypoint
 * Its loaded because it is referenced in the vite
 * entrypoint file (index.html located at the root of this project)
 *
 * External css/js files will be loaded as dependencies.
 * You may want to check the vite configuration.
 * Some plugins will register virtual components or lazyload other for us.
 *
 * @see /index.html
 * @see /vite.config.ts
 */

import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import VCalendar from 'v-calendar'
import VueMultiselect from '@vueform/multiselect'
import VueSlider from '@vueform/slider'
import VueApexCharts from 'vue3-apexcharts'
import VueCKEditor from '@ckeditor/ckeditor5-vue'
import VueTippy from 'vue-tippy'

import App from './App.vue'
import i18n from './i18n'
import router from './router'
import hasNestedRouterLink from './directives/has-nested-router-link'
import background from './directives/background'
import tooltip from './directives/tooltip'

/**
 * Importing external libraries allow to compile them in our bundle
 * How files are interpreted is defined by ther extension.
 */
import 'simplebar'
import '@purge-icons/generated'
import 'nprogress/nprogress.css'
import '@vueform/multiselect/themes/default.scss'
import '@vueform/slider/themes/default.scss'
import 'simplebar/dist/simplebar.css'
import 'tiny-slider/src/tiny-slider.scss'
import 'notyf/notyf.min.css'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/dist/svg-arrow.css'
import 'tippy.js/dist/border.css'
import 'tippy.js/dist/backdrop.css'
import 'tippy.js/themes/light.css'

import './scss/vendors/font-awesome-v5.css'
import './scss/vendors/line-icons-pro.css'
import './scss/vendors/prism-coldark-cold.css'

import './scss/main.scss'

import firebase from 'firebase/app'
import store from './store/store'

// Now we can start our vue app
const app = createApp(App)
const head = createHead()

app.use(router)
app.use(i18n)
app.use(head)
app.use(VCalendar)
app.use(VueApexCharts)
app.use(VueCKEditor)
app.use(VueTippy, {
  defaultProps: {
    theme: 'dark',
  },
})

app.component(VueMultiselect.name, VueMultiselect)
app.component(VueSlider.name, VueSlider)

app.directive('has-nested-router-link', hasNestedRouterLink)
app.directive('background', background)
app.directive('tooltip', tooltip)

app.use(store)

const firebaseConfig = {
  apiKey: 'AIzaSyA48f-h4gt8u3PXN25YEoGZBsp_CZgr6Eo',
  authDomain: 'pix2geo.firebaseapp.com',
  databaseURL: 'https://pix2geo-default-rtdb.firebaseio.com',
  projectId: 'pix2geo',
  storageBucket: 'pix2geo.appspot.com',
  messagingSenderId: '357165268881',
  appId: '1:357165268881:web:fc56b10b8205f7f29b6430',
  measurementId: 'G-L9RHQ2FCN5',
}

firebase.initializeApp(firebaseConfig)

console.log('firebase init: ' + (firebase.apps.length > 0)) // test as per https://stackoverflow.com/questions/37652328/how-to-check-if-a-firebase-app-is-already-initialized-on-android#41005100

app.mount('#app')
