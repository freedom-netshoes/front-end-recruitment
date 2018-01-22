<template>
  <div
    class="cart"
    :style="style"
   >
   <div
      class="close"
      @click="$emit('close')"
    >
    <CloseIcon class="close-icon"/>
  </div>
    <div class="title">
      <div class="bag">
        <BagIcon class="bag-icon"/>
        <div class="counter">
          {{ $store.getters.cart.length }}
        </div>
      </div>
      <div class="content">
        sacola
      </div>
    </div>
    <div class="list">
      <div
        v-for="item in $store.getters.cart"
        class="product"
        :key="item.id"
      >
        <div class="image">
          <img :src="getImagePath(item)"/>
        </div>
        <div class="info-container">
          <div class="info">
            <div class="title">
              {{ item.title }}
            </div>
            <div class="size-n-style">
              <div class="size">
                {{ formatSizes(item.availableSizes) }}
              </div>
              <div
                v-if="item.availableSizes.length > 0 && item.style.length > 0"
                class="separator"
              />
              <div class="style">
                {{ item.style }}
              </div>
            </div>
            <div class="amount">
              Quantidade: 2
            </div>
          </div>
          <div class="info-extra">
            <div
              class="close"
              @click="removeItem(item)"
              @mouseover="deleteIntention"
              @mouseleave="noDeleteIntention"
            >
              <CloseIcon class="close-icon"/>
            </div>
            <div class="amount">
              <div class="currency">
                R$
              </div>
              <div class="price">
                {{ getMainPrice(item.price) }}
              </div>
              <div class="price-decimal">
                {{ getDecimalPrice(item.price) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="subtotal">
      subtotal
      <div class="amount-container">
        <div class="amount">
          <div class="currency">
            R$
          </div>
          <div class="price">
            {{ getFinalPrice() }}
          </div>
          <div class="price-decimal">
            {{ getFinalDecimalPrice() }}
          </div>
        </div>
        <div class="installments">
          {{ getFinalInstallmentsMessage() }}
        </div>
      </div>
    </div>
    <button class="button big">
      comprar
    </button>
  </div>
</template>
<script>
import { getMainPrice, getDecimalPrice, getCartFinalPrice, getProInstallmentPrice } from '../util/product'
import { REMOVE_FROM_CART } from '../store'
import CloseIcon from './icons/CloseIcon'
import BagIcon from './icons/BagIcon'

export default {
  name: 'Cart',
  components: {
    CloseIcon,
    BagIcon
  },
  props: {
    open: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    style: function () {
      return {
        right: this.open ? '0' : '-600px'
      }
    },
    finalPrice: function () {
      return getCartFinalPrice(this.$store.getters.cart)
    }
  },
  methods: {
    getImagePath: function (item) {
      return require('../assets/' + item.imagePath)
    },
    deleteIntention: function (event) {
      const productEl = this.getParentProductEl(event.target)
      productEl.classList.add('delete-intention')
    },
    noDeleteIntention: function (event) {
      const productEl = this.getParentProductEl(event.target)
      productEl.classList.remove('delete-intention')
    },
    getParentProductEl: function (el) {
      return el.closest('.product')
    },
    removeItem: function (item) {
      this.$store.commit(REMOVE_FROM_CART, item)
      this.$notify({ title: 'Removido do Carrinho' })
    },
    formatSizes: function (sizes) {
      return sizes.map(size => size).join(' ')
    },
    getMainPrice: function (price) {
      return getMainPrice(price)
    },
    getDecimalPrice: function (price) {
      return getDecimalPrice(price)
    },
    getFinalPrice: function () {
      return getMainPrice(this.finalPrice)
    },
    getFinalDecimalPrice: function () {
      return getDecimalPrice(this.finalPrice)
    },
    getFinalInstallmentsMessage: function (item) {
      return `ou em até 10 x R$ ${getProInstallmentPrice(this.finalPrice, 10)}`
    }
  }
}
</script>
<style scoped lang="scss">
  .list {
    margin-bottom: 20px;
    .product:last-child {
      border-bottom: 2px solid black;
    }
  }

  .button {
    margin-top: 20px;
  }

  .amount {
    color: $yellow;
    display: flex;
    .currency {
      margin-right: $spacing-xsm;
    }
    .price {
      font-weight: bold;
    }
  }

  .info-container {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
  }

  .info-extra {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px 0;
  }

  .info {
    display: flex;
    flex-direction: column;
    .title {
      color: white;
    }

    .size-n-style {
      display: flex;
      align-items: center;
      .separator {
        width: 1px;
        height: 1em;
        margin: 0 $spacing-xsm;
        background: $grey-second;
      }
    }
    .size,
    .amount,
    .size-n-style {
      color: $grey-second;
    }
  }

  .subtotal {
    display: flex;
    text-transform: uppercase;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    color: $grey;
    .amount-container {
      display: flex;
      flex-direction: column;

      .amount {
        display: flex;
        justify-content: flex-end;
        font-size: $font-size-xlg;
      }
    }
  }

  .product {
    border-top: 1px solid black;
    display: flex;
    padding: 20px;
    &.delete-intention {
      .info,
      .info-extra .amount,
      .image {
        opacity: 0.4;
      }

      .info,
      .info-extra {
        text-decoration: line-through;
      }
    }

    &:hover {
      background: black;
      cursor: pointer;

      .close {
        fill: white;
      }
    }

    .image {
      display: flex;
      align-items: center;
      margin-right: 10px;

      &,
      img {
        width: 50px;
      }
    }

    .close {
      display: flex;
      justify-content: flex-end;
    }

    .close-icon {
      width: 14px;
      height: 14px;
    }
  }

  .bag {
    position: relative;

    .counter {
      position: absolute;
      right: 0;
      bottom: 0;
      background: $yellow;
      border-radius: 100px;
      color: black;
      text-align: center;
      font-size: 14px;
      padding: 0.2em 0.6em;
    }

    .bag-icon {
      width: 48px;
      fill: white;
    }
  }

  .cart {
    position: fixed;
    background: $cart-background;
    top: 0;
    bottom: 0;
    right: 0;
    width: 600px;
    transition: all .2s ease-in-out;
    padding: $spacing-sm $spacing-md $spacing-xl;
    z-index: 4000;
    overflow-y: scroll;

    > .close {
      display: flex;
      flex-grow: 1;
      justify-content: flex-end;
      fill: white;
      .close-icon {
        width: 24px;
        height: 24px;
        &:hover {
          cursor: pointer;
        }
      }
    }

    > .title {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 40px;

      .content {
        color: white;
        text-transform: uppercase;
        font-size: $font-size-xlg;
        margin-left: $spacing-lg;
      }
    }
  }
</style>
