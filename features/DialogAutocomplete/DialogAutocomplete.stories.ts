import type { Meta, StoryObj } from '@storybook/vue3'
import DialogAutocomplete from './DialogAutocomplete.vue'

type Story = StoryObj<typeof DialogAutocomplete>;

const meta: Meta<typeof DialogAutocomplete> = {
  title: 'Features/DialogAutocomplete',
  component: DialogAutocomplete,
  tags: ['autodocs'],
  render: args => ({
    components: { DialogAutocomplete },
    setup () {
      return { args }
    },
    template: '<DialogAutocomplete v-bind="args" />'
  })
}
export const Default: Story = {
  args: {}
}

export default meta
