<template lang="">
    <div class="container">
        <el-form ref="loginForm" :model="loginForm" label-width="120px">
            <el-form-item label="用户名" prop="username">
      <el-input v-model="loginForm.username" />
    </el-form-item>
     <el-form-item label="密码" prop="password">
      <el-input v-model="loginForm.password" />
    </el-form-item>
    <el-form-item>
        <el-radio v-model="identify" label="user">用户</el-radio>
        <el-radio v-model="identify" label="manager">管理员</el-radio>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="submitForm">登录</el-button>
    <el-button type="primary" @click="resetForm">取消</el-button>
     <el-button type="primary" @click="register">注册</el-button>
    </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { loginUser } from '@/api/user'
import { loginManager } from '@/api/manager'
import { showNotify } from '../api/notify'
export default {
   data(){
       return {
           loginForm: {
               username: '',
               password: ''
           },
           identify: ''
       }
   },
   methods: {
       submitForm(){
           console.log(this.identify)
           if(this.identify === "user"){
             loginUser(this.loginForm.username, this.loginForm.password).then(res => {
                localStorage.setItem('user_nick',res.data.user_nick)
                localStorage.setItem('user_name',res.data.user_name)
                localStorage.setItem('user_pwd',res.data.user_pwd)
                localStorage.setItem('user_contact',res.data.user_contact)
                localStorage.setItem('create_time',res.data.create_time)
                
                showNotify('登录成功');
                this.$router.push('/index')
           })
           }
          else{
              loginManager(this.loginForm.username, this.loginForm.password).then(res => {
                  showNotify('登录成功');
                  this.$router.push('/manager')
              })
          }
       },
       resetForm(){
           this.$refs['loginForm'].resetFields()
       },
       register(){
           this.$router.push('/register')
       }

   }
}
</script>
<style lang="css">
    .container{
        box-shadow:5px 5px 10px gray;
    }
</style>