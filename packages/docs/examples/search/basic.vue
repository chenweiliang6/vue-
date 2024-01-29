<template>
  <div>
    <wil-search :settings="searchSettings" @handle-search="handleSearch"></wil-search>
  </div>
</template>

<script setup>
import { nextTick, onBeforeMount, onMounted, ref, watchEffect, reactive, onActivated } from 'vue'

const searchSettings = ref([
  { type: 'input', prop: 'name', label: '', placeholder: '请输入学生姓名', },
  { type: 'selectV2', prop: 'school', label: '', placeholder: '请输入院校',options:[]},
  { type: 'select', prop: 'grade', label: '', placeholder: '请选择年级', options: [] },
  { type: 'select', prop: 'jobIntention', label: '', placeholder: '请选择岗位意向', options: [] },
])

const handleSearch=(form)=>{

}
</script>