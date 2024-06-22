import { defineComponent, createApp, h } from 'vue'

export const toInnerHTML = (component, propsData) => {
  const Component = defineComponent({
    render () {
      return h(component, propsData)
    }
  })

  const app = createApp(Component)
  const root = document.createElement('div')
  app.mount(root)
  const html = root.innerHTML
  app.unmount()
  return html
}
