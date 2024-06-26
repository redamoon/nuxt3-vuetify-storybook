import type { Preview } from "@storybook/vue3";
import { setup } from '@storybook/vue3'
import * as VueRouter from "vue-router";

// Routes
const routes: VueRouter.RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/about.vue')
  }
]

const createRouter = (type: 'memory' | 'history') => {
  const history = type === 'memory' ? VueRouter.createMemoryHistory() : VueRouter.createWebHistory();
  return VueRouter.createRouter({ history, routes });
};

const router = createRouter('memory');

// Styles
import vuetify from "../utils/vuetify";
import VueApexCharts from 'vue3-apexcharts'

setup((app) => {
  if (app) {
    app.use(vuetify)
    app.use(VueApexCharts)
    app.use(router)
  }
})

export const decorators = [
  (story: any) => ({
    components: { story },
    template: '<v-app><story /></v-app>',
  }),
]

/** @type { import('@storybook/vue3').Preview } */
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
