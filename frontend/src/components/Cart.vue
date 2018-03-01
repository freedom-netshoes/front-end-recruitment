<template>
  <transition name="fade" appear mode="out-in">
    <div class="cart" v-if="cart.show">
      <div class="title">
        <div class="bag">
          <div class="image">
            <img src="../../static/img/cart/icon-bag.png" height="40" width="33" alt="">
            <div class="badget">{{cart.products.length}}</div>
            <span>SACOLA</span>
          </div>
        </div>
      </div>

      <ul class="cart-products">
        <!-- <li class="removed"> -->
        <li v-for="product in cart.products" :key="product.id">
          <div class="image"><img :src="'../../static/img/store/' + product.title.toLowerCase().replace(/ /g, '-') + '_thumb.jpg'" alt="placeholder+image"></div>
          <div class="description">
            <h3>{{product.title}}</h3>
            <p>{{product.size}} | {{product.style}}</p>
            <p>Quantidade: {{product.quantify}}</p>
          </div>
          <div class="price">
            <div class="btn-remove">X</div>
            <div class="price-total">{{product.currencyFormat}} {{product.price.toFixed(2).toString().replace('.',',')}}</div>
          </div>
        </li>
      </ul>

      <div class="total">
        <div class="sub-total">
          <p>SUBTOTAL</p>
        </div>

        <div class="parcels">
          <h3>R$ {{cart.total.toFixed(2).toString().replace('.',',')}}</h3>
          <p>ou em até 10 X R$ {{(cart.total / 10).toFixed(2).toString().replace('.',',')}}</p>
        </div>
      </div>

      <div class="btn-buy">
        <button type="button" @click="buy">COMPRAR</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Cart',
  methods: {
    buy () {
      this.$store.commit('BUY', {
        show: false
      })
    }
  },
  computed: {
    cart () {
      return this.$store.state.cart
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .cart {
    position: fixed;
    top: 0;
    right: 0;
    width: 45%;
    height: 100%;
    background: #202025;
    z-index: 2;
    overflow-y: scroll;
    overflow-x: hidden;

    .title {
      padding: 5% 0;
      width: 100%;

      .bag {
        margin: 1% auto;

        .badget {
          position: absolute;
          left: 3%;
          bottom: -15%;
          background: #dfbd00;
          border-radius: 50%;
          padding: 1%;
          font-size: .9vw;
          line-height: .8;
          font-weight: bold;
        }

        .image {
          position: relative;
          left: 45%;
        }

        span {
          color: white;
          padding: 0;
          position: relative;
          top: -10px;
          left: 1%;
          font-weight: bold;
        }
      }
    }

    ul.cart-products {
      width: 100%;
      margin: 0 auto;

      li {
        width: 100%;
        float: left;
        color: white;
        border-top: 1px solid black;
        padding: 5% 0%;
        margin: 0% 0;

        .image, .description, .price {
          float: left;
        }

        .image {
          width: 15%;
          padding-left: 3%;

          img {
            width: 100%;
          }
        }

        .description {
          width: 50%;
          margin-left: 3%;

          h3 {
            margin-bottom: 1%;
          }

          p {
            margin: 2% 0 0;
            font-size: 1vw;
            color: #999999;
          }
        }

        .price {
          float: right;
          padding-right: 3%;

          .btn-remove {
            color: black;
            font-weight: bold;
            font-size: 1.5vw;
            text-align: right;
            width: 100%;
            margin-bottom: 25%;
          }

          .price-total {
            color: #dfbd00;
            font-weight: bold;
          }
        }
      }

      li.removed {
        background: #131316;
        opacity: .5;

        .description {
          text-decoration: line-through;
        }
        .price-total {
          text-decoration: line-through;
        }
      }

      li:last-child {
        border-bottom: 1px solid black;
      }
    }

    .total {
      float: left;
      width: 95%;
      margin-top: 5%;
      padding-left: 3%;

      .sub-total {
        float: left;
        color: #949495;
        margin-top: 2%;
      }

      .parcels {
        float: right;
        text-align: right;

        h3 {
          font-weight: bold;
          font-size: 2vw;
          color: #dfbd00;
          margin-bottom: 5%;
        }

        p {
          color: #5a5a5c;
        }
      }
    }

    .btn-buy {
      float: left;
      width: 95%;
      padding-left: 2.5%;
      margin-bottom: 5%;

      button {
        background: black;
        color: #fff;
        text-align: center;
        width: 100%;
        border: 0;
        height: 50px;
        margin-top: 5%;
      }
    }
  }
</style>
