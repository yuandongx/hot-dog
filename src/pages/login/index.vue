<template>
    <div class="login">
        <el-form ref="loginForm" :model="loginForm" label-width="120px">
        <el-form-item label="Username" prop="username">
            <el-input v-model="loginForm.username" placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
            <el-input v-model="loginForm.password" placeholder="Password" show-password></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="login">Login</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
interface LoginForm {
    username: string
    password: string
}
const loginForm = ref<LoginForm>({
    username: '',
    password: ''
})
const login = () => {
    if (loginForm.value.username === 'admin' && loginForm.value.password === 'admin') {
        const router = useRouter()
        router.push('/')
    } else {
        ElMessage.error('Username or password is incorrect')
    }
}
</script>