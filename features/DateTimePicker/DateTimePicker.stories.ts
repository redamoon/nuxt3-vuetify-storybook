import type { Meta, StoryObj } from '@storybook/vue3'
import DateTimePicker from './DateTimePicker.vue'

type Story = StoryObj<typeof DateTimePicker>;

const meta: Meta<typeof DateTimePicker> = {
  title: 'Features/DateTimePicker',
  component: DateTimePicker,
  tags: ['autodocs'],
  render: args => ({
    components: { DateTimePicker },
    setup () {
      return { args }
    },
    template: '<DateTimePicker v-bind="args" />'
  })
}
export const Default: Story = {
  args: {}
}

export default meta
