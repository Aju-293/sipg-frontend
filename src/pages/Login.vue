<script setup>
import { reactive, ref } from "vue";
import { Calendar, Search } from "@element-plus/icons-vue";
const formLabelAlign = reactive({
  name: "",
  region: "",
  type: ""
});
</script>

<template>
  <div class="login-page">
    <div class="form-content">
      <el-form
        label-position="left"
        label-width="100px"
        style="max-width: 460px"
      >
        <h1>Welcome to login!</h1>
        <el-form-item label="UserName">
          <el-input v-model="formLabelAlign.name">
            <!-- <template #prefix>
              <el-icon class="el-input__icon"><search /></el-icon>
            </template> -->
          </el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="formLabelAlign.region" />
        </el-form-item>
        <el-form-item label="Vcode">
          <el-input v-model="formLabelAlign.type" />
        </el-form-item>
        <div class="Forget-Registration">
          <div class="forget-pwd">
            <a>Forget your password?</a>
          </div>
          <div class="Registration"><a>Registration</a></div>
        </div>
        <div>
          <el-button type="primary" @click="submitForm(formRef)"
            class="submit">Submit</el-button
          >
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
</script>

<style scoped>
.login-page {
  width: 1305px;
  margin: 0 auto;
  background: url("../assets/login.jpeg") no-repeat;
  text-align: right;
  background-size: 100%;
}
.login-page .form-content {
  margin: 100px 20px;
  padding: 30px 45px;
  background: white;
  border-radius: 6px;
  display: inline-block;
}
.login-page h1 {
  text-align: center;
  color: #103573;
  font-size: 28px;
  padding-bottom: 10px;
}
.login-page form .submit{
  width: 100%;
}
.login-page .Forget-Registration {
  display: flex;
}
.login-page .Forget-Registration  div{
  flex: 1;
  color: #3a3a3a;
  font-size: 9px;
  padding-bottom: 15px;
  padding-top: 20px;
}
.login-page .Forget-Registration  div a{
  color: #103573;
  display: inline-block;
  width: 100%;
  cursor: pointer;
}
.login-page .Forget-Registration  div.forget-pwd {
  text-align: left;
}
.login-page .Forget-Registration  div.Registration {
  text-align: right;
}
</style>
