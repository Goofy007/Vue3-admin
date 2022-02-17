<template>
  <div class="login-container">
    <el-form class="login-form">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <!-- username -->
      <el-form-item>
        <span class="svg-container">
          <el-icon>
            <avatar />
          </el-icon>
        </span>
        <el-input placeholder="username" name="username" type="text"></el-input>
      </el-form-item>
      <!--password-->
      <el-form-item>
        <span class="svg-container">
          <el-icon>
            <lock />
          </el-icon>
        </span>
        <el-input placeholder="password" name="password" type="text"></el-input>
        <span class="show-pwd">
          <el-icon>
            <eye />
          </el-icon>
        </span>
      </el-form-item>

      <el-button type="primary" style="width: 100%; margin-bottom: 30px"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script setup>
import { Avatar, Lock, View as eye } from '@element-plus/icons'
import {} from 'vue'
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
}

.login-form {
  position: relative;
  width: 520px;
  max-width: 100%;
  paddding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;

  ::v-deep .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }

  ::v-deep .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      border-radius: 0px;
      padding: 12px 5px;
      color: $light_gray;
      caret-color: $cursor;
    }
  }
}
</style>
