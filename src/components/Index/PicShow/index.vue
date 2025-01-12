<script setup lang="ts">
import { ref } from "vue";
import type { ApplicationCommonEmits } from "../types";
import { Swiper, SwiperSlide } from "swiper/vue";
import type { Swiper as SwiperType } from "swiper";
const swiperInstance = ref<SwiperType>();
const emits = defineEmits<ApplicationCommonEmits>();
const getImageUrl = (index: number) => {
  return new URL(`./images/swiper/${index}.jpg`, import.meta.url).href;
};
const closePicShow = () => {
  emits("close");
};
const onSwiper = (swiper: SwiperType) => {
  swiperInstance.value = swiper;
};
const handleSwiper = (type: "prev" | "next") => {
  if (!swiperInstance.value) return;

  if (type === "prev") {
    swiperInstance.value.slidePrev();
  } else {
    swiperInstance.value.slideNext();
  }
};
</script>

<template>
  <div class="picShow">
    <div class="header">
      <div class="close">
        <div class="close_min"></div>
        <div class="close_max"></div>
        <div class="close_close" @click="closePicShow"></div>
      </div>
    </div>
    <div class="imgSwiper">
      <!-- 隐藏按钮 -->
      <swiper
        :slides-per-view="1"
        :loop="true"
        :navigation="false"
        @swiper="onSwiper"
        :resistanceRatio="0"
        :observer="true"
        :observeParents="true"
        class="swiper-container"
      >
        <swiper-slide
          v-for="(_, index) in Array.from({ length: 27 })"
          :key="index"
        >
          <img class="swiper-img" :src="getImageUrl(index + 1)" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="footer">
      <div class="footer-center">
        <div class="footer-center-left" @click="handleSwiper('prev')"></div>
        <div class="footer-center-right" @click="handleSwiper('next')"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.picShow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 745px;
  height: 524px;
  background: url("./images/wrapper-bg.png") no-repeat center center;
  box-sizing: border-box;
  .header {
    display: flex;
    height: 42px;
    width: 100%;
    align-items: center;
    box-sizing: border-box;
    padding: 10px 20px 0 0;
    .close {
      margin-left: auto;
      display: flex;
      align-items: center;
      height: 18px;
      gap: 12px;
      .close_min {
        width: 18px;
        height: 100%;
        background: url("@/assets/control/adorn1.png") no-repeat;
        background-position: bottom;
      }
      .close_max {
        width: 18px;
        height: 100%;
        background: url("@/assets/control/adorn2.png") no-repeat;
      }
      .close_close {
        width: 18px;
        height: 100%;
        background: url("@/assets/control/close-btn.png") no-repeat;
        cursor: pointer;
        &:hover {
          filter: brightness(1.3);
        }
      }
    }
  }
  .imgSwiper {
    width: 705px;
    height: 404px;
    margin-left: 20px;
    overflow: hidden;

    .swiper-container {
      width: 100%;
      height: 100%;
      margin-top: 10px;
    }

    .swiper-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
  }
  .footer {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 22px;
    &-center {
      width: 108px;
      height: 42px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 0 6px;
      background: url("@/assets/control/control-bg.png") no-repeat;
      &-left {
        width: 34px;
        height: 34px;
        background: url("@/assets/control/prev-pic.png") no-repeat;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          background: url("@/assets/control/prev-pic-h.png") no-repeat;
        }
      }
      &-right {
        width: 34px;
        height: 34px;
        background: url("@/assets/control/next-pic.png") no-repeat;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          background: url("@/assets/control/next-pic-h.png") no-repeat;
        }
      }
    }
  }
}
</style>
