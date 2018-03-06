<template>
  <div class="footer">
    <p>NetShoes</p>
  </div>
</template>

<script>
export default {
  name: 'CcFotter'
}
</script>

<style lang="scss" scoped>
  .footer {
    display: none;
    position: absolute;
    bottom: 0;
    width: 100%;
    background: none rgba(32, 32, 37, .1);

    p {
      font-size: 1vw;
      text-align: center;
      color: #9a9a9a;
      padding: 1% 0;
      font-weight: bold;
    }
  }
</style>
