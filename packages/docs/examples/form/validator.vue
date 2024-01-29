<template>
  <wil-form :settings="formSettings" v-model="state.formData" :interval="29" ref="wilFormRef">
  </wil-form>
  <div class="submit">
    <el-button type="primary" @click="handleSubmit">保存</el-button>
    <el-button type="default">取消</el-button>
  </div>
</template>

<script setup>
import { reactive, ref, watchEffect } from 'vue'
import { cascaderOptions } from './data.js'
import { ElMessage } from 'element-plus'

const state = reactive({
  formData: {}
})

const wilFormRef = ref(null)

const schoolList = [
  { label: '台州职业技术学院', value: '台州职业技术学院' },
  { label: '台州科技职业学院', value: '台州科技职业学院' },
  { label: '台州学院', value: '台州学院' },
]


//校验手机号
const validatePhoneNumber = (rule, value, callback) => {
  // 校验手机号方法
  if (!value) {
    callback(new Error("手机号不能为空"))
  } else {
    const reg = /^1[3-9][0-9]\d{8}$/; // 手机号正则表达式
    if (!reg.test(value)) {
      callback(new Error('请输入正确的手机号'));
    } else {
      callback();
    }
  }
}

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
  { type: 'date', prop: 'awardTime', label: '获奖时间', placeholder: '请选择', width: 12, valueFormat: 'YYYY-MM-DD HH:mm:ss', dateType: 'datetime', rule: [{ required: true, message: '请选择获奖时间', trigger: 'change' }] },
  { type: 'selectV2', prop: 'stayIntention', label: '留台意向', placeholder: '请选择留台意向', width: 12, options: [{ label: '愿意留台', value: '愿意留台' }, { label: '不愿留台', value: '不愿留台' }] },
  { type: 'input', prop: 'phone', label: '手机号码', placeholder: '请输入手机号码', width: 12, rule: [{ required: true, trigger: 'blur', validator: validatePhoneNumber }] },
  { type: 'select', prop: 'grade', label: '年级', placeholder: '请选择年级', width: 12, },
  { type: 'cascader', prop: 'jobIntention', label: '岗位意向', placeholder: '请选择岗位意向', width: 12, options: cascaderOptions },
  { type: 'autocomplete', prop: 'school', label: '学校', placeholder: '请输入学校', width: 12, fetchSuggestions: fetchSuggestions },
  { type: 'input', prop: 'careerPlan', label: '职业规划', placeholder: '请输入职业规划', width: 12, },
  { type: 'radio', prop: 'gender', label: '性别', placeholder: '请选择性别', width: 12, options: [{ value: '男', label: '男' }, { value: '女', label: '女' }] },
  { type: 'input', prop: 'email', label: '邮箱', placeholder: '请输入邮箱', width: 12, },
])

//提交表单
const handleSubmit = () => {
  wilFormRef.value.submitRef().then(async valid => {
    if (valid) {
      ElMessage.success('提交成功')
      state.formData = {}
    }
  })
}

</script>