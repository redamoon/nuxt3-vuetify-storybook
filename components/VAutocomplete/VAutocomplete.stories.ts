import type { Meta, StoryObj } from '@storybook/vue3'
import VAutocomplete from './VAutocomplete.vue'

type Story = StoryObj<typeof VAutocomplete>;

const meta: Meta<typeof VAutocomplete> = {
  title: 'Components/VAutocomplete',
  component: VAutocomplete,
  tags: ['autodocs'],
  render: args => ({
    components: { VAutocomplete },
    setup () {
      return { args }
    },
    template: '<VAutocomplete v-bind="args" />'
  })
}
export const Default: Story = {
  args: {}
}

export default meta
