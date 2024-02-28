import type { Preview } from "@storybook/vue3";
import { setup } from '@storybook/vue3'
import { createVuetify } from 'vuetify'
// Styles
import vuetify from "../utils/vuetify";
import '../asstes/main.css'

setup((app) => {
  if (app) {
    app.use(vuetify)
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
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
