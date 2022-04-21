<template>
  <div class="login_container">
    <van-nav-bar title="小胖同学" fixed />
    <van-form @submit="login">
      <van-field v-model.trim="form.mobile" type="tel" label="手机号码" placeholder="请输入手机号码" required :rules="rules.mobile"></van-field>
      <van-field v-model.trim="form.code" type="password" label="登录密码" placeholder="请输入登录密码" required :rules="rules.code"></van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      // 验证条件，用来验证表单form
      rules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'onBlur' },
          { pattern: /^1\d{10}$/, message: '请填写正确的手机号', trigger: 'onBlur' }
        ],
        code: [{ required: true, message: '请输入密码', trigger: 'onBlur' }]
      },
      form: {
        mobile: '13812312312',
        code: '246810'
      }
    }
  },
  methods: {
    // 登录验证
    async login() {
      console.log('点击了')
      const { data: res } = await axios.post('http://www.liulongbin.top:8000/v1_0/authorizations', { mobile: this.form.mobile, code: this.form.code })
      console.log(res)
      if (res.message === 'OK') {
        localStorage.setItem('token', res.data.token)
        this.$router.push('/user')
      }
    }
  },
  computed: {}
}
</script>

<style lang='less' scoped>
.login_container {
  padding: 100px 0 50px 0;
  .van-nav-bar {
    background-color: lightblue;
    /deep/.van-nav-bar__title {
      color: #fff;
    }
  }
}
</style>
