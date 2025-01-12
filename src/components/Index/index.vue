<script setup lang="ts">
import { ref } from "vue";
import LeftIcon from "./LeftIcon/index.vue";
import Crossfire from "./Crossfire/index.vue";
import Music from "./Music/index.vue";
import Video from "./Video/index.vue";
import PicShow from "./PicShow/index.vue";
import type { IconItem } from "./LeftIcon/types";
const currentShowApplication = ref<string>("video"); //当前展示的应用
const handleIconClick = (icon: IconItem) => {
  currentShowApplication.value = icon.key;
};
const commonClose = () => {
  currentShowApplication.value = "";
};
</script>

<template>
  <div class="desktop">
    <div class="desktop_main">
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
      </div>
      <!-- 最新福利活动 -->
      <div class="activity"></div>
      <!--  当前预约人数  -->
      <div class="appointment">
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
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;

  &_main {
    position: absolute;
    // top: 90px;
    border: 2px solid red;
    left: 354px;
    width: 974px;
    height: 672px;
    // 最新福利活动
    .activity {
      z-index: 1;
      position: absolute;
      bottom: 10px;
      left: 24px;
      width: 172px;
      height: 76px;
      background-image: url("./images/new-activity.png");
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    // 当前预约人数
    .appointment {
      z-index: 1;
      position: absolute;
      bottom: 10px;
      right: 0;
      width: 386px;
      height: 120px;
      background-image: url("./images/appoint-count-bg.png");
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
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
}
</style>
