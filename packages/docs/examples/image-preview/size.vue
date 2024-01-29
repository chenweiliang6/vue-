<template>
  <div>
    <el-button type="primary" @click="previewFixed">查看fixed图片</el-button>
    <el-button type="danger" @click="previewAuto">查看auto图片</el-button>
    <wil-image-preview v-model="showPreview" :size="size"></wil-image-preview>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const showPreview = ref(false)
const size = ref('auto')

const previewFixed=()=>{
  showPreview.value=true
  size.value='fixed'
}

const previewAuto=()=>{
  showPreview.value=true
  size.value='auto'
}
</script>