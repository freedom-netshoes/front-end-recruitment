<template>
  <div class="search">
   <input type="text"/>
   <SearchIcon class="lupa"/>
  </div>
</template>
<script>
import SearchIcon from './icons/SearchIcon.vue'

export default {
  name: 'Search',
  components: {
    SearchIcon
  }
}
</script>
<style scoped lang="scss">
  .search {
    position: relative;  

    input {
      font-size: $font-size-sm;
      color: $grey-second;
      width: 408px;
      border: solid 2px $grey;
      padding: 0 49.5px 0 16px;
      height: 48px;
    }

    .lupa {
      position: absolute;
      width: 19px;
      height: 19px;
      top: 14.5px;
      right: 14.5px;
      display: block;
    }
  }
</style>
