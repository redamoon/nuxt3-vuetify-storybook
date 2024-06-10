import type { Meta, StoryObj } from '@storybook/vue3'
import VSelect from './VSelect.vue'

type Story = StoryObj<typeof VSelect>;

const meta: Meta<typeof VSelect> = {
  title: 'Components/VSelect',
  component: VSelect,
  tags: ['autodocs'],
  render: args => ({
    components: { VSelect },
    setup () {
      return { args }
    },
    template: '<VSelect v-bind="args" />'
  })
}
export const Default: Story = {
  args: {}
}

export default meta
