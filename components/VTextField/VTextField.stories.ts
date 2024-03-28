import type { Meta, StoryObj } from '@storybook/vue3'
import VTextField from './VTextField.vue'
import { SetIcon } from '@/constants/icons'

const setIconOptions = Object.keys(SetIcon)

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
    },
    variant: {
      control: {
        type: 'select'
      },
      defaultValue: 'underlined',
      options: ['underlined', 'outlined', 'filled', 'solo', 'solo-inverted', 'solo-filled', 'plain']
    },
    prependIcon: {
      control: {
        type: 'select'
      },
      defaultValue: undefined,
      options: setIconOptions
    },
    prependInnerIcon: {
      control: {
        type: 'select'
      },
      defaultValue: undefined,
      options: setIconOptions
    },
    clearIcon: {
      control: {
        type: 'select'
      },
      defaultValue: undefined,
      options: setIconOptions
    },
    'onUpdate:modelValue': {
      action: 'modelValue'
    }
  },
  args: {
    label: 'Label',
    type: 'text',
    placeholder: 'Placeholder',
    bgColor: '',
    baseColor: '',
    variant: 'underlined',
    tile: false,
    autofocus: false,
    centerAffix: false,
    clearable: false,
    flat: false,
    prependIcon: '',
    validationValue: 'バリデーションメッセージ'
  },
  render: args => ({
    components: { VTextField },
    setup () {
      return { args }
    },
    template: '<VTextField v-bind="args" />'
  })
}
export const Default: Story = {
  args: {
    modelValue: ''
  }
}

export default meta
