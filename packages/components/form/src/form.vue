<template>
  <div class="base-form">
    <el-form :model="state.formData" label-width="120px" :rules="rules" ref="ruleFormRef" :inline="props.inline" label-position="top">
      <el-form-item :label="item.label" v-for="(item,index) in props.settings" :key="item.prop" :prop="item.prop"
        :style="{'flex':handleWidth(+item.width),'margin-left':handleMargin(+item.width,index)}">
        <!-- 选择器 -->
        <el-select filterable v-model="state.formData[item.prop]" :placeholder="item.placeholder" :multiple="item.multiple || false" v-if="item.type == 'select'"
          :clearable="item.isClearable == '1' ? false : true" @change="changeSelect(item)">
          <el-option v-for="ditem in item.options" :key="ditem.value" :label="ditem.label" :value="ditem.value">
          </el-option>
        </el-select>
        <!-- 时间选择器 -->
        <el-date-picker v-model="state.formData[item.prop]" :type="item.dateType" :value-format="item.valueFormat" @change="changeHandler" :placeholder="item.placeholder" clearable
          v-if="item.type == 'date'" :disabled-date="item.disabledDate">
        </el-date-picker>
        <!-- 输入框 -->
        <el-input v-model="state.formData[item.prop]" :placeholder="item.placeholder" clearable :type="item['type'] == 'textarea' ? 'textarea' : 'text'" @input="changeHandler"
          :disabled="item.disabled || false" v-if="item.type == 'input'||item.type == 'textarea'" :show-word-limit="item.showWordLimit?item.showWordLimit:false"
          :maxlength="item.type=='textarea'?item.maxlength:''"></el-input>
        <!-- 单选框 -->
        <el-radio-group v-model="state.formData[item.prop]" class="ml-4" v-if="item.type == 'radio'">
          <el-radio :label="v.value" size="large" v-for="v in item.options" :key="v.value">{{ v.label }}</el-radio>
        </el-radio-group>
        <!-- 级联选择器 -->
        <el-cascader v-model="state.formData[item.prop]" :options="item.options" :props="item.props || {}" v-if="item.type == 'cascader'" :placeholder="item.placeholder" />
        <!-- 自动补全输入框 -->
        <el-autocomplete v-model="state.formData[item.prop]" :placeholder="item.placeholder" :fetchSuggestions="item.fetchSuggestions" clearable v-if="item.type=='autocomplete'"
          @select="changeHandler"></el-autocomplete>
        <!-- 虚拟化选择器 -->
        <el-select-v2 v-if="item.type=='selectV2'" filterable v-model="state.formData[item.prop]" :placeholder="item.placeholder" :clearable="item.isClearable == '1' ? false : true"
          @change="changeHandler" :multiple="item.multiple?true:false" :no-data-text="item.noDataText||'无数据'" :options="item.options">
        </el-select-v2>
        <slot v-bind="item" v-if="$slots[item.prop]&&(!item.type||insideType.indexOf(item.type)<0)" :name="item.prop"></slot>
      </el-form-item>
      <!-- <template v-for="item in noTypeSettings">
        <slot v-bind="item" v-if="$slots[item.prop]" :name="item.prop"></slot>
      </template> -->
    </el-form>
  </div>
</template>
<script setup>
import { reactive, computed, ref } from "vue"
defineOptions({
  name: 'WilForm'
})
const props = defineProps({
  settings: { type: Array, default: [] },
  modelValue: { type: Object, default: () => { } },
  inline: { type: Boolean, default: false },
  interval: { type: [String, Number], default: 80 },//表单左右的总间隔
})
const state = reactive({
  formData: {}
})
const noTypeSettings = ref([]) //没有type的配置项
const haveTypeSettings = ref([])//有type的配置项
// const allTypeSettings = ref([])

