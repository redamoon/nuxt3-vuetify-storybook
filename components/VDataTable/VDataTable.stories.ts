import type { Meta, StoryObj } from '@storybook/vue3'
import VDatatable from './VDataTable.vue'

type Story = StoryObj<typeof VDatatable>;

const headers = [
  {
    title: '名前',
    align: 'start',
    key: 'name'
  },
  {
    title: 'Key',
    align: 'start',
    key: 'key'
  }
]
const items = [
  {
    name: 'Frozen Yogurt',
    key: '1'
  },
  {
    name: 'Ice cream sandwich',
    key: '2'
  },
  {
    name: 'Eclair',
    key: '3'
  },
  {
    name: 'Cupcake',
    key: '4'
  },
  {
    name: 'Gingerbread',
    key: '5'
  },
  {
    name: 'Frozen Yogurt2',
    key: '6'
  },
  {
    name: 'Ice cream sandwich2',
    key: '7'
  },
  {
    name: 'Eclair2',
    key: '8'
  },
  {
    name: 'Cupcake2',
    key: '9'
  },
  {
    name: 'Gingerbread2',
    key: '10'
  },
  {
    name: 'Gingerbread3',
    key: '11'
  }
]

const meta: Meta<typeof VDatatable> = {
  title: 'VDataTable',
  component: VDatatable,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: {
        type: 'text'
      }
    }
  },
  render: args => ({
    components: { VDatatable },
    setup () {
      return { args }
    },
    template: '<VDatatable v-bind="args" />'
  })
}
export const Default: Story = {
  args: {
    headers,
    items
  }
}

export const PaginationNone: Story = {
  args: {
    isNoneFooter: true,
    headers,
    items
  }
}

export default meta
