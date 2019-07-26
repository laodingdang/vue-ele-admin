<template>
  <div class="login-warp">
    <div class="ms-login">
      <div class="ms-title">后台管理系统</div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleform"
        label-width="0px"
        class="ms-content"
      >
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placholder="username">
            <el-button slot="prepend" icon="el-icon-user"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="password"
            v-model="ruleForm.password"
            @keyup.enter.native="submitForm('ruleForm')"
          >
            <el-button slot="prepend" icon="el-icon-view"></el-button>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </div>
        <p class="login-tips">Tips : 用户名和密码随便填。</p>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        username: "admin",
        password: "123456"
      },
      rules: {
        username: [
          { require: true, message: "请输入用户名密码", trigger: "blur" }
        ],
        password: [{ require: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  }
};
</script>

<style lang="less" scoped>
.login-warp {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("../../assets/login.jpg") no-repeat;
  background-size: 100% 100%;
  .ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    transform: translate(-50%, -50%);
    border-radius: 5%;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
  }
  .ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
  }
  .ms-content {
    padding: 30px;
  }
  .login-btn {
    text-align: center;
    button {
      width: 100%;
      height: 36px;
      margin-bottom: 10px;
    }
  }
  .login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
  }
}
</style>
