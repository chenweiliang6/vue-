---
title: Draggable
lang: zh-CN
---

# Draggable 可拖拽

可拖拽组件。

## 基础用法

:::demo 传入`moveLimit`可实现全屏拖拽

draggable/basic

:::

## 限制拖拽边界

:::demo 传入`moveLimit`为`parent`，那么只能在父组件内拖拽

draggable/in-parent

:::

## 点击事件

:::demo 如果在可拖拽内使用需要点击的元素，例如`el-button`的 click 事件，那么请不要使用 click，使用可拖拽组件自带的`draggableClick`,且只有可拖拽组件静止状态才能触发，拖动状态不可触发！

draggable/click-button

:::

## Draggable API 属性

| 属性名    | 说明         | 类型   | 可接收的值             | 默认值 |
| --------- | ------------ | ------ | ---------------------- | ------ |
| moveLimit | 可拖拽的范围 | string | full / parent | full      |

### Draggable 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
