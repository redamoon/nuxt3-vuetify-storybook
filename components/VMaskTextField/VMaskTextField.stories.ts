import type { Meta, StoryObj } from '@storybook/vue3'
import VMaskTextField from './VMaskTextField.vue'
import { SetIcon } from '@/constants/icons'

const setIconOptions = Object.keys(SetIcon)

type Story = StoryObj<typeof VMaskTextField>;

const meta: Meta<typeof VMaskTextField> = {
  title: 'Components/VMaskTextField',
  component: VMaskTextField,
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
    components: { VMaskTextField },
    setup () {
      return { args }
    },
    template: '<VMaskTextField v-bind="args" />'
  })
}
export const Default: Story = {
  args: {
    label: '数字のみ',
    modelValue: '',
    maskPattern: '####'
  }
}

export const OneDay: Story = {
  args: {
    label: '日付',
    modelValue: '2024-04-01',
    prependInnerIcon: 'mdi-calendar',
    fieldType: 'date',
    isBefore: true
  }
}

export const Recurring: Story = {
  args: {
    label: '繰り返し日付',
    modelValue: '2024-04-01 ~ 2024-04-30',
    maskPattern: '####-##-## ~ ####-##-##',
    fieldType: 'recurring'
  }
}

export const Phone: Story = {
  args: {
    label: '携帯番号',
    modelValue: '090-0000-0000',
    maskPattern: '###-####-####',
    fieldType: 'phone'
  }
}

export default meta
