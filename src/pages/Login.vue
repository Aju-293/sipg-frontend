

<template>
  <div class="login-page">
    <div class="empty"></div>
    <div class="login-form-box">
      <div class="form-content">
        <el-form 
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-position="left" label-width="100px" style="max-width: 460px">
          <h1>Welcome to login!</h1>
          <el-form-item label="Username" prop="userName">
            <el-input v-model="ruleForm.userName">
              <!-- <template #prefix>
              <el-icon class="el-input__icon"><search /></el-icon>
            </template> -->
            </el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input v-model="ruleForm.password" />
          </el-form-item>
          <el-form-item label="Vcode" prop="vcode">
            <el-input v-model="ruleForm.vcode" />
          </el-form-item>
          <div class="Forget-Registration">
            <div class="forget-pwd">
              <a>Forget your password?</a>
            </div>
            <div class="Registration"><a>Registration</a></div>
          </div>
          <div>
            <el-button type="primary" @click="submitForm(ruleFormRef)" class="submit">Submit</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import { Calendar, Search } from "@element-plus/icons-vue";
const ruleFormRef = ref()
const ruleForm = reactive({
  userName: "",
  password: "",
  vcode: ""
});
const checkUserName= (rule, value, callback) =>{
  if (!value) {
    return callback(new Error('Please input UserName'))
  }
  callback && callback();
};
const checkPassword= (rule, value, callback) =>{
  if (!value) {
    return callback(new Error('Please input Password'))
  }
  callback && callback();
};
const checkVcode= (rule, value, callback) =>{
  if (!value) {
    return callback(new Error('Please input Vcode'))
  }
  callback && callback();
};
const rules = reactive({
  userName: [
    { message: 'Please input UserName', trigger: 'blur' },
    { validator: checkUserName, trigger: 'blur' }
  ],
  password: [
    { validator: checkPassword, trigger: 'blur' }
  ],
  vcode: [
    {validator: checkVcode, trigger: 'blur'}
  ]
})
const submitForm =(formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>


<style scoped>
.login-page {
  margin: 0 auto;
}

.login-page .empty {
  padding: 15px;
}

.login-page .login-form-box {
  margin: 0 auto 50px;
  width: 1305px;
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
  padding-bottom: 30px;
}
:deep(form .el-form-item__content .el-input input.el-input__inner) {
  width: 150px;
}
.login-page form .submit {
  width: 100%;
}

.login-page .Forget-Registration {
  display: flex;
}

.login-page .Forget-Registration div {
  flex: 1;
  color: #3a3a3a;
  font-size: 9px;
  padding-bottom: 15px;
  padding-top: 20px;
}

.login-page .Forget-Registration div a {
  color: #103573;
  display: inline-block;
  width: 100%;
  cursor: pointer;
}

.login-page .Forget-Registration div.forget-pwd {
  text-align: left;
}

.login-page .Forget-Registration div.Registration {
  text-align: right;
}
</style>
