<template>
  <div class="home_container">

    <van-nav-bar title="小胖同学" fixed />
    <van-pull-refresh v-model="refreshing" animation-duration=1000 success-text="不要拉太快" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" offset=0 @load="onLoad">
        <Articleslist v-for='item  in arrlist' :key="item.art_id" :list_title="item.title" :list_name="item.aut_name" :list_pubdate="item.pubdate" :list_comm_count="item.comm_count" :list_cover="item.cover"></Articleslist>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
// 导入封装的文章API接口
import { getArticlesAPI } from '@/api/ArticlesAPI/articlesAPI'
// 导入文章组件
import Articleslist from '@/components/Articleslist/Articleslist'
export default {
  data() {
    return {
      page: 1,
      limit: 10,
      arrlist: [],
      loading: true,
      finished: false,
      refreshing: false
    }
  },
  created() {
    this.intaxiosdata()
  },
  methods: {
    async intaxiosdata(isLoading) {
      const { data: res } = await getArticlesAPI(this.page, this.limit)
      if (res.length === 0) {
        this.finished = true
        this.refreshing = true
      }
      if (isLoading) {
        this.arrlist = [...res, ...this.arrlist]
        this.refreshing = false
      } else {
        this.arrlist = [...this.arrlist, ...res]

        setTimeout(() => {
          this.loading = false
        }, 3000)
      }
    },
    // 上滑加载
    onLoad() {
      console.log('触发了load')

      this.page++
      this.intaxiosdata()
    },
    // 下拉加载
    onRefresh() {
      this.page++
      console.log('触发了上啦')
      this.intaxiosdata(true)
    }
  },
  components: {
    Articleslist
  }
}
</script>

<style lang='less' scoped>
.home_container {
  padding: 46px 0 50px 0;

  .van-nav-bar {
    background-color: lightblue;
  }
  // 使用deep来修改组件库中使用类名无法生效的样式
  /deep/.van-nav-bar__title {
    color: #fff;
  }
}
</style>
