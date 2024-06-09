import type { Meta, StoryObj } from '@storybook/vue3'
import DialogCombobox from './DialogCombobox.vue'

type Story = StoryObj<typeof DialogCombobox>;

const meta: Meta<typeof DialogCombobox> = {
  title: 'Features/DialogCombobox',
  component: DialogCombobox,
  tags: ['autodocs'],
  render: args => ({
    components: { DialogCombobox },
    setup () {
      return { args }
    },
    template: '<DialogCombobox v-bind="args" />'
  })
}
export const Default: Story = {
  args: {}
}

export default meta
