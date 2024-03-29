import type { Meta, StoryObj } from '@storybook/vue3'
import TextFieldsDateTime from './TextFieldsDateTime.vue'

type Story = StoryObj<typeof TextFieldsDateTime>;

const meta: Meta<typeof TextFieldsDateTime> = {
  title: 'Features/TextFieldsDateTime',
  component: TextFieldsDateTime,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: {
        type: 'text'
      }
    }
  },
  render: args => ({
    components: { TextFieldsDateTime },
    setup () {
      return { args }
    },
    template: '<TextFieldsDateTime v-bind="args" />'
  })
}
export const Default: Story = {
  args: {}
}

export const DateTime: Story = {
  args: {
    startDate: '2024-03-05',
    startTime: '00:02',
    endDate: '2024-03-05',
    endTime: '00:00'
  }
}

export default meta
