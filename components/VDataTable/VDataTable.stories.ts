import type { Meta, StoryObj } from '@storybook/vue3'
import VDatatable from './VDataTable.vue'

type Story = StoryObj<typeof VDatatable>;

const headers = [
  {
    title: '名前',
    align: 'start',
    key: 'name',
    sortable: true
  },
  {
    title: 'Key',
    align: 'start',
    key: 'id',
    sortable: true
  },
  { title: '', key: 'data-table-expand', sortable: false }
]
const items = [
  {
    name: 'Frozen Yogurt',
    key: 1
  },
  {
    name: 'Ice cream sandwich',
    key: 2
  },
  {
    name: 'Eclair',
    key: 3
  },
  {
    name: 'Cupcake',
    key: 4
  },
  {
    name: 'Gingerbread',
    key: 5
  },
  {
    name: 'Frozen Yogurt2',
    key: 6
  },
  {
    name: 'Ice cream sandwich2',
    key: 7
  },
  {
    name: 'Eclair2',
    key: 8
  },
  {
    name: 'Cupcake2',
    key: 9
  },
  {
    name: 'Gingerbread2',
    key: 10
  },
  {
    name: 'Gingerbread3',
    key: 11
  }
]

const itemsExpanded = [
  {
    name: 'Frozen Yogurt',
    key: 1,
    children: [
      {
        name: 'Frozen Yogurt'
      },
      {
        name: 'Frozen Yogurt'
      }
    ]
  },
  {
    name: 'Ice cream sandwich',
    key: 2,
    children: [
      {
        name: 'Frozen Yogurt2'
      },
      {
        name: 'Frozen Yogurt2'
      }
    ]
  },
  {
    name: 'Eclair',
    key: 3,
    children: [
      {
        name: 'Frozen Yogurt3'
      },
      {
        name: 'Frozen Yogurt3'
      }
    ]
  },
  {
    name: 'Cupcake',
    key: 4,
    children: [
      {
        name: 'Frozen Yogurt4'
      },
      {
        name: 'Frozen Yogurt4'
      }
    ]
  },
  {
    name: 'Gingerbread',
    key: 5,
    children: [
      {
        name: 'Frozen Yogurt5'
      },
      {
        name: 'Frozen Yogurt5'
      }
    ]
  }
]

const meta: Meta<typeof VDatatable> = {
  title: 'Components/VDataTable',
  component: VDatatable,
  tags: ['autodocs'],
  argTypes: {},
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
    isPagination: true,
    headers,
    items
  }
}
export const Expanded: Story = {
  args: {
    isHideHeader: false,
    isPagination: true,
    expanded: true,
    headers,
    items: itemsExpanded
  }
}
export default meta
