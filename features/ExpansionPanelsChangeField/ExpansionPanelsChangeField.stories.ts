import type { Meta, StoryObj } from '@storybook/vue3'
import ExpansionPanelsChangeField from './ExpansionPanelsChangeField.vue'

type Story = StoryObj<typeof ExpansionPanelsChangeField>;

const meta: Meta<typeof ExpansionPanelsChangeField> = {
  title: 'Features/ExpansionPanelsChangeField',
  component: ExpansionPanelsChangeField,
  tags: ['autodocs'],
  render: args => ({
    components: { ExpansionPanelsChangeField },
    setup () {
      return { args }
    },
    template: '<ExpansionPanelsChangeField v-bind="args" />'
  })
}
export const Default: Story = {
  args: {}
}

export default meta
