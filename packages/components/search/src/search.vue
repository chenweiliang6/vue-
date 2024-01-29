<template>
  <div class="form-container">
    <el-form :model="state.formData" :inline="true">
      <!-- 输入框 -->
      <el-form-item :label="item.label" v-for="(item, index) in props.settings" :key="index">
        <el-input v-model="state.formData[item.prop]" :placeholder="item.placeholder" clearable @input="changeForm" v-if="item.type=='input'"></el-input>
        <!-- 自动补全输入框 -->
        <el-autocomplete v-model="state.formData[item.prop]" :placeholder="item.placeholder" clearable @select="changeForm" :fetch-suggestions="item.fetchSuggestions"
          v-if="item.type=='autocomplete'"></el-autocomplete>
        <!-- 虚拟化选择器 -->
        <el-select-v2 filterable v-model="state.formData[item.prop]" :placeholder="item.placeholder" :clearable="item.isClearable == '1' ? false : true" @change="changeForm"
          :multiple="item.multiple?true:false" :no-data-text="item.noDataText||'无数据'" :options="item.options" v-if="item.type=='selectV2'">
        </el-select-v2>
        <!-- 选择器 -->
        <el-select filterable v-model="state.formData[item.prop]" :placeholder="item.placeholder" :clearable="item.isClearable == '1' ? false : true" @change="changeForm"
          :multiple="item.multiple?true:false" :no-data-text="item.noDataText||'无数据'" v-if="item.type=='select'">
          <el-option v-for="ditem in item.options" :key="ditem.value" :label="ditem.label" :value="ditem.value">
          </el-option>
        </el-select>
        <!-- 级联选择器 -->
        <el-cascader v-model="state.formData[item.prop]" :options="item.options" @change="changeForm" v-if="item.type=='cascader'"/>
        <!-- 时间选择器 -->
        <el-date-picker v-model="state.formData[item.prop]" :type="item.dateType" :start-placeholder="item.startPlaceholder" :end-placeholder="item.endPlaceholder"
          :placeholder="item.placeholder" clearable value-format="YYYY-MM-DD HH:mm:ss" @change="changeForm" v-if="item.type=='date'">
        </el-date-picker>
        <slot v-bind="item" v-if="$slots[item.prop]&&(!item.type||insideType.indexOf(item.type)<0)" :name="item.prop"></slot>
      </el-form-item>
      <el-form-item v-if="props.showButton">
        <el-button color="#4FD1C5" @click="handleSearch" class="search-button">查询</el-button>
        <el-button @click="handleReset" class="reset-button">重置</el-button>
        <slot name="button"></slot>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { computed, onBeforeUnmount, onMounted, watchEffect,reactive,ref } from "vue"
import { Refresh, Search } from '@element-plus/icons-vue'
defineOptions({
  name: 'WilSearch'
})
const props = defineProps({
  settings: {
    type: Array, default: () => []
  },
  showButton: { type: Boolean, default: true },
  modelValue: { type: Object, default: {} }
})
const state = reactive({
  formData: {},
})
const insideType = ref(['select', 'date', 'input', 'cascader', 'autocomplete', 'selectV2'])
const emits = defineEmits(['handleSearch', 'update:modelValue'])
const handleSearch = () => {
  // state.formData.pageNum = 1
  emits('handleSearch', { ...state.formData })
}
const handleReset = () => {
  state.formData = {}
  // state.formData.pageNum = 1
  emits('handleSearch', { ...state.formData })
  changeForm()
  state.formData = {}
}


// const inputArr = computed(() => {
//   return props.settings.filter(item => item.type == 'input')
// })
// const selectArr = computed(() => {
//   return props.settings.filter(item => item.type == 'select')
// })
// const cascaderArr = computed(() => {
//   return props.settings.filter(item => item.type == 'cascader')
// })
// const dateArr = computed(() => {
//   return props.settings.filter(item => item.type == 'date')
// })
// const autocompleteArr = computed(() => {
//   return props.settings.filter(item => item.type == 'autocomplete')
// })
// const selectV2Arr = computed(() => {
//   return props.settings.filter(item => item.type == 'selectV2')
// })
// 改变表单值触发
const changeForm = (value) => {
  emits('update:modelValue', { ...state.formData })
}
watchEffect(() => {
  state.formData = { ...props.modelValue }
})

</script>
<style lang="less" scoped>
.form-container {
  ::v-deep .el-form {
    .el-form-item {
      // margin-right: 18px;
      .el-form-item__content {
        .el-input {
          // height: 50px;
          // width: 318px;
          .el-input__wrapper {
            // border-radius: 15px;
            // .el-input__inner {
            //   font-size: 16px;
            //   color: rgba(91, 115, 160, 1);
            //   &::placeholder {
            //     color: rgba(91, 115, 160, 1);
            //     font-size: 16px;
            //   }
            // }
          }
        }
        .el-select-v2 {
          .el-select-v2__wrapper {
            // height: 50px;
            // width: 318px;
            // border-radius: 15px;
            // .el-select-v2__selected-item {
            //   .el-select-v2__combobox-input {
            //     font-size: 16px;
            //     height: 42px;
            //     line-height: 42px;
            //   }
            // }
            .el-select-v2__placeholder {
              // font-size: 16px;
              // color: rgba(91, 115, 160, 1);
            }
            .el-select-v2__placeholder.is-transparent {
              color: rgba(168, 171, 178, 0.5);
            }
          }
        }
        .search-button {
          // width: 80px;
          // height: 46px;
          // border-radius: 15px;
          // font-size: 16px;
          font-family: Source Han Sans, Source Han Sans;
          color: #ffffff;
        }
        .reset-button {
          // width: 80px;
          // height: 46px;
          // border-radius: 15px;
          // font-size: 16px;
          font-family: Source Han Sans, Source Han Sans;
          color: #666666;
        }
      }
    }
  }
}
</style>