<template>
  <div class="paginator">
    <div class="previous">
      anterior
    </div>
    <div 
      v-for="page in pages"
      :class="{ 'page': true, 'current' : isPageCurrent(page) }" 
      @click="paginate(page)"
    >
      {{ page }}
      <div class="separator"/>
    </div>
    <div class="separator-right"/>
    <div class="next">
      próximo
    </div>
  </div>
</template>
<script>
export default {
  name: 'Paginator',
  data: function () {
    return {
      pages: [1, 2, 3, 4],
      currentPage: 1
    }
  },
  methods: {
    isPageCurrent: function (page) {
      return this.currentPage === page
    },
    paginate: function (page) {
      this.currentPage = page
    }
  }
}
</script>
<style scoped lang="scss">
  .paginator {
    height: 48px;
    max-width: 440px;
    border: 2px solid $grey;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    margin-bottom: $spacing-lg;
    border-radius: 4px;
    font-weight: bold;
    color: $grey;
    position: relative;

    .separator-right {
      height: 10px;
      background: $grey;
      width: 2px;
    }
  
    .page {
      padding: 0 $spacing-sm;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      &:hover {
        color: $color-secondary;
        cursor: pointer;
      }

      &.current {
        color: $yellow;

        .separator {
          height: 2px;
          background: $yellow;
          width: 14px;
        }
      }
    }

    .previous,
    .next {
      margin: 0 $spacing-md;

      &:hover {
        color: $color-secondary;
        cursor: pointer;
      }
    }
  }
</style>
