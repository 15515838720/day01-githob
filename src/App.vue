<template>
  <div id="app">
    <el-container>
      <el-header class="header" v-show="show">
        <div>UNI-ADMIN</div>
        <div>
          <el-menu
           
            class="el-menu-demo"
            mode="horizontal"
         
            background-color="#ccc"
            router
          >
            <el-menu-item index="/stu1">首页</el-menu-item>
            <el-menu-item index="/stu2">商品</el-menu-item>
            <el-menu-item index="/stu3">订单</el-menu-item>
            <el-menu-item index="/stu4">会员</el-menu-item>
            <el-menu-item index="/stu5">设置</el-menu-item>
            <el-menu-item index="/stu6" @click="td"> admin </el-menu-item>
          </el-menu>
        </div>
      </el-header>
     
    </el-container>
    <router-view />
  </div>
</template>

<style lang="scss" scope>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ccc;
}
</style>
<script>
export default {
  data() {
    return {
      show:false
    }
  },
    watch: {
            $route: {
                handler(newval, oldval) {
                    if (newval.path == "/") {
                        this.show = false;
                    } else {
                        this.show = true;
                    }
                },
            },
        },
         methods: {
            td() {
                alert("退出登录成功")
                localStorage.removeItem('token');
                this.$router.push({path:'/'})
            },
        },
}
</script>
