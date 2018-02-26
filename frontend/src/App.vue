<template>
  <div class="app">
    <CcModal />
    <CcHeader />
    <CcCart />
    <CcStore />
    <CcFooter />
  </div>
</template>

<script>
import CcModal from './components/Modal'
import CcHeader from './components/Header'
import CcStore from './components/Store'
import CcCart from './components/Cart'
import CcFooter from './components/Footer'

export default {
  name: 'App',
  components: {
    CcModal,
    CcHeader,
    CcStore,
    CcCart,
    CcFooter
  }
}
</script>

<style lang="scss">
  body {
    background: #f1f1f1;
  }
  .fade-enter-active, .fade-leave-active {
    -webkit-transition: opacity 1s ease, transform 1s;
    -moz-transition: opacity 1s ease, transform 1s;
    -ms-transition: opacity 1s ease, transform 1s;
    -o-transition: opacity 1s ease, transform 1s;
    transition: opacity 1s ease, transform 1s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
    -webkit-transform: translate3d(10px, 0, 0);
    -moz-transform: translate3d(10px, 0, 0);
    -ms-transform: translate3d(10px, 0, 0);
    -o-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
  .bounce-enter-active {
    -webkit-animation: bounce-in .1s;
    -moz-animation: bounce-in .1s;
    -ms-animation: bounce-in .1s;
    -o-animation: bounce-in .1s;
    animation: bounce-in .1s;
  }
  .bounce-leave-active {
    -webkit-animation: bounce-out .1s;
    -moz-animation: bounce-out .1s;
    -ms-animation: bounce-out .1s;
    -o-animation: bounce-out .1s;
    animation: bounce-out .1s;
  }
  @keyframes bounce-in{
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes bounce-in{
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes bounce-out{
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(0);
    }
  }
</style>
