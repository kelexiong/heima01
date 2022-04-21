<template>
  <div class="app_container">
    <!-- 路由内容 -->
    <router-view></router-view>
    <!-- 底部导航栏 -->
    <div>
      <van-tabbar route fixed>
        <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/user" icon="friends-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.app_container {
}
</style>
