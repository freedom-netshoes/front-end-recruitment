<template>
  <div class="store">
    <ul>
      <li v-for="product in products">
        <div class="image">
          <img :src="'../../static/img/store/' + product.title.toLowerCase().replace(/ /g, '-') + '.jpg'" height="230" width="180" alt="placeholder+image">
        </div>

        <div class="description">
          <p>{{product.title}}</p>
          <p>{{product.style}}</p>
        </div>

        <div class="separator"></div>

        <div class="price">
          <p>
            {{product.currencyFormat}} <span>{{product.price.toString().split(".")[0]}}</span>,{{product.price.toFixed(2).toString().split(".")[1]}}
          </p>
        </div>

        <div class="parcels">
          <p>ou 3 x {{product.currencyFormat}} {{(product.price / 3).toFixed(2).toString().split(".")[0]}},{{(product.price / 3).toFixed(2).toString().split(".")[1]}}</p>
        </div>

        <button type="button" class="btn-buy" @click="whatSize(product)">Adicionar ao Carrinho</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from "./api";

  export default {
    name: 'CcStore',
    data () {
      return {
        products: []
      }
    },
    methods: {
      whatSize (product) {
        this.$store.commit('MODAL', {
          show: true,
          product: product
        });
      }
    },
    created () {
      const vm = this;

      axios.get('/products')
        .then((products) => {
          vm.$data.products = products.data;
        }, (error) => {
          console.log("Não foi possível trazer os dados", error);
        });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .store {
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
        padding: 1%;
        width: 20%;
        height: 20%;
        flex: 0 1 calc(32.5% - 1em);
        flex-direction: column;

        .image {
          width: 60%;
          margin: 3% auto;

          img {
            width: 100%;
          }
        }

        .separator {
          width: 6%;
          background: #dfbd00;
          height: 3px;
          margin: 2% auto;
        }

        .description, .price, .parcels {
          width: 100%;

          p {
            text-align: center;
            color: #313135;
          }
        }

        .price {

          p {

            span {
              font-size: 2vw;
              font-weight: bold;
            }
          }
        }

        .parcels {
          margin-top: 1%;

          p {
            color: #999999;
          }
        }

        button.btn-buy {
          width: 100%;
          padding: 5%;
          margin-top: 2%;
          background: green;
          border: 0;
          color: white;
          cursor: pointer;
          font-size: 1.2vw;
        }
      }
    }
  }
</style>
