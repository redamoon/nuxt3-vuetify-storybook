import type { Meta, StoryObj } from '@storybook/vue3'
import DialogSelect from './DialogSelect.vue'

type Story = StoryObj<typeof DialogSelect>;

const meta: Meta<typeof DialogSelect> = {
  title: 'Features/DialogSelect',
  component: DialogSelect,
  tags: ['autodocs'],
  render: args => ({
    components: { DialogSelect },
    setup () {
      return { args }
    },
    template: '<DialogSelect v-bind="args" />'
  })
}
export const Default: Story = {
  args: {}
}

export default meta
