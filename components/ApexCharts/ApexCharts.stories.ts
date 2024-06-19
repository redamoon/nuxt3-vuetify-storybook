import type { Meta, StoryObj } from '@storybook/vue3'
import ApexCharts from './ApexCharts.vue'

type Story = StoryObj<typeof ApexCharts>;

const meta: Meta<typeof ApexCharts> = {
  title: 'Components/ApexCharts',
  component: ApexCharts,
  tags: ['autodocs'],
  render: args => ({
    components: { ApexCharts },
    setup () {
      return { args }
    },
    template: '<ApexCharts v-bind="args" />'
  })
}
export const Default: Story = {
  args: {}
}

export default meta
