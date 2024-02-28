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
        type: 'radio'
      },
      options: ['plain', 'outlined', 'tonal', 'text', undefined]
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
    variant: undefined
  }
}

export default meta
