import type { Meta, StoryObj } from '@storybook/vue3'
import VCombobox from './VCombobox.vue'

type Story = StoryObj<typeof VCombobox>;

const meta: Meta<typeof VCombobox> = {
  title: 'Components/VCombobox',
  component: VCombobox,
  tags: ['autodocs'],
  render: args => ({
    components: { VCombobox },
    setup () {
      return { args }
    },
    template: '<VCombobox v-bind="args" />'
  })
}
export const Default: Story = {
  args: {}
}

export default meta
