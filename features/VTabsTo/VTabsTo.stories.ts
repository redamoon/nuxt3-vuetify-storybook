import type { Meta, StoryObj } from '@storybook/vue3'
import { useRouter } from 'vue-router'
import VTabsTo from './VTabsTo.vue'

type Story = StoryObj<typeof VTabsTo>;

function createPageStory (name: string): StoryObj {
  return {
    render: () => ({
      setup () {
        const pageLoaded = ref(false)
        const router = useRouter()
        router.push({ name }).then(() => {
          pageLoaded.value = true
        })

        return { pageLoaded }
      },
      template: '<template v-if="pageLoaded"><router-view /></template>'
    })
  }
}

const meta: Meta<typeof VTabsTo> = {
  title: 'Features/VTabsTo',
  component: VTabsTo,
  tags: ['autodocs'],
  argTypes: {},
  render: args => ({
    components: { VTabsTo },
    setup () {
      return { args }
    },
    template: '<VTabsTo v-bind="args" />'
  })
}
export const Default: Story = {
  args: {}
}

export default meta

export const HomePage = createPageStory('Home')
export const AboutPage = createPageStory('About')
