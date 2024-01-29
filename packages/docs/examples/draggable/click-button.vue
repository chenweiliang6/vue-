<template>
  <div class="wil-container">
    <wil-draggable moveLimit="parent" @draggableClick="draggableClick">
      <el-button type="success">可拖拽</el-button>
    </wil-draggable>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
const draggableClick = () => {
  ElMessage.success('静止状态点击')
}
</script>

<style lang="less" scoped>
.wil-container {
  width: 100%;
  height: 200px;
  border: 1px solid #409eff;
}
</style>