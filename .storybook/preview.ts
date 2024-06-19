import type { Preview } from "@storybook/vue3";
import { setup } from '@storybook/vue3'
// Styles
import vuetify from "../utils/vuetify";
import VueApexCharts from 'vue3-apexcharts'

setup((app) => {
  if (app) {
    app.use(vuetify)
    app.use(VueApexCharts)
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