const ruleFormRef = ref()
const insideType = ref(['select', 'date', 'input', 'radio', 'cascader', 'autocomplete', 'selectV2'])
const emits = defineEmits(['handleSearch', 'handleReset', 'update:modelValue', 'selectChange', 'openMap']);
const changeSelect = (item) => {
  emits('update:modelValue', state.formData)
  emits('selectChange', state.formData[item.prop])
}
const changeHandler = () => {
  emits('update:modelValue', state.formData)
}


const rules = computed(() => {
  let rules1 = {}
  props.settings.forEach(item => {
    rules1[item.prop] = item.rule
  })
  console.log(rules1, 'rules');
  return rules1
})
//提交表单验证的方法
const submitRef = async () => {
  if (!ruleFormRef.value) return
  return new Promise(resolve => {
    ruleFormRef.value.validate((valid, fields) => {
      if (valid) {
        resolve(valid)
      } else {
        resolve(valid)
      }
    })
  })
}
//过滤出有和没有type的数组
const filterType = () => {
  haveTypeSettings.value = props.settings.filter(item => item.type)
  noTypeSettings.value = props.settings.filter(item => !item.type)
}
filterType()
defineExpose({ submitRef })
state.formData = computed(() => {
  console.log(props.modelValue, "传进来的");
  return props.modelValue
})

const handleWidth = (width) => {
  if (width < 24) {
    let percent = width / 24 * 100
    let margin = props.interval * (width / 24)
    return `0 0 calc(${percent}% - ${margin}px)`
  } else {
    return `0 0 100%`
  }
}

const handleMargin = (width, index) => {
  let sum = 0
  for (let i = 0; i < index; i++) {
    // sum += Number(haveTypeSettings.value[index].width)
    sum+=Number(props.settings[index].width)
  }
  let yushu = sum % 24
  if (!yushu) {
    return '0'
  } else {
    let marginLeft = props.interval / (1 / width * 24 - 1)
    return marginLeft + 'px'
  }
}
</script>
<style lang="less" scoped>
.base-form {
  ::v-deep .el-form {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .el-form-item {
      &:first-child {
        margin-left: 0 !important;
      }
      .el-form-item__content {
        .el-select {
          width: 100%;
          // height: 50px;
          // --el-select-input-focus-border-color: #4fd1c5;
          .el-input {
          }
        }
        .el-input {
          // height: 50px;
          width: 100%;
          // --el-input-focus-border-color: #4fd1c5;
          &__wrapper {
            // border-radius: 15px;
            .el-input__inner {
              // font-size: 16px;
              // font-family: Source Han Sans, Source Han Sans;
              // font-weight: 350;
              // color: #526c9e;
              &::placeholder {
                // font-size: 16px;
                // font-family: Source Han Sans, Source Han Sans;
                // font-weight: 350;
                // color: #a1b5da;
              }
            }
          }
        }
        .el-select-v2 {
          width: 100%;
          // height: 50px;
          .el-select-v2__wrapper {
            // border-radius: 15px;
            .el-select-v2__selected-item {
              .el-select-v2__combobox-input {
                // font-size: 16px;
                // height: 42px;
                // line-height: 42px;
              }
            }
            // .el-select-v2__placeholder {
            //   font-size: 16px;
            //   color: rgba(91, 115, 160, 1);
            // }
            // .el-select-v2__placeholder.is-transparent {
            //   color: rgba(91, 115, 160, 0.3);
            // }
          }
        }
        .el-textarea {
          // --el-input-focus-border-color: #4fd1c5;
          .el-textarea__inner {
            border-radius: 15px;
            font-size: 16px;
            font-family: Source Han Sans, Source Han Sans;
            font-weight: 350;
            color: #526c9e;
            min-height: 190px !important;
            max-height: 202px !important;
            &::placeholder {
              font-size: 16px;
              font-family: Source Han Sans, Source Han Sans;
              font-weight: 350;
              color: #a1b5da;
            }
          }
        }
        .el-date-editor {
          width: 100%;
        }
        .el-cascader {
          width: 100%;
        }
        .el-autocomplete {
          width: 100%;
        }
      }
    }
  }
}
</style>