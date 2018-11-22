<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit">
            
          </login-form>
          <!-- <p class="login-tip">输入任意用户名和密码即可</p> -->
          <Spin size="large" fix v-if="spinShow"></Spin>
        </div>

      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import { mapActions } from 'vuex'
export default {
  data (){
    return {
      spinShow: false
    }
  },
  components: {
    LoginForm
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit ({ userName, password }) {
      console.log('11111');
      this.spinShow = true;
      this.handleLogin({ userName, password }).then(res => {
        this.getUserInfo().then(res => {
          this.spinShow = false;
          this.$router.push({
            name: this.$config.homeName
          })
        }).catch(msg =>{
          this.spinShow = false;
          this.$Message.info(err)
        })
      }).catch(err => {
         this.spinShow = false;
          this.$Message.info(err)
        })
    }
  }
}
</script>

<style>

</style>
