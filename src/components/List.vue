<template>
  <div
    v-if="products"
    class="products-list"
  >
    <div
      v-for="(item, index) in products"
      :class="{ 'product': true, 'product-in-cart': $store.getters.productInCart(item) }"
      :key="index"
    >
      <img :src="getImagePath(item)">
      <div class="meta">
        <div class="title">
          {{ item.title }}
        </div>
        <div class="separator-container">
          <div class="separator"></div>
        </div>
        <div class="amount">
          <div class="currency">
            {{ item.currencyFormat }}
          </div>
          <div class="price-container">
            <div class="price">
              {{ getMainPrice(item.price) }}
            </div>
            <div class="price-decimal">
              {{ getDecimalPrice(item.price) }}
            </div>
          </div>
        </div>
         <div v-if="item.installments > 0" class="installments">
          {{ getInstallmentsMessage(item) }}
        </div>
      </div>
      <button
        @click="addToCart(item)"
        :disabled="$store.getters.productInCart(item)"
        class="button"
      >
        {{ $store.getters.productInCart(item) ? 'Adicionado' : 'Adicionar' }}
      </button>
    </div>
  </div>
</template>
<script>
import { getMainPrice, getDecimalPrice, getProInstallmentPrice } from '../util/product'
import { ADD_TO_CART } from '../store'

export default {
  name: 'List',
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  methods: {
    getImagePath: function (item) {
      return require('../assets/' + item.imagePath)
    },
    addToCart: function (item) {
      this.$store.commit(ADD_TO_CART, item)
      this.$notify({ title: 'Adicionado ao Carrinho' })
    },
    getMainPrice: function (price) {
      return getMainPrice(price)
    },
    getDecimalPrice: function (price) {
      return getDecimalPrice(price)
    },
    getInstallmentsMessage: function (item) {
      return `ou ${item.installments} x R$ ${getProInstallmentPrice(item.price, item.installments)}`
    }
  }
}
</script>
<style scoped lang="scss">
  .meta {
    height: 88px;
  }
  .installments {
    color: $grey;
    display: flex;
    justify-content: center;
    margin-top: $spacing-xsm;
  }

  .products-list {
    display: flex;
    flex-wrap: wrap;
  }

  .button {
    margin-top: $spacing-sm;
  }

  .product {
    margin: 0 $spacing-xl;
    width: 25%;
    margin-bottom: $spacing-md;

    &.product-in-cart {
      opacity: 0.4;
    }

    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
      color: $color-primary;
      word-wrap: break-word;
      text-align: center;
      margin-top: $spacing-sm;
    }

    .currency {
      margin-right: $spacing-xsm;
    }

    .currency,
    .price-decimal {
      color: $color-primary;
    }

    .price-container {
      display: flex;
      align-items: flex-end;
    }

    .price {
      font-size: 24px;
      line-height: 24px;
      color: black;
      font-weight: bold;
    }

    .amount {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }

    .separator {
      background: #DFBB00;
      height: 2px;
      width: 15px;
    }

    .separator-container {
      display: flex;
      justify-content: center;
      margin-top: $spacing-xsm;
      margin-bottom: $spacing-xsm;
    }
  }
</style>
