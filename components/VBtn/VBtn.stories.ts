import type { Meta, StoryObj } from '@storybook/vue3'
import VBtn from './VBtn.vue'

type Story = StoryObj<typeof VBtn>

const meta: Meta<typeof VBtn> = {
  title: 'VBtn',
  component: VBtn,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: {
        type: 'text'
      }
    },
    variant: {
      control: {
        type: 'select'
      },
      options: ['plain', 'outlined', 'tonal', 'text', undefined]
    },
    color: {
      control: {
        type: 'select'
      },
      options: ['primary', 'success', 'error', 'info']
    },
    onClick: { action: 'click' }
  },
  render: args => ({
    components: { VBtn },
    setup () {
      return { args }
    },
    template: '<VBtn v-bind="args" />'
  })
}

export const Default: Story = {
  args: {
    label: 'Button',
    variant: undefined,
    color: 'primary'
  }
}

export default meta
