<script setup lang="ts">
import {ref} from "vue";
import Index from "./components/Index/index.vue";
const videoEnded = ref<boolean>(localStorage.getItem("videoEnded") === "true"); //视频是否播放结束
const videoCanPlay = ref<boolean>(false); //视频是否可以播放
const enterVideoRef = ref<HTMLVideoElement | null>(null); //进入视频


// 视频可以播放
const handleVideoCanPlay = () => {
  videoCanPlay.value = true;
  enterVideoRef.value?.play();
};

// 视频播放结束
const handleVideoEnded = () => {
  videoEnded.value = true;
  //存储播放结果
  localStorage.setItem("videoEnded", "true");
};
//重新播放视频
const reVideo = () => {
  videoEnded.value = false;
  enterVideoRef.value?.play();
};
</script>

<template>
  <Index @play="reVideo" :videoEnded="videoEnded"/>
  <!-- 进入视频 -->
  <video
      v-show="!videoEnded"
      ref="enterVideoRef"
      class="enter_video"
      :controls="false"
      muted
      src="@/assets/video/enter.mp4"
      @canplay="handleVideoCanPlay"
      @ended="handleVideoEnded"
  ></video>
</template>

<style scoped lang="scss">
.enter_video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
