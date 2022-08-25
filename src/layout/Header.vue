
<template>
  <div class="page-header-nav">
    <header>
      <div class="logo">
        <a><img src="../assets/sipg-logo.png" /></a>
        
      </div>
      <div>test</div>
    </header>
    <nav>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">
          <span>Home Page</span>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>About us</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">Bayport SIPG</el-menu-item>
            <el-menu-item index="2-2">SIPG</el-menu-item>
            <el-menu-item index="2-3">Management</el-menu-item>
            <el-menu-item index="2-4">Bayport Briefing</el-menu-item>
            <el-menu-item index="2-5">Bayport Facilities</el-menu-item>
            <el-menu-item index="2-6">Writ of Authorization</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="3">
          <span>Customer Service</span>
        </el-menu-item>
        <el-menu-item index="4">
          <span>Careers</span>
        </el-menu-item>
        <el-menu-item index="5">
          <span>Cantact Information</span>
        </el-menu-item>
        <el-menu-item index="6">
          <span>English</span>
        </el-menu-item>
        <el-menu-item index="7">
          <span>Login</span>
        </el-menu-item>
      </el-menu>
    </nav>
  </div>
</template>
<script setup>
import { ref, h, defineProps, onMounted } from "vue";
const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>
<style lang="less" scoped>
@import url("../styles/header.less");
</style>