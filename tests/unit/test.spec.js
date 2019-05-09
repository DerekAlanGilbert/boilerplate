import { shallowMount } from '@vue/test-utils'
import Test from '@/components/test.vue'

describe('test.vue', () => {
  it('renders props.msg when passed', () => {
    const text = 'test prop'
    const wrapper = shallowMount(Test, {
      propsData: { text },
    })
    expect(wrapper.text()).toMatch(text)
  })
})
