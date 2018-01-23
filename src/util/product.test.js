'use strict'

import { roundPrice, formatMainPrice, formatDecimalsFromPrice, 
  getCartPrice, getInstallmentPrice } from './product'

test('rounds 23.2 to 23.20', () => {
  expect(roundPrice(23.2)).toBe('23.20')
})

test('formats 365.2 to 365', () => {
  expect(formatMainPrice(365.2)).toBe('365')
})

test('formats 365.2 to 20 (decimals only)', () => {
  expect(formatDecimalsFromPrice(365.2)).toBe('20')
})

test('sums prices from items array (20 + 12 + 32 + 43)', () => {
  const items = [
    {price: 20},
    {price: 12},
    {price: 32},
    {price: 43}
  ]
  expect(getCartPrice(items)).toBe(107)
})

test('calculates 7 installments over amount 927', () => {
  expect(getInstallmentPrice(923, 7)).toBe('131,86')
})
