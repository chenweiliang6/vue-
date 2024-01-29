---
title: Search 搜索组件
lang: zh-CN
---

# Search 搜索组件

常用的搜索组件。

## 基础用法

:::demo 内置 `select`、`date-picker`、`input` 、`cascader` 、`autocomplete` 、`select-v2` 组件。

search/basic

:::

## 插槽渲染

如果内置的类型无法满足需求，可以使用插槽渲染自定义内容

无需制定**type**字段，插槽名为**prop**字段的值。

:::warning

配置项是必需的，因为这决定这个控件在整个表单中的位置

:::

:::demo

search/slotRender

:::

## 按钮的显示与隐藏

:::demo `show-button`属性控制查询和重置按钮的显示与隐藏

search/showButton

:::

## Search API 属性

| 属性名   | 说明   | 类型  | 可接收的值 | 默认值 |
| -------- | ------ | ----- | ---------- | ------ |
| v-model  | 绑定值 | object | —          | {}      |
| settings | 配置项 | array | —          | —      |
| show-button | 是否显示表单按钮 | boolean | true/false          | true      |

### Search 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| prop | settings配置项传入的prop |

