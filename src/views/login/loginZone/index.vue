<template>
  <div class="login-zone">
    <el-col :span="24">
      <div class="login-zone-title mt20 mb20 textAlignCenter">
        <!--<em class="el-icon-user-solid"></em>-->
        用户登录
      </div>
    </el-col>

    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="login-zone-ruleForm"
    >
      <el-col :span="24" class="pt15 pb15">
        <el-form-item class="mb0" prop="loginName">
          <el-input
            v-model="ruleForm.username"
            @focus="inputLoginName"
            @blur="blurLoginName"
            placeholder="用户名"
          >
            <i slot="prefix" class="el-input__icon iconfont iconyonghuming"></i>
          </el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24" class="pt15 pb15 mb10">
        <!--:class="{ iptActive: loginPsdIpt }"-->
        <el-form-item class="mb0" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            @focus="inputLoginPsw"
            @blur="blurLoginPsw"
            placeholder="密码"
          >
            <i slot="prefix" class="el-input__icon iconfont iconmima"></i>
          </el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24" class="mb40">
        <el-checkbox v-model="rememberPassWord">记住密码</el-checkbox>
      </el-col>
      <el-col :span="24">
        <el-form-item
          class="login-zone-ruleForm-btns textAlignCenter"
          label-width="0"
        >
          <!-- <el-button class="register" type="text" @click="userRegister()">
            用户注册
          </el-button> -->
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            class="width100"
            style="height:50px"
          >
            登录
          </el-button>
          <!-- <el-button @click="resetForm('ruleForm')">
            重置
          </el-button> -->
        </el-form-item>
      </el-col>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "loginZone",
  data() {
    var checkName = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("登录名不能为空"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      loginNameIpt: false,
      loginPsdIpt: false,
      rememberPassWord: false,
      ruleForm: {
        password: "",
        username: ""
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: checkName, trigger: "blur" }]
      }
    };
  },
  methods: {
    inputLoginName() {
      this.loginNameIpt = true;
    },
    inputLoginPsw() {
      this.loginPsdIpt = true;
    },
    blurLoginName() {
      this.loginNameIpt = false;
    },
    blurLoginPsw() {
      this.loginPsdIpt = false;
    },
    userRegister() {
      // this.$router.push({ name: "informationsPage/signUp" });
    },
    submitForm(formName) {
      let that = this;
      that.$refs[formName].validate(valid => {
        if (valid) {
          that.$emit("loginMethod", that.ruleForm);
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted() {
    sessionStorage.clear();
  }
};
</script>
