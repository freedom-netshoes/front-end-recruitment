import { shallow } from 'vue-test-utils'
import Paginator from './Paginator'

describe('Paginator.test.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallow(Paginator, {
      data: {
        pages: [1, 2, 3, 4, 5, 6, 7]
      }
    })
  })

  it('equals messages to [1, 2, 3, 4, 5, 6, 7]', () => {
    expect(cmp.vm.pages).toEqual([1, 2, 3, 4, 5, 6, 7])
  })

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})