<template>
  <div>
    <wil-search :settings="searchSettings" @handle-search="handleSearch" v-model="state.formData">
      <template #address="item">
        <el-input  v-model="state.formData.address" :placeholder="item.placeholder"></el-input>
      </template>
    </wil-search>
  </div>
</template>

<script setup>
import { nextTick, onBeforeMount, onMounted, ref, watchEffect, reactive, onActivated } from 'vue'

const state = reactive({
  formData: {}
})

const searchSettings = ref([
  { type: 'input', prop: 'name', label: '', placeholder: '请输入学生姓名', },
  { type: 'selectV2', prop: 'school', label: '', placeholder: '请输入院校', options: [] },
  { type: 'select', prop: 'grade', label: '', placeholder: '请选择年级', options: [] },
  { type: 'select', prop: 'jobIntention', label: '', placeholder: '请选择岗位意向', options: [] },
  {prop:'address',placeholder: '请输入地址'}
])

const handleSearch = (form) => {

}
</script>