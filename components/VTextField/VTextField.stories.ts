import type { Meta, StoryObj } from '@storybook/vue3'
import VTextField from './VTextField.vue'

type Story = StoryObj<typeof VTextField.vue>;

const meta: Meta<typeof VTextField.vue> = {
  title: 'Components/VTextField',
  component: VTextField.vue,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: {
        type: 'text'
      }
    },
    type: {
      control: {
        type: 'select'
      },
      options: ['text', 'number', 'password']
    }
  },
  args: {
    label: 'Label',
    type: 'text'
  },
  render: args => ({
    components: { VTextField },
    setup () {
      return { args }
    },
    template: '<VTextField v-bind="args" />'
  })
}
export const Default: Story = {}

export default meta