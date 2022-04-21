<template>
  <div class="articleslist_container">
    <div class="fater">
      <!-- 文章 -->
      <div class="one_row">
        <div class="one_row_box"><span>{{list_title}}</span></div>
        <div class="one_row_img" v-if="list_cover.type===1"><img :src="list_cover.images[0]" alt=""></div>
      </div>

      <div class="tow_row" v-if="list_cover.type === 3">
        <img :src="item" alt="" v-for="(item,i) in list_cover.images" :key="i">
      </div>
      <!-- 作者部分 -->
      <div class="author_details">
        <span>作者:&nbsp;&nbsp;{{list_name}}&nbsp;&nbsp; {{list_comm_count}}&nbsp;评论 &nbsp;&nbsp;发布日期：&nbsp;{{list_pubdate}}</span>
        <div class="croos_iconbox">
          <van-icon name="cross" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    list_title: {
      type: String,
      default: '小胖头条'
    },
    list_name: {
      type: String,
      default: '小胖'
    },
    list_comm_count: {
      // 通过数组的形式，为当前属性定义多个可能类型
      type: [Number, String],
      default: 0
    },
    list_pubdate: {
      type: String,
      default: '今天'
    },
    list_cover: {
      // 使用对象默认值需要一个函数返回一个对象
      type: Object,
      default: function () {
        return { str: '没有数据' }
      }
    }
  },
  methods: {
    getid() {}
  }
}
</script>

<style lang="less" scoped>
.articleslist_container {
  .fater:hover {
    border: 1px solid #aaa;
  }
  .fater {
    padding-top: 1rem;
    .one_row {
      display: flex;
      justify-content: space-between;
      .one_row_box {
        flex: 1;
        width: 60%;
        padding: 0.2rem 1rem 0 0.3rem;
        span {
          color: rgb(63, 61, 61);
          word-wrap: break-word;
          width: 100%;
        }
      }
      .one_row_img {
        // flex: 1;
        img {
          width: 7rem;
          padding-left: 0.1rem;
        }
      }
    }
    .tow_row {
      padding-top: 0.2rem;
      display: flex;
      img {
        flex: 1;
        width: 5rem;
        padding-left: 0.1rem;
      }
    }
    .author_details {
      display: flex;
      justify-content: space-between;
      padding: 0.1rem 0.3rem;
      span {
        font-size: 12px;
        color: #aaa;
      }
      // .croos_iconbox {
      //   display: inline-block;
      //   color: #aaa;
      //   justify-items: flex-end;
      // }
      .van-icon {
        color: #aaa;
      }
    }
  }
}
</style>
