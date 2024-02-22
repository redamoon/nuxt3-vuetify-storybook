import type { Meta, StoryObj } from '@storybook/vue3'
import BaseButton from './BaseButton.vue'

type Story = StoryObj<typeof BaseButton>

const meta: Meta<typeof BaseButton> = {
  title: 'BaseButton',
  component: BaseButton,
  render: args => ({
    components: { BaseButton },
    setup () {
      return args
    }
  })
}

export const Default: Story = {}

export default meta
