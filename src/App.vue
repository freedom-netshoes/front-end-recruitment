<template>
  <div id="app">
    <Store/>
    <notifications position="bottom center"/>
  </div>
</template>

<script>
import { ADD_TO_CART } from './store'
import { getItemFromStorage, setItemInStorage, removeItemFromStorage } from './util/storage'
import Store from './components/Store'

export default {
  name: 'App',
  components: {
    Store
  },
  methods: {
    setupCartSaving: function () {
      window.onbeforeunload = () => {
        removeItemFromStorage('cart-items')
        setItemInStorage('cart-items', this.$store.getters.cart)
      }
    },
    loadSavedCart: function () {
      getItemFromStorage('cart-items').then(items => {
        if (items && (Array.isArray(items))) {
          items.forEach(item => {
            this.$store.commit(ADD_TO_CART, item)
          })
        }
      })
    }
  },
  created () {
    this.setupCartSaving()
    this.loadSavedCart()
  }
}
</script>
<style lang="scss">
  * {
    outline: none;
    box-sizing: border-box;
  }
  html {
    font-family: 'Open Sans';
    font-size: 14px;
  }
  body {
    margin: 0;
  }
  .button {
    appearance: none;
    background: black;
    color: white;
    width: 100%;
    padding: $spacing-sm;
    text-transform: uppercase;
    border-radius: 4px;
    font-weight: bold;
    border: 0;

    &:disabled {
      &:hover {
        cursor: initial;
      }
      background: #ccc;
    }

    &.big {
      padding: $spacing-md;
      font-size: $font-size-lg;
    }

    &:hover {
      cursor: pointer;
      background: #ccc;
    }
  }

  .vue-notification {
    background: $color-netshoes;
    border-radius: 4px;
    padding: $spacing-sm;
    border: 0;
  }
</style>
