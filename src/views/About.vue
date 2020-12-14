<template>
  <div>
    
    <div  class="about">
      <el-input placeholder="请输入内容" v-model="passname" clearable> </el-input>
      <p></p>
      <el-input
        placeholder="请输入密码"
        v-model="password"
        show-password
      ></el-input>
      <p></p>
      <el-button type="primary" @click="login">立即登录</el-button>
    </div>
  </div>
</template>
<script>
export default {
  
  data() {
    return {
      passname:'',
      password:''
    }
  },
  methods: {
    login(){
        this.$axios.post("http://ceshi5.dishait.cn/admin/login", {
          username: this.passname,
          password: this.password,
        })
        
        .then((res) => {
           console.log(res);
          localStorage.setItem("token",res.data.data.token)
          this.$router.push({ path: "/stu1/sun1" });
          alert("登陆成功");
         
        }).catch(res=>{
          alert('账号或密码错误请重试')
        })
    }
  },
}
</script>
<style lang="scss" scope>
  .about{
    width: 40%;
    height: 300px;
    margin: 100px auto;
    .el-button--primary{
      width: 100%;

    }
  }
</style>
