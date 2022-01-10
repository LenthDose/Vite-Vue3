<template lang="">
    <div>
         <el-form ref="wrapper" :inline="true" :model="wrapper">
        <el-form-item label="用户姓名">
          <el-input v-model="wrapper.user_name" />
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="wrapper.user_contact" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="check">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onAdd">添加</el-button>
        </el-form-item>
      </el-form>
      <hr>
      <div>
      <el-table
        :data="tableData"
        border
        style="width: 85%"
      >
        <el-table-column
          prop="user_name"
          label="用户姓名"
        />
        <el-table-column
          prop="user_contact"
          label="联系电话"
        />
         <el-table-column
          prop="create_time"
          label="注册日期"
        />
        <el-table-column
          label="操作"
        >
          <template #default="scope">
              <el-button
              size="mini"
              type="primary"
              @click="handleEdite(scope.row)"
            >修改
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row)"
            >删除
            </el-button>
            
          </template>
        </el-table-column>
      </el-table>
    </div>

<el-dialog :title="dialogTitle" width="50%" :visible.sync="dialogFormVisible">
      <el-form ref="userForm" :model="userForm">
         <el-form-item label="用户名" prop="user_nick" v-if="dialogTitle === '添加'">
      <el-input v-model="userForm.user_nick"></el-input>
    </el-form-item>
    <el-form-item label="用户姓名" prop="user_pwd">
      <el-input v-model="userForm.user_name"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="user_pwd" v-if="dialogTitle === '添加'">
      <el-input v-model="userForm.user_pwd"></el-input>
    </el-form-item>
    <el-form-item label="联系方式" prop="user_contact">
      <el-input v-model="userForm.user_contact"></el-input>
    </el-form-item>
    <el-form-item>
       <el-button type="primary" @click="add" v-if="dialogTitle === '添加'">添加</el-button>
    <el-button type="primary" @click="submit" v-if="dialogTitle === '编辑'">确定</el-button>
    </el-form-item>
      </el-form>
    </el-dialog>
    </div>
</template>
<script>
import { checkUser, register,getUserList } from '@/api/user'
import { showNotify } from '../api/notify'
export default {
    data(){
        return {
            wrapper:{},
            tableData: [],
            dialogTitle: '',
            dialogFormVisible: false,
            userForm:{},
        }
    },
    mounted(){
      getUserList().then(res => {
                this.tableData = res.data
            })
    },
    methods: {
        check(){
            checkUser(this.wrapper.user_name, this.wrapper.user_contact).then(res => {
                this.tableData = res.data
                showNotify('查询成功')
            })
        },
        onAdd(){
            this.dialogTitle = '添加'
            this.dialogFormVisible = true
        },
        handleEdite(val){
            this.dialogTitle = '编辑'
            this.dialogFormVisible = true
            this.userForm = val
        },
        add(){
            register(this.userForm).then(() => {
                showNotify('添加成功')
            })
            this.dialogFormVisible = false
        },
        submit(){
            updateDetails(this.userForm.user_nick,this.userForm.user_name, this.userForm.user_contact).then(() => {
                showNotify('修改成功')
            })
        },
        handleDelete(val){
            deleteByNick(val.user_name).then( () => {
                showNotify('删除成功')
            })
        }
    }
}
</script>
<style lang="">
    
</style>