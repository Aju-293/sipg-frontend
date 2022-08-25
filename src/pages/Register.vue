

<template>
  <div class="login-page">
    <div class="empty"></div>
    <div class="login-form-box">
      <div class="form-content">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-position="right" label-width="100px">
          <h1>Hi, Welcome to Registration!</h1>

          <template v-if="show == 1">
            <el-row>
              <el-col :span="12">
                <el-form-item label="UserName" prop="userName">
                  <el-input v-model="ruleForm.userName">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Password" prop="password">
                  <el-input v-model="ruleForm.password">
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="CoporateName" prop="coporateName">
                  <el-input v-model="ruleForm.coporateName">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Vat ID" prop="vatId">
                  <el-input v-model="ruleForm.vatId">
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="MobileNo" prop="mobileNo">
                  <el-input v-model="ruleForm.mobileNo">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="E-Mail" prop="eMail">
                  <el-input v-model="ruleForm.eMail">
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <div class="Forget-Registration">
              <div class="forget-pwd">
                <a>Forget your password?</a>
              </div>
              <div class="Registration"><a>Registration</a></div>
            </div>
            <el-row>
              <el-col :span="12">
                <el-button type="primary" @click="submitForm(ruleFormRef)" class="submit">Submit</el-button>
              </el-col>
              <el-col :span="12">
                <div ><a class="link-text-style">If your have an account, please login in ></a></div>
              </el-col>
            </el-row>
          </template>


        </el-form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import { Calendar, Search } from "@element-plus/icons-vue";
const ruleFormRef = ref()
const show = ref(1)
const ruleForm = reactive({
  userName: "",
  password: "",
  coporateName: "",
  vatId: "",
  mobileNo: "",
  eMail: ""
});
const checkUserName = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('Please input UserName'))
  }
  callback && callback();
};
const checkPassword = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('Please input Password'))
  }
  callback && callback();
};
const checkCoporateName = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('Please input CoporateName'))
  }
  callback && callback();
};
const checkVatId = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('Please input Vat ID'))
  }
  let regex =/^[0-9]*$/;
  if (value.length < 9 || !regex.test(value)) {
    return callback(new Error('不少于 9 位数字'))
  }
  callback && callback();
};
const checkMobileNo = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('Please input MobileNo'))
  } 
  let regex =/^[0-9]*$/; 
  if (value.length < 6 || !regex.test(value)) {
    return callback(new Error('不少于 6 位数字'))
  }
  callback && callback();
};
const checkEMail = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('Please input E-Mail'))
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
  coporateName: [
    { validator: checkCoporateName, trigger: 'blur' }
  ],
  vatId: [
    { validator: checkVatId, trigger: 'blur' }
  ],
  mobileNo: [
    { validator: checkMobileNo, trigger: 'blur' }
  ],
  eMail: [
    { validator: checkEMail, trigger: 'blur' }
  ],
})
const submitForm = (formEl) => {
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
  background: url("../assets/regester.jpeg") no-repeat;
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
.link-text-style {
  color: #103573;
  cursor: pointer;
}
</style>
