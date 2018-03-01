<template>
  <transition name="fade" appear mode="out-in">
    <div class="modal" v-if="modal">
      <transition name="fade" appear mode="out-in">
        <div class="content">
          <div class="btn-close" @click="closeModal">X</div>
          <h2>Selecione a quantidade</h2>
          <input type="number" class="quantify" v-model="quantify">

          <h2>Selecione o tamanho</h2>
          <ul>
            <li v-for="availableSize in product.availableSizes" :key="availableSize" @click="addToCart(availableSize, quantify)">{{availableSize}}</li>
          </ul>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  computed: {
    product () {
      return this.$store.state.modal.product
    },
    modal () {
      return this.$store.state.modal.show
    }
  },
  methods: {
    closeModal () {
      this.$store.commit('MODAL', {
        show: false,
        product: null
      })
    },
    addToCart (availableSize, quantify) {
      this.$store.commit('ADD_PROD_CART', {
        show: true,
        size: availableSize,
        quantify: quantify,
        product: this.$store.state.modal.product
      })
      this.$data.quantify = 1;
    }
  },
  data () {
    return {
      quantify: 1
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal {
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background: none rgba(255, 255, 255, .8);
    z-index: 10;

    .content {
      box-shadow: 0 0 35px #ccc;
      width: 35%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
      background: white;
      padding: 2%;

      .btn-close {
        position: absolute;
        right: -10px;
        top: -10px;
        border-radius: 50%;
        background: red;
        color: white;
        cursor: pointer;
        width: 30px;
        padding: 2% 0;
        text-align: center;
        line-height: 0.7;
        font-weight: bold;
      }

      h2 {
        text-align: center;
        padding: 0 0 5% 0;
        font-size: 1.4vw;
      }

      .quantify {
        width: 20%;
        margin: 0 0 5% 38%;
        text-align: center;
        border-radius: 5px;
        padding: 1%;
      }

      ul {
        display: -webkit-flex;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        justify-content: baseline;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

        li {
          flex: 1;
          flex-direction: column;
          border: 1px solid black;
          margin: 1% 7%;
          padding: 2%;
          text-align: center;
          cursor: pointer;
          border-radius: 5px;
        }
      }
    }
  }
</style>
