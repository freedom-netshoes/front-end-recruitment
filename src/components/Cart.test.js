import { shallow } from 'vue-test-utils'
import Cart from './Cart'

describe('Cart.test.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallow(Cart, {
      propsData: {
        open: true,
        cart: []
      }
    })
  })

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})