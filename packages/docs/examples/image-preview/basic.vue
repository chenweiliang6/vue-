<template>
  <div>
    <el-button type="primary" @click="preview">查看图片预览</el-button>
    <wil-image-preview v-model="showPreview"></wil-image-preview>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const showPreview = ref(false)

const preview=()=>{
  showPreview.value=true
}
</script>