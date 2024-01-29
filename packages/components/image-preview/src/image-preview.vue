<template>
  <div v-if="showPreview" :class="['base-preview',animationD=='enter'?'fade-enter-active':'fade-leave-active',props.size=='auto'?'imgAuto':'']">
    <!-- <base-title :title="props.title"></base-title> -->
    <div class="close" @click="closePreview">
      <el-icon size="40" color="#fff">
        <Close />
      </el-icon>
    </div>
    <div class="img-preview">
      <div class="img-preview-prev" @click="toPrev"></div>
      <div class="img-preview-image">
        <img :src="isActiveImg" ref="main_img" class="main-img1" v-if="props.size=='fixed'" draggable="false">
        <div class="main-img2" :style="{backgroundImage:`url(${isActiveImg})`}" ref="main_img" v-else></div>
      </div>
      <div class="img-preview-next" @click="toNext"></div>
    </div>
    <div class="image-acionts">
      <div class="amplify" @click="largeImage"></div>
      <div class="reduce" @click="reduceImage"></div>
      <div class="proportion" @click="resetImage"></div>
      <div class="anticlockwise" @click="anticlockwise"></div>
      <div class="clockwise" @click="clockwise"></div>
    </div>
    <div class="imgList" :style="{width:bottomImageList?.length>4?'1052px':`${242*bottomImageList?.length+28*(bottomImageList?.length-1)}px`}">
      <swiper class="mySwiper" @swiper="setSwiper" :modules="modules" :slides-per-view="bottomImageList?.length>4 ? 4 : bottomImageList?.length" :space-between="28" navigation
        :loop="bottomImageList?.length>4 ? true : false" :centeredSlides="false" :observer="true" :observeParents="true">
        <swiper-slide v-for="(item,index) in bottomImageList" :key="item" @click.stop="handleChooseImg(item,index)">
          <div class="item">
            <img :src="item.url" :style="{border:index==isActiveIndex?`3px solid #4FD1C5`:`3px solid transparent`}">
            <span>{{ item.name }}</span>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import baseTitle from '@/views/components/base-title/index.vue'
import { onMounted, ref, watchEffect } from 'vue';

defineOptions({
  name: 'WilImagePreview'
})
const modules = ref([Navigation, Pagination, Scrollbar, A11y, Autoplay])
const props = defineProps({
  imgList: {
    type: Array, default: () => [
      { url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fss2.meipian.me%2Fusers%2F2072698%2F2bad075dc8634172a813cfd75525d9a8.jpeg%3Fmeipian-raw%2Fbucket%2Fivwen%2Fkey%2FdXNlcnMvMjA3MjY5OC8yYmFkMDc1ZGM4NjM0MTcyYTgxM2NmZDc1NTI1ZDlhOC5qcGVn%2Fsign%2F6aed9ded8d68c69c7ab594524540709e.jpg&refer=http%3A%2F%2Fss2.meipian.me&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707725390&t=d1d238850c682fe02d31161dff0244bc' },
      { url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fss2.meipian.me%2Fusers%2F2072698%2F406eb86612b54021a101c931a037b70b.jpg%3Fmeipian-raw%2Fbucket%2Fivwen%2Fkey%2FdXNlcnMvMjA3MjY5OC80MDZlYjg2NjEyYjU0MDIxYTEwMWM5MzFhMDM3YjcwYi5qcGc%3D%2Fsign%2F68de4e85b310934ba4d9b5ad75f38701.jpg&refer=http%3A%2F%2Fss2.meipian.me&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707725406&t=b8ada9508d13fa1e49ef14c62e7f7143' },
      { url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fss2.meipian.me%2Fusers%2F2072698%2Fa449e66b8ae7447392c3de0a6a646621.jpeg%3Fmeipian-raw%2Fbucket%2Fivwen%2Fkey%2FdXNlcnMvMjA3MjY5OC9hNDQ5ZTY2YjhhZTc0NDczOTJjM2RlMGE2YTY0NjYyMS5qcGVn%2Fsign%2F05b70ef84d64ae25ba3196d2d5515aa6.jpg&refer=http%3A%2F%2Fss2.meipian.me&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707725406&t=9cf97a7c783d0dcf21c8d3bc8f3c6c4a' },
      { url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fss2.meipian.me%2Fusers%2F2072698%2F6c8989adc8234386b2ce0a0415fbf60a.jpeg%3Fmeipian-raw%2Fbucket%2Fivwen%2Fkey%2FdXNlcnMvMjA3MjY5OC82Yzg5ODlhZGM4MjM0Mzg2YjJjZTBhMDQxNWZiZjYwYS5qcGVn%2Fsign%2Fcf8d1bf261e046048f837fcbcf8c26bd.jpg&refer=http%3A%2F%2Fss2.meipian.me&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707725406&t=19bd9141631d879e72f3c284698c6bd1' },
      { url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fss2.meipian.me%2Fusers%2F2072698%2F23ec5760118148a394ee7b7b06339128.jpeg%3Fmeipian-raw%2Fbucket%2Fivwen%2Fkey%2FdXNlcnMvMjA3MjY5OC8yM2VjNTc2MDExODE0OGEzOTRlZTdiN2IwNjMzOTEyOC5qcGVn%2Fsign%2Fbaf7e1b1bf10624b3dc30d8891ec9558.jpg&refer=http%3A%2F%2Fss2.meipian.me&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707725406&t=03aca3f6885939c0af9565e0344423ae' },
      { url: 'https://img0.baidu.com/it/u=2968274034,4191659377&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500' },
    ]
  },
  // title: { type: String, default: '比亚迪产品设计' },
  modelValue: { type: Boolean, default: false },
  size: { type: String, default: 'auto' }, //fixed：图片固定宽高，auto：图片宽高使用图片原有的大小
  closeOnPressEscape: { type: Boolean, default: true },//是否可以通过按下 ESC 关闭 Dialog
})

const swiperDom = ref(null)
const main_img = ref(null)

const bottomImageList = ref([]) //下方的图片列表
const showPreview = ref(false)

const isActiveImg = ref('')
const isActiveIndex = ref(0)

const scaleValue = ref(1) //放大缩小倍数
const rotateValue = ref(0)//翻转的角度

const animationD = ref('enter')//动画默认是进入

const emits = defineEmits(['update:modelValue'])

const setSwiper = (dom) => {
  swiperDom.value = dom
}

//往前滑动图片
const toPrev = () => {
  swiperDom.value.slidePrev(100)
  if (isActiveIndex.value > 0) {
    isActiveIndex.value--
  } else {
    isActiveIndex.value = bottomImageList.value.length - 1
  }
  isActiveImg.value = bottomImageList.value[isActiveIndex.value].url
  scaleValue.value = 1
  rotateValue.value = 0
  main_img.value.style.transform = `scale(1) rotate(0deg)`
}
//往后滑动图片
const toNext = () => {
  swiperDom.value.slideNext(100)
  if (isActiveIndex.value < bottomImageList.value.length - 1) {
    isActiveIndex.value++
  } else {
    isActiveIndex.value = 0
  }
  isActiveImg.value = bottomImageList.value[isActiveIndex.value].url
  scaleValue.value = 1
  rotateValue.value = 0
  main_img.value.style.transform = `scale(1) rotate(0deg)`
}


//选中图片
const handleChooseImg = (item, index) => {
  isActiveIndex.value = index
  isActiveImg.value = item.url
  scaleValue.value = 1
  rotateValue.value = 0
  main_img.value.style.transform = `scale(1) rotate(0deg)`
}

//放大图片
const largeImage = () => {
  if (scaleValue.value < 1.728) {
    scaleValue.value = scaleValue.value * 1.2
  }
  main_img.value.style.transform = `scale(${scaleValue.value}) rotate(${rotateValue.value}deg)`
}

//缩小图片
const reduceImage = () => {
  if (scaleValue.value > 0.194) {
    scaleValue.value = scaleValue.value / 1.2
  }
  main_img.value.style.transform = `scale(${scaleValue.value}) rotate(${rotateValue.value}deg)`
}

//还原图片
const resetImage = () => {
  scaleValue.value = 1
  rotateValue.value = 0
  main_img.value.style.transform = `scale(${scaleValue.value}) rotate(${rotateValue.value}deg)`
}

//逆时针旋转图片
const anticlockwise = () => {
  rotateValue.value = rotateValue.value - 90
  main_img.value.style.transform = `scale(${scaleValue.value}) rotate(${rotateValue.value}deg)`
}

//顺时针旋转图片
const clockwise = () => {
  rotateValue.value = rotateValue.value + 90
  main_img.value.style.transform = `scale(${scaleValue.value}) rotate(${rotateValue.value}deg)`
}

//关闭预览
const closePreview = () => {
  animationD.value = 'leave'
  setTimeout(() => {
    showPreview.value = false
    emits('update:modelValue', false)
    // resetImage()
    scaleValue.value = 1
    rotateValue.value = 0
  }, 300);
}

onMounted(() => {
  if (props.closeOnPressEscape) { //开启esc关闭图片预览
    document.addEventListener('keyup', function (e) {
      if (e.key == 'Escape' && showPreview.value) {
        closePreview()
      }
    })
  }
})

watchEffect(() => {
  bottomImageList.value = JSON.parse(JSON.stringify(props.imgList))
  animationD.value = 'enter'
  showPreview.value = props.modelValue
  if (bottomImageList.value?.length) {
    isActiveImg.value = bottomImageList.value[0].url
    isActiveIndex.value = 0
  }
})

</script>

<style lang="less" scoped>
.imgAuto {
  overflow: auto !important;
  overflow-x: hidden !important;
  .img-preview {
    flex: auto !important;
    height: auto !important;
  }
}
.base-preview {
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: space-between;
  // padding: 96px 45px 52px 45px;
  padding: 10px 45px 0 45px;
  // height: 100%;
  position: fixed;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  .close {
    position: absolute;
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(103, 103, 103, 0.5);
    right: 40px;
    top: 40px;
    cursor: pointer;
    z-index: 999;
  }
  ::v-deep .base-title {
    width: 65.5%;
    // width: 1200px;
    margin-bottom: 20px;
    z-index: 99;
    color: #fff;
  }
  .img-preview {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 69.5%;
    flex: 0 0 69.5%;
    z-index: 1;

    &-prev {
      // width: 90px;
      flex: 0 0 90px;
      height: 90px;
      background: url("./assets/img-prev.png") center no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
      z-index: 99;
    }
    &-image {
      // width: 65.5%;
      flex: 0 0 65.5%;
      // width: 1200px;
      height: 100%;
      z-index: 1;
      .main-img1 {
        width: 100%;
        height: 100%;
        border-radius: 14px;
        -webkit-user-drag: none;
        // cursor: move;
        // user-select: none;
      }
      .main-img2 {
        width: 100%;
        height: 100%;
        border-radius: 14px;
        background-position: center;
        background-repeat: no-repeat;
        // background-size: 100% 100%;
        background-size: contain;
      }
    }
    &-next {
      // width: 90px;
      flex: 0 0 90px;
      height: 90px;
      background: url("./assets/img-next.png") center no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
      z-index: 99;
    }
  }
  .image-acionts {
    display: flex;
    margin-top: 35px;
    margin-bottom: 35px;
    z-index: 99;
    div {
      width: 24px;
      height: 24px;
      margin-left: 46px;
      cursor: pointer;
    }
    .amplify {
      background: url("./assets/zoom-in-line.png") center no-repeat;
      background-size: 100% 100%;
      margin-left: 0;
    }
    .reduce {
      background: url("./assets/zoom-out-line.png") center no-repeat;
      background-size: 100% 100%;
    }
    .proportion {
      background: url("./assets/fullscreen-line.png") center no-repeat;
      background-size: 100% 100%;
    }
    .anticlockwise {
      background: url("./assets/anticlockwise-line.png") center no-repeat;
      background-size: 100% 100%;
    }
    .clockwise {
      background: url("./assets/clockwise-line.png") center no-repeat;
      background-size: 100% 100%;
    }
  }
  .imgList {
    width: 1052px;
    height: 124px;
    // padding: 29px 61px;
    position: relative;
    box-sizing: border-box;
    z-index: 99;
    ::v-deep .swiper {
      // width: 95%;
      position: initial;
      height: 100%;
      // padding-top: vh(10);

      .swiper-button-prev {
        // background: url("./assets/leftArrow.png");
        // background-size: 100% 100%;
        width: 24px;
        height: 24px;
        left: 30px;
        pointer-events: none;
        display: none;
      }

      .swiper-button-next {
        // background: url("./assets/rightArrow.png");
        // background-size: 100% 100%;
        width: 24px;
        height: 24px;
        right: 30px;
        pointer-events: none;
        display: none;
      }

      .swiper-button-prev::after {
        font-size: 0;
      }

      .swiper-button-next::after {
        font-size: 0;
      }

      .swiper-wrapper {
        // width: 80%;

        .swiper-slide {
          // text-align: center;
          // font-size: 18px;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;

          // background: #fff;
          .item {
            width: 100%;
            height: 100%;
            // background: url('./assets/3276.png') center no-repeat;
            // background-size: 100% 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 12px;
          }
          span {
            font-size: 18px;
            color: #fff;
          }
        }
      }
    }
  }
}
.fade-enter-active {
  overflow: hidden;
  animation-duration: 0.4s;
  animation-name: anim-open;
  // animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
}
.fade-leave-active {
  animation-duration: 0.4s;
  animation-name: anim-close;
}
@keyframes anim-open {
  // 0% { opacity: 0;  transform: scale3d(0, 0, 1);
  // left: 648px; top: 634px;right: 933.5px;bottom:835px;width: 285.5px;height: 201px;}
  0% {
    opacity: 0;
    transform: translateY(-5%);
  }
  // 100% { opacity: 1; transform: scale3d(1, 1, 1); left: 0; top: 0;right: 0;bottom:0;width: 100%;height: 100%; }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes anim-close {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-5%);
  }
}
</style>
