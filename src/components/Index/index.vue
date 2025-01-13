<script setup lang="ts">
import { ref } from "vue";
import LeftIcon from "./LeftIcon/index.vue";
import Crossfire from "./Crossfire/index.vue";
import Music from "./Music/index.vue";
import Video from "./Video/index.vue";
import PicShow from "./PicShow/index.vue";
import Reservation from "./Reservation/index.vue";
import type { IconItem } from "./LeftIcon/types";
import type {Emits,Props} from "./types.ts";
const currentShowApplication = ref<string>(""); //当前展示的应用
const emits = defineEmits<Emits>()
const props = defineProps<Props>();
const handleIconClick = (icon: IconItem) => {
  currentShowApplication.value = icon.key;
};
const commonClose = () => {
  currentShowApplication.value = "";
};
// 打开预约
const openReservation = () => {
  currentShowApplication.value = "reservation";
};
// 打开最新福利活动
const openActivity = () => {
  window.open(
      "https://cf.qq.com/cp/a20241224jansecond/pc/index.shtml",
      "_blank"
  );
};


const reVideo = () => {
  emits("play")
}
</script>

<template>
  <div class="desktop">
    <div class="desktop_main" v-show="videoEnded">
      <!-- 左侧图标 -->
      <div class="left">
        <LeftIcon @icon-click="handleIconClick" />
      </div>
      <!-- 应用展示 -->
      <div class="content" v-show="currentShowApplication">
        <!-- 穿越火线 -->
        <Crossfire
            v-if="currentShowApplication === 'crossfire'"
            @close="commonClose"
            @openReservation="openReservation"
        />
        <!-- 音乐 -->
        <Music v-if="currentShowApplication === 'music'" @close="commonClose" />
        <!-- 视频 -->
        <Video v-if="currentShowApplication === 'video'" @close="commonClose" />
        <!-- 图片 -->
        <PicShow
            v-if="currentShowApplication === 'picShow'"
            @close="commonClose"
        />
        <!-- 预约 -->
        <Reservation
            v-if="currentShowApplication === 'reservation'"
            @close="commonClose"
        />
      </div>
      <!-- 登录信息 -->
      <div class="info">
        <div class="play" @click="reVideo"></div>
      </div>
      <!-- 最新福利活动 -->
      <div class="activity" @click="openActivity"></div>
      <!--  当前预约人数  -->
      <div class="appointment" @click="openReservation">
        <div class="appointment_count">
          <div class="appointment_count_number">10000</div>
          <div class="appointment_count_unit">人</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.desktop {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/bg/bg.jpg");
  //移动端
  @media screen and (max-width: 750px) {
    background-image: url("@/assets/bg/bgMobile.jpg");
  }
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
  .enter_video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &_main {
    position: absolute;
    top: 90px;
    left: 390px;
    width: 1112px;
    height: 808px;
    //移动端
    @media screen and (max-width: 750px) {
      top: 260px;
      width: 750px;
      left: 0;
      height: 1011px;
    }
    //遮罩背景
    &::after {
      content: "";
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url("./images/mask.png") no-repeat center center;
      pointer-events: none;
    }
    // 最新福利活动
    .activity {
      z-index: 1;
      position: absolute;
      bottom: 44px;
      left: 24px;
      width: 172px;
      height: 76px;
      background-image: url("./images/new-activity.png");
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
      @media screen and (max-width: 750px) {
        bottom:70px;
      }
    }

    // 当前预约人数
    .appointment {
      z-index: 1;
      position: absolute;
      bottom: 44px;
      right: 0;
      width: 386px;
      height: 120px;
      background-image: url("./images/appoint-count-bg.png");
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
      @media screen and (max-width: 750px) {
        bottom:70px;
      }
      .appointment_count {
        display: flex;
        align-items: center;
        position: absolute;
        font-size: 32px;
        color: #e7d1a8;
        bottom: 8px;
        left: 20px;
        text-align: center;
        &_number {
        }
        &_unit {
        }
      }
    }
    // 设置左侧图标宽度
    .left {
      width: 80px;
      margin-left: 14px;
    }
  }
  .content {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .info {
    position: absolute;
    right: 20px;
    top: 44px;
    cursor: pointer;
    .play {
      width: 34px;
      height: 34px;
      background-image: url("./images/revideo.png");
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
