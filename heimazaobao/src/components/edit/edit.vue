<template>
  <div class="edit_container">
    <van-nav-bar title="小胖同学-个人编辑" left-text="返回" right-text="保存" left-arrow @click-left="onClickLeft" @click-right="onClickRight" fixed />
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    onClickRight() {}
  }
}
</script>

<style lang='less' scoped>
.edit_container {
  .van-nav-bar {
    background-color: lightblue;
    /deep/.van-nav-bar__title {
      color: #fff;
    }
  }
}
</style>
