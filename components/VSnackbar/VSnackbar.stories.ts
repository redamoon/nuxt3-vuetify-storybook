import type { Meta, StoryObj } from '@storybook/vue3'
import VSnackbar from './VSnackbar.vue'

type Story = StoryObj<typeof VSnackbar>;

const meta: Meta<typeof VSnackbar> = {
  title: 'Components/VSnackbar',
  component: VSnackbar,
  tags: ['autodocs'],
  render: args => ({
    components: { VSnackbar },
    setup () {
      return { args }
    },
    template: '<VSnackbar v-bind="args" />'
  })
}
export const Default: Story = {
  args: {}
}

export default meta
