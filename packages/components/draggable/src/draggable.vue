<template>
  <div ref="draggable" :style="style1" style="position: fixed" class="base-draggable" @mousedown="mousedown" @mouseup="mouseup">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, watchEffect, watch, onMounted, onBeforeUnmount } from 'vue'
import { useDraggable, useResizeObserver } from '@vueuse/core'


defineOptions({
  name: 'WilDraggable'
})
const props = defineProps({
  // initialValue: { type: Object, default: { right: 0, top: 0 } },
  moveLimit: { type: String, default: 'full' },//可以全屏移动，或者在父组件内移动
})

const draggable = ref(null)
const style1 = ref({ right: 0, top: '600px' })
const initialValue_copy = ref({ x: 0, y: 0 })
const observer = ref(null)

const obj = ref({})

const parentWidth = ref(0)
const parentHeight = ref(0)
const parentLeft = ref(0)
const parentTop = ref(0)

const selfWidth = ref(0)
const selfHeight = ref(0)

const emits = defineEmits(['move', 'draggableClick'])

const mousedownX = ref(0)
const mousedownY = ref(0)

//鼠标按下的事件
const mousedown = () => {
  mousedownX.value = obj.value.x
  mousedownY.value = obj.value.y
}
//鼠标松开的事件
const mouseup = () => {
  if (mousedownX.value == obj.value.x && mousedownY.value == obj.value.y) {
    emits('draggableClick')
  }
}


//获取父元素的宽高，元素自身的宽高
const getWH = () => {
  parentWidth.value = draggable.value.parentElement.offsetWidth
  parentHeight.value = draggable.value.parentElement.offsetHeight
  parentLeft.value = draggable.value.parentElement.getBoundingClientRect().left
  parentTop.value = draggable.value.parentElement.getBoundingClientRect().top

  selfWidth.value = draggable.value.offsetWidth
  selfHeight.value = draggable.value.offsetHeight
  // console.log(parentWidth.value, "halou");
}

//屏幕尺寸变化可拖拽窗口重新赋值
const reLoad = () => {
  let parentWidth1 = parentWidth.value
  let parentHeight1 = parentHeight.value
  let parentLeft1 = parentLeft.value
  let parentTop1 = parentTop.value
  getWH()
  if (style1.value.top.split('px')[0] > parentHeight.value + parentTop.value - selfHeight.value) { //只能移动到父元素的底部上，无法移出底部
    style1.value.top = parentHeight.value + parentTop.value - selfHeight.value + 'px'
    emits('move', 'bottom')
  }
  if (style1.value.top.split('px')[0] < parentTop.value) { //只能移动到父元素的顶部，无法移出顶部
    style1.value.top = parentTop.value + 'px'
    emits('move', 'top')
  }
  if (style1.value.left.split('px')[0] > parentWidth.value + parentLeft.value - selfWidth.value) { //只能移动到父元素的最右侧，无法移出最右侧
    style1.value.left = parentWidth.value + parentLeft.value - selfWidth.value + 'px'
    emits('move', 'right')
  }
  if (style1.value.left.split('px')[0] < parentLeft.value) { //只能移动到父元素的最左侧，无法移出最左侧
    style1.value.left = parentLeft.value + 'px'
    emits('move', 'left')
  }
  if (style1.value.top.split('px')[0] == parentHeight1 + parentTop1 - selfHeight.value) {  //在屏幕尺寸变化的时候，原来吸附在右侧，那么屏幕尺寸变了也吸附在右侧
    style1.value.top = parentHeight.value + parentTop.value - selfHeight.value + 'px'
    emits('move', 'bottom')
  } else if (style1.value.top.split('px')[0] == parentTop1) { //在屏幕尺寸变化的时候，原来吸附在左侧，那么屏幕尺寸变了也吸附在左侧
    style1.value.top = parentTop.value + 'px'
    emits('move', 'top')
  }

  // console.log(style1.value.left.split('px')[0],parentWidth1 + parentLeft1 - selfWidth.value,"值");

  if (style1.value.left.split('px')[0] == parentWidth1 + parentLeft1 - selfWidth.value) { //在屏幕尺寸变化的时候，原来吸附在顶部，那么屏幕尺寸变了也吸附在顶部
    style1.value.left = parentWidth.value + parentLeft.value - selfWidth.value + 'px'
    emits('move', 'right')
  } else if (style1.value.left.split('px')[0] == parentLeft1) { //在屏幕尺寸变化的时候，原来吸附在底部，那么屏幕尺寸变了也吸附在底部
    style1.value.left = parentLeft.value + 'px'
    emits('move', 'left')
  }
}

const handleResize = () => {
  if (props.moveLimit == 'parent') {
    setTimeout(() => {
      reLoad()
    }, 0);
  }
}

const oldTop = ref(0)
// 获取页面滚动距离
const handleScroll = () => {
  getWH()
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  initialValue_copy.value.y = initialValue_copy.value.y - scrollTop + oldTop.value
  if (style1.value.top) {
    style1.value.top = +style1.value.top.split('px')[0] - scrollTop + oldTop.value + 'px'
  }
  oldTop.value = scrollTop
}
window.addEventListener('scroll', handleScroll)

window.addEventListener('resize', handleResize);

onMounted(() => {
  getWH()
  obj.value = useDraggable(draggable, {
    initialValue: initialValue_copy.value,
    onMove: (position) => {
      if (props.moveLimit == 'parent') { //仅在父元素内移动
        if (position.y > parentHeight.value + parentTop.value - selfHeight.value) {
          position.y = parentHeight.value + parentTop.value - selfHeight.value
          emits('move', 'bottom')
        }
        if (position.y < parentTop.value) {
          position.y = parentTop.value
          emits('move', 'top')
        }
        if (position.x > parentWidth.value + parentLeft.value - selfWidth.value) {
          position.x = parentWidth.value + parentLeft.value - selfWidth.value
          emits('move', 'right')
        }
        if (position.x < parentLeft.value) {
          position.x = parentLeft.value
          emits('move', 'left')
        }
        if ((parentTop.value < position.y && position.y < parentHeight.value + parentTop.value - selfHeight.value)
          && (parentLeft.value < position.x && position.x < parentWidth.value + parentLeft.value - selfWidth.value)) {
          emits('move', 'center')
        }
      }
    }
  })
  //监听父元素宽高的变化
  observer.value = useResizeObserver(draggable.value.parentElement, (entries) => {
    if (props.moveLimit == 'parent') {
      reLoad()
    }
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('scroll', handleScroll);
  observer.value.stop()
})

watch(
  () => obj.value.style,
  (val, oldVal) => {
    if (!oldVal) {
      return
    }
    style1.value = { left: obj.value.x + 'px', top: obj.value.y + 'px' }
    // style1.value=val
  }
)


const runTime = ref(0)

watchEffect(() => {
  if (parentLeft.value) {
    initialValue_copy.value.x = parentWidth.value + parentLeft.value - selfWidth.value
    if (runTime.value < 1) {
      //只执行一次
      // initialValue_copy.value.y = +props.initialValue.top.split('px')[0]
      initialValue_copy.value.y = parentHeight.value + parentTop.value - selfHeight.value
      // style1.value = props.initialValue
      style1.value = { left: parentWidth.value + parentLeft.value - selfWidth.value + 'px', top: parentHeight.value + parentTop.value - selfHeight.value + 'px' }
    }
    runTime.value++
  }
})

</script>

<style lang="less" scoped>
.base-draggable {
  cursor: pointer;
  user-select: none;
  z-index: 99997;
}
</style>
