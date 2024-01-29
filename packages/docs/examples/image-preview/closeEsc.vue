<template>
  <div>
    <el-button type="primary" @click="preview">查看Esc图片预览</el-button>
    <wil-image-preview v-model="showPreview" :closeOnPressEscape="true"></wil-image-preview>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const showPreview = ref(false)

const preview=()=>{
  showPreview.value=true
}
</script>