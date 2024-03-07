import type { Meta, StoryObj } from '@storybook/vue3'
import VBtn from './VBtn.vue'

type Story = StoryObj<typeof VBtn>

const meta: Meta<typeof VBtn> = {
  title: 'Components/VBtn',
  component: VBtn,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: {
        type: 'text'
      }
    },
    height: {
      control: {
        type: 'number'
      }
    },
    elevation: {
      control: {
        type: 'number'
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
    href: {
      control: {
        type: 'text'
      }
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
    color: 'primary',
    flat: false,
    rounded: false,
    disabled: false,
    loading: true,
    exact: false,
    elevation: 1000,
    height: 1000
  }
}

export default meta
