<template>
  <wil-form :settings="formSettings" v-model="state.formData"
   :interval="29">
   </wil-form>
</template>

<script setup>
import { reactive, ref, watchEffect } from 'vue'
import {cascaderOptions} from './data.js'

const state = reactive({
  formData: {}
})

const schoolList = [
  {label:'台州职业技术学院',value:'台州职业技术学院'},
  {label:'台州科技职业学院',value:'台州科技职业学院'},
  {label:'台州学院',value:'台州学院'},
]

//自动补全输入框查询学校
const fetchSuggestions = (queryString, callback) => {
  let querySingleArr = queryString.split("")
  let searchArr = schoolList.filter(item => {
    return querySingleArr.every(v => item.value.indexOf(v) > -1)
  })
  callback(searchArr)
}

const formSettings = ref([
  { type: 'input', prop: 'userName', label: '账号', placeholder: '请输入账号', width: 12, },
  { type: 'date', prop: 'awardTime', label: '获奖时间', placeholder: '请选择', width: 12, valueFormat: 'YYYY-MM-DD HH:mm:ss', dateType: 'datetime',  },
  { type: 'selectV2', prop: 'stayIntention', label: '留台意向', placeholder: '请选择留台意向', width: 12, options: [{ label: '愿意留台', value: '愿意留台' }, { label: '不愿留台', value: '不愿留台' }] },
  { type: 'input', prop: 'major', label: '专业', placeholder: '请输入专业', width: 12, },
  { type: 'select', prop: 'grade', label: '年级', placeholder: '请选择年级', width: 12, },
  { type: 'cascader', prop: 'jobIntention', label: '岗位意向', placeholder: '请选择岗位意向', width: 12, options:cascaderOptions},
  { type: 'autocomplete', prop: 'school', label: '学校', placeholder: '请输入学校', width: 12,fetchSuggestions:fetchSuggestions },
  { type: 'input', prop: 'careerPlan', label: '职业规划', placeholder: '请输入职业规划', width: 12, },
  { type: 'radio', prop: 'gender', label: '性别', placeholder: '请选择性别', width: 12, options: [{ value: '男', label: '男' }, { value: '女', label: '女' }] },
  { type: 'input', prop: 'email', label: '邮箱', placeholder: '请输入邮箱', width: 12, },
])
</script>