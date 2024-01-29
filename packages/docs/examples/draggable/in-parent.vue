<template>
  <div class="wil-container">
    <wil-draggable moveLimit="parent">
      <el-button type="primary">可拖拽</el-button>
    </wil-draggable>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.wil-container{
  width: 100%;
  height: 200px;
  border: 1px solid #409eff;
}
</style>