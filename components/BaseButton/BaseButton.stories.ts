import type { Meta, StoryObj } from '@storybook/vue3'
import BaseButton from './BaseButton.vue'

type Story = StoryObj<typeof BaseButton>

const meta: Meta<typeof BaseButton> = {
  title: 'BaseButton',
  component: BaseButton,
  render: args => ({
    components: { BaseButton },
    setup () {
      return { args }
    },
    template: '<BaseButton v-bind="args" />'
  })
}

export const Default: Story = {}

export default meta
