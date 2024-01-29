---
title: ImagePreview 图片预览
lang: zh-CN
---

# ImagePreview 图片预览

图片预览组件。

## 基础用法

:::demo

image-preview/basic

:::

## 图片展示方式

传入`size:fixed`，图片固定大小显示。传入`size:auto`,图片显示原有的尺寸。

:::demo

image-preview/size

:::

## 按下 Esc 关闭图片预览

可通过配置`closeOnPressEscape`来配置图片预览是否可以通过按下 Esc 关闭

:::demo

image-preview/closeEsc

:::

## ImagePreview API 属性

| 属性名             | 说明                             | 类型    | 可接收的值 | 默认值     |
| ------------------ | -------------------------------- | ------- | ---------- | ---------- |
| v-model            | 绑定值                           | boolean | true/false | false      |
| imgList            | 图片数据                         | array   | —          | [{url:''}] |
| size               | 图片展示方式                     | string  | —          | auto       |
| closeOnPressEscape | 是否可以通过按下 ESC 关闭 Dialog | boolean | —          | false      |

### ImagePreview 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |