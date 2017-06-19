/* global describe, it, expect */
import * as types from './action-types'
import * as actions from './action'

describe('testing actions to check their correct type response', () => {
  const product = {
    'id': 4,
    'sku': '9197907543445677',
    'title': 'Camisa Nike Corinthians I',
    'description': '14/15 s/nº - Jogador',
    'availableSizes': ['GG'],
    'style': 'Branco com listras pretas',
    'price': 349.9,
    'installments': 12,
    'currencyId': 'BRL',
    'currencyFormat': 'R$',
    'isFreeShipping': false
  }
  describe('Add Product Cart', () => {
    it('has the correct type', () => {
      const action = actions.addProductCart(product)
      expect(action.type).toBe(types.PRODUCT_ADDED)
      expect(action.payload.sku).toBeDefined()
    })
  })
  describe('Remove Product Cart', () => {
    it('has the correct type', () => {
      const action = actions.removeProductCart(product)
      expect(action.type).toBe(types.PRODUCT_REMOVED)
      expect(action.payload.sku).toBeDefined()
    })
  })
  describe('Toggle Cart', () => {
    it('has the correct type', () => {
      const action = actions.toggleCart(true)
      expect(action.type).toBeTruthy()
    })
  })
})
