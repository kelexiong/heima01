<template>
  <div class="user_container">
    <!-- 头像部分 -->
    <div class="user_list">
      <div class="user_details">
        <div class="user_photo">
          <van-image round width="6rem" height="6rem" src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
        </div>
        <div class="user_name">
          <div> <span>蚍蜉何以撼大树</span></div>
          <div class="user_name_sonspan">
            <div class="user_name_son_sapn"> <span>蚍蜉何以撼大树</span></div>
          </div>
        </div>
      </div>
      <div class="user_dynamic">
        <div class="user_dynamic_cents">
          <div class="user_dynamic_cents_son"><span>动态</span></div>
          <div class="user_dynamic_cents_son"><span>关注</span></div>
          <div class="user_dynamic_cents_son"><span>粉丝</span></div>
        </div>
      </div>
    </div>
    <!-- 列表部分 -->
    <div>
      <van-cell title="编辑资料" is-link @click="useredit" />
      <van-cell title="小胖同学" is-link />
      <van-cell title="退出登录" is-link @click="exitlogin" />
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    exitlogin() {
      this.show = true
      this.$dialog
        .confirm({
          title: '退出',
          message: '是否确定退出登录'
        })
        .then(() => {
          localStorage.removeItem('token')
          this.$router.replace('/login')
        })
        .catch(() => {
          // on cancel
        })
    },
    useredit() {
      this.$router.push('/edit')
    }
  }
}
</script>

<style lang='less' scoped>
.user_list {
  min-height: 10rem;
  background-color: lightblue;
  padding-top: 3rem;
  .user_details {
    display: flex;
    .user_portrait {
      flex: 35%;
    }
    .user_name {
      padding: 1rem 0 0 1rem;
      flex: 1;
      .user_name_sonspan {
        margin-top: 0.5rem;
        display: flex;
        .user_name_son_sapn {
          padding: 0.3rem;
          font-size: 12px;
          background-color: #fff;
          color: lightblue;
        }
      }
    }
  }
  .user_dynamic {
    display: flex;
    min-height: 7rem;
    .user_dynamic_cents {
      display: flex;
      flex: 1;
      align-items: center;
      .user_dynamic_cents_son {
        flex: 1;
        justify-items: center;
        align-items: center;
        text-align: center;
        font-size: 1.5rem;
        color: #fff;
      }
    }
  }
}
</style>
