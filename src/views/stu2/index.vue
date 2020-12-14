<template>
    <div>
        <template>
    <div>
         <el-container>
        <el-aside width="200px">
             <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
    
      router
      >
     
       
       
      <el-menu-item index="/stu2/sun1">
        <i class="el-icon-menu"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
          <el-menu-item index="/stu2/sun2">
        <i class="el-icon-menu"></i>
        <span slot="title">发票管理</span>
      </el-menu-item>
          <el-menu-item index="/stu2/sun3">
        <i class="el-icon-menu"></i>
        <span slot="title">售后服务</span>
      </el-menu-item>
      
    </el-menu>

        </el-aside>
        <el-main>
            
            <router-view>

            </router-view>
            
            </el-main>
      </el-container>
    </div>
</template>
    </div>
</template>