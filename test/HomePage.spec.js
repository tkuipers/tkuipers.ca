import { mount } from '@vue/test-utils'
import HomePage from '@/components/home-page.vue'

describe('HomePage', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HomePage)
    expect(wrapper.vm).toBeTruthy()
  })
})
