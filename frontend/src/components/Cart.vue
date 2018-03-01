<template>
  <div>
    <transition name="fade" appear mode="out-in">
      <div class="overlay" v-if="cart.show"></div>
    </transition>
    <div class="cart" v-bind:class="{ opened: cart.show }">

      <div class="btn-action" @click="actionCart()">
        <span v-show="cart.show">&#8594;</span>
        <span v-show="!cart.show">&#x2190;</span>
      </div>

      <div class="content-cart">
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
          <transition-group name="fade" appear mode="out-in">
            <li v-for="(product, index) in cart.products" :key="index">
              <div class="image"><img :src="'../../static/img/store/' + product.title.toLowerCase().replace(/ /g, '-') + '_thumb.jpg'" alt="placeholder+image"></div>
              <div class="description">
                <h3>{{product.title}}</h3>
                <p>{{product.size}} | {{product.style}}</p>
                <p>Quantidade: {{product.quantify}}</p>
              </div>
              <div class="price">
                <div class="btn-remove" @click="removeProduct(product, index)">X</div>
                <div class="price-total">{{product.currencyFormat}} {{product.price.toFixed(2).toString().replace('.',',')}}</div>
              </div>
            </li>
          </transition-group>
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
          <button type="button" @click="buy" :disabled="cart.products.length == 0" :class="[cart.products.length == 0 ? 'disabled' : '']">COMPRAR</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  methods: {
    buy () {
      this.$store.commit('BUY', {
        show: false
      })

      this.$store.commit('SNACK_BAR', {
        message: 'Compra realizada com sucesso!',
        timer: 2000,
        status: 'success'
      })
    },
    actionCart () {
      this.$store.commit('SHOW_AND_HIDE_CART', !this.$store.state.cart.show)
    },
    removeProduct (product, index) {
      this.$store.commit('REMOVE_PROD_CART', {
        index: index,
        product: product
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
  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    background: none rgba(255,255,255, 0.8);
    top: 0;
  }

  .cart {
    position: fixed;
    top: 0;
    right: -45%;
    width: 45%;
    height: 100%;
    background: #202025;
    z-index: 2;
    transition: right .5s ease;

    .content-cart {
      height: 100%;
      overflow-y: scroll;
      overflow-x: hidden;
    }

    .btn-action {
      position: absolute;
      left: -7%;
      top: 0;
      background: #202025;
      color: white;
      font-weight: bold;
      width: 7%;
      padding: 3% 0;
      /* height: 20%; */
      text-align: center;
      border-radius: 10px 0px 0px 10px;
      cursor: pointer;

      &:hover {
        box-shadow: 0 0 45px black inset;
      }
    }

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
            cursor: pointer;
            color: black;
            font-weight: bold;
            font-size: 1.5vw;
            text-align: right;
            width: 100%;
            margin-bottom: 25%;

            &:hover {
              color: red;
            }
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
        cursor: pointer;

        &:hover {
          background: green;
        }
      }

      button.disabled {
        cursor: not-allowed;
        color: #4e4e4e;
        background: black;

        &:hover {
          background: black;
          color: #4e4e4e;
        }
      }
    }
  }

  .cart.opened {
    right: 0;
  }
</style>
