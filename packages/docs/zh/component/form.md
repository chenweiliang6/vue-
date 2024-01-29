---
title: Form 表单组件
lang: zh-CN
---

# Form 表单组件

通过配置项来生成表单。

## 基础用法

:::demo 内置 `select`、`date-picker`、`input` 、 `radio-group` 、`cascader` 、`autocomplete` 、`select-v2` 组件。

form/basic

:::

## 表单校验

:::demo 在 settings 的每一项里传入 rule，具体传入参考代码以及[ElementPlus](https://element-plus.gitee.io/zh-CN/component/form.html#%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C)。

form/validator

:::

## 插槽渲染

如果内置的类型无法满足需求，可以使用插槽渲染自定义内容

无需制定**type**字段，插槽名为**prop**字段的值。

:::warning

配置项是必需的，因为这决定这个控件在整个表单中的位置

:::

:::demo

form/slotRender

:::

## Form API 属性

| 属性名   | 说明   | 类型  | 可接收的值 | 默认值 |
| -------- | ------ | ----- | ---------- | ------ |
| v-model  | 绑定值 | object | —          | {}      |
| settings | 配置项 | array | —          | —      |
| interval | 表单左右的总间隔 | number/string | —          | 80      |

## Settings 配置项属性

| 属性名   | 说明   | 类型  | 可接收的值 | 默认值 |
| -------- | ------ | ----- | ---------- | ------ |
| type  | 表单组件类型 | string | —          | —      |
| prop | 字段属性名 | string | —          | —      |
| label | 标签文本 | string | —          |  —     |
| placeholder | 提示语 | string | —          |  —     |
| width | 组件所占据的宽度百分比，默认24 | string | —          |  24     |
| valueFormat | type为date所独有的属性 | string | —          |  —     |
| options | 配置项，例如select的options | array | —          |  []     |
| rule | 校验规则，参考el-form | array | —          |  []     |

### Form 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| prop | settings配置项传入的prop |