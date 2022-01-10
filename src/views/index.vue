<template lang="">
    <div>
         <el-form ref="updateFrom" :model="updateFrom" label-width="120px">
             <el-form-item label="用户账号">
                 {{ nick }}
             </el-form-item>
    <el-form-item label="用户姓名" prop="user_name">
      <el-input v-model="updateFrom.user_name"></el-input>
    </el-form-item>
    <el-form-item label="联系电话" prop="user_contact">
      <el-input v-model="updateFrom.user_contact"></el-input>
    </el-form-item>
     <el-form-item label="创建时间">
                 {{ create_time}}
    </el-form-item>
    <el-form-item>
       <el-button type="primary" @click="updateUser">修改</el-button>
    <el-button type="primary" @click="deleteUser">注销</el-button>
     
    </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { updateDetails, deleteByNick } from '@/api/user'
import { showNotify } from '../api/notify'
export default {
    data(){
        return {
            nick: localStorage.getItem('user_nick'),
            create_time:  localStorage.getItem('create_time'),
            updateFrom: {
                user_name: localStorage.getItem('user_name'),
                user_contact: localStorage.getItem('user_contact'),
            }
        }
    },
    methods: {
        updateUser(){
            updateDetails(this.nick,this.updateFrom.user_name, this.updateFrom.user_contact).then(res => {
                showNotify('修改成功')
                this.$refs['userForm'].resetFields()
            })
        },
        deleteUser(){
            deleteByNick(this.nick).then(() => {
                showNotify('注销成功')
                this.$router.push('/login')
            })
        }
    }
}
</script>
<style lang="">
    
</style>