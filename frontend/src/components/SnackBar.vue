<template>
  <div>
    <div class="snack-bar" :class="[(snackBar.show ? 'opened': '')]">
      <p>{{snackBar.message}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SnackBar',
  computed: {
    snackBar () {
      return this.$store.state.snackBar
    }
  }
}
</script>

<style lang="scss" scoped>
  .snack-bar {
    position: fixed;
    z-index: 100;
    top: -30%;
    left: 50%;
    transform: translateX(-50%);
    width: 30%;
    background: green;
    border-radius: 10px;
    -webkit-transition: top .5s ease;
    -moz-transition: top .5s ease;
    -ms-transition: top .5s ease;
    -o-transition: top .5s ease;
    transition: top .5s ease;

    p {
      color: white;
      font-size: 1.5vw;
      padding: 5% 0;
      text-align: center;
    }
  }

  .snack-bar.opened {
    top: 1%;
  }
</style>
