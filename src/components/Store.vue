<template>
  <div>
    <Cart
      :open="cartIsOpen"
      @close="toggleCart"
    />
    <div class="store">
      <div class="header">
        <Search/>
        <button
          class="button carrinho" 
          @click.prevent.stop="toggleCart"
        >
          carrinho
        </button>
      </div>
      <div class="query">
        "Camisas Corinthians"
      </div>
      <div class="results">
        1 - 20 | 230 resultados
      </div>
      <div class="separator"/>
      <List
        class="list-container"
        :products="$store.getters.products"
      />
      <div class="separator-bottom"/>
      <div class="results">
        1 - 20 | 230 resultados
      </div>
      <Paginator/>
    </div>
  </div>
</template>
<script>
import Search from './Search'
import List from './List'
import Cart from './Cart'
import Paginator from './Paginator'
import BagIcon from './icons/BagIcon'

export default {
  name: 'Store',
  components: {
    Search,
    List,
    Cart,
    Paginator,
    BagIcon
  },
  data: function () {
    return {
      products: [],
      cartIsOpen: false
    }
  },
  methods: {
    toggleCart: function () {
      this.cartIsOpen = !this.cartIsOpen
    }
  }
}
</script>
<style scoped lang="scss">
  .carrinho {
    margin-left: $spacing-lg;
  }

  .bag-icon {
    fill: black;
    width: 48px;
    height: 48px;
}

  .header {
    display: flex;
    height: 48px;
    margin-top: $spacing-md;
    margin-bottom: $spacing-xl;
  }

  .store {
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 984px;
    margin: 0 auto;
  }

  .results {
    font-size: 16px;
    color: $grey;
    margin-bottom: $spacing-md;
  }

  .query {
    margin-bottom: $spacing-sm;
    font-size: 30px;
    font-weight: bold;
    color: $color-secondary;
  }

  .separator {
    width: 23px;
    height: 2px;
    background: $grey;
    margin-bottom: $spacing-md;
  }

  .list-container {
    margin-bottom: $spacing-xxl;
  }

  .separator-bottom {
    width: 60px;
    height: 2px;
    background: $grey;
    margin-bottom: $spacing-md;
  }
</style>
