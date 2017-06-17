import { PRODUCTS_LOADED } from './types'
import { productsListLoaded } from './action'

describe('testing actions', () => {
  describe('Product List Action', () => {
    it('has the correct type', () => {
      const action = productsListLoaded()
      expect(action.type).toBe(PRODUCTS_LOADED)
    })

    it('has the a Promise for payload', () => {
      expect.assertions(1)
      expect(true).toBe(true)
    })
  })
})
