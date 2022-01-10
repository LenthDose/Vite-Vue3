<template lang="">
    <div  class="container">
         <el-form ref="registerForm" :model="registerForm" label-width="120px">
        <el-form-item label="用户名" prop="user_nick">
      <el-input v-model="registerForm.user_nick"></el-input>
    </el-form-item>
    <el-form-item label="用户姓名" prop="user_pwd">
      <el-input v-model="registerForm.user_name"></el-input>
    </el-form-item>
     <el-form-item label="密码" prop="user_pwd">
      <el-input v-model="registerForm.user_pwd"></el-input>
    </el-form-item>
    <el-form-item label="联系方式" prop="user_contact">
      <el-input v-model="registerForm.user_contact"></el-input>
    </el-form-item>
    <el-form-item>
       <el-button type="primary" @click="registerUser">注册</el-button>
    <el-button type="primary" @click="resetForm">取消</el-button>
     
    </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { register } from '@/api/user'
import { showNotify } from '../api/notify'
export default {
    data(){
        return {
           registerForm: {
               user_nick: '',
               user_name: '',
               user_pwd: '',
               user_contact: ''
           }
        }
    },
    methods: {
        registerUser(){
            register(this.registerForm).then(res => {
                showNotify('注册成功')
                this.$router.push('/index')
            })
        },
        resetForm(){
            this.$refs['registerForm'].resetFields()
        }
    }
}
</script>
<style lang="css">
.container {
    margin: 10%;
}
.el-input {
    width: 30%;
}
</style>