<script setup lang="ts">
import type { ApplicationCommonEmits } from "../types";
const emits = defineEmits<ApplicationCommonEmits>();
const closeCrossfire = () => {
  emits("close");
};
const handleTopBtnClick = (key: string) => {
  console.log(key);
  switch (key) {
    case "home":
      window.open("https://cf.qq.com/");
      break;
    case "guide":
      window.open("https://cf.qq.com/cp/a20241120mguide/pc/index.html");
      break;
    case "vip":
      window.open("https://cf.qq.com/cfvip/");
      break;
    case "forum":
      window.open("https://bbs.cf.qq.com/");
      break;
    case "service":
      window.open("https://kf.qq.com");
      break;
  }
};
</script>

<template>
  <!-- 穿越火线预约效果 -->
  <div class="crossfire">
    <!-- 顶部按钮栏目 -->
    <div class="topBtns">
      <div class="wrapper">
        <!-- 按钮栏目 -->

        <!-- 官网 -->
        <div
          class="topBtns_items home"
          @click="handleTopBtnClick('home')"
        ></div>
        <div class="topBtns_items"></div>
        <!-- 新手上路 -->
        <div
          class="topBtns_items guide"
          @click="handleTopBtnClick('guide')"
        ></div>
        <div class="topBtns_items"></div>
        <!-- cf会员 -->
        <div class="topBtns_items vip" @click="handleTopBtnClick('vip')"></div>
        <div class="topBtns_items"></div>
        <!-- 玩家论坛 -->
        <div
          class="topBtns_items forum"
          @click="handleTopBtnClick('forum')"
        ></div>
        <div class="topBtns_items"></div>
      </div>
      <!-- 官方客服 -->
      <div
        class="topBtns_items service"
        @click="handleTopBtnClick('service')"
      ></div>
    </div>
    <!-- 预约按钮 -->
    <div class="reservationBtn">
      <div class="shiny"></div>
    </div>
    <!-- 关闭按钮 -->
    <div class="closeBtn" @click="closeCrossfire"></div>
  </div>
</template>

<style scoped lang="scss">
.crossfire {
  $width: 662px;
  $height: 554px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: $width;
  height: $height;
  background-image: url("@/assets/bg/crossfire-bg.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  .topBtns {
    position: absolute;
    width: 584px;
    height: 20px;
    top: 94px;
    left: 30px;
    .wrapper {
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
    }
    &_items {
      flex: 1;
      //默认看不见
      opacity: 0;
      background-size: 100% 100%;
      background-position: center center;
      background-repeat: no-repeat;
      position: relative;
      &.home {
        //官网
        background-image: url("./images/home_select.png");
        //让背景图片占据多一些内容
        padding: 0 6px;
        flex-shrink: 0;
        cursor: pointer;
      }
      &.guide {
        //新手上路
        background-image: url("./images/guide_select.png");
        left: -2px;
        padding: 0 8px;
        flex-shrink: 0;
        cursor: pointer;
      }
      &.vip {
        //cf会员
        background-image: url("./images/vip_select.png");
        left: -7px;
        padding: 0 8px;
        flex-shrink: 0;
        cursor: pointer;
      }
      &.forum {
        //玩家论坛
        background-image: url("./images/forum_select.png");
        flex-shrink: 0;
        left: -5px;
        padding: 0 4px;
        cursor: pointer;
      }

      //有点特殊就单点处理啦
      &.service {
        width: 80px;
        height: 100%;
        position: absolute;
        right: -5px;
        top: 0;
        //官方客服
        background-image: url("./images/service_select.png");
        cursor: pointer;
      }
      &:hover {
        opacity: 1;
      }
    }
  }
  //关闭按钮
  .closeBtn {
    background-image: url("./images/close-btn.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    cursor: pointer;
    top: 2px;
    right: 50px;
    width: 42px;
    height: 42px;
    &:hover {
      // 鼠标悬浮时，亮度增加
      filter: brightness(1.4);
    }
  }
  //预约按钮
  .reservationBtn {
    background-image: url("./images/reservation/hj-subscribe-btn.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    cursor: pointer;
    right: 24px;
    bottom: 46px;
    width: 184px;
    height: 80px;
    //闪亮效果
    .shiny {
      position: absolute;
      top: 0;
      left: 0;
      width: 184px;
      height: 80px;
      background-image: url("./images/reservation/hj-subscribe-btn-light.png");
      background-position: center center;
      background-repeat: no-repeat;
      //闪亮效果(呼吸灯)
      animation: shine 5s infinite;
    }
    @keyframes shine {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    &:hover {
      background-image: url("./images/reservation/hj-subscribe-btn-h.png");
    }
  }
}
</style>
