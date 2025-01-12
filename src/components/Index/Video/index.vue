<script setup lang="ts">
import { ref } from "vue";
import type { ApplicationCommonEmits } from "../types";
const emits = defineEmits<ApplicationCommonEmits>();
const videoRef = ref<HTMLVideoElement | null>(null);
const isPlay = ref<boolean>(false); //是否播放
const isMute = ref<boolean>(false); //是否静音
const canPlay = ref<boolean>(false); //是否可以播放
//视频列表
const vidoeList = ref([
  {
    index: 1,
    name: "正式官宣！全新FPS网游 《穿越火线》 即将上线",
    time: "5:00",
    url: new URL(`@/assets/video/1.mp4`, import.meta.url).href,
  },
  {
    index: 2,
    name: "震撼来袭！《穿越火线》全新CG首发",
    time: "1:48",
    url: new URL(`@/assets/video/2.mp4`, import.meta.url).href,
  },
  {
    index: 3,
    name: "轻松一刻！《穿越火线》搞笑CG",
    time: "1:29",
    url: new URL(`@/assets/video/3.mp4`, import.meta.url).href,
  },
]);
//当前视频信息
const currentVideoInfo = ref({
  ...vidoeList.value[0],
  duration: 0,
  currentTime: 0,
});
const handleCanPlay = () => {
  canPlay.value = true;
  //获取视频的时长(秒)
  currentVideoInfo.value.duration = videoRef.value!.duration;
};
//播放
const handlePlay = () => {
  if (!videoRef.value) return;
  videoRef.value.play();
  isPlay.value = true;
};
//暂停
const handlePause = () => {
  if (!videoRef.value) return;
  videoRef.value.pause();
  isPlay.value = false;
};
//静音
const muteVideo = () => {
  isMute.value = !isMute.value;
  videoRef.value!.muted = isMute.value;
};
//音量 todo 你也可以使用节流
const changeVolume = (e: any) => {
  //归一化
  const value = Math.round(Number(e.target.value) / 100);
  videoRef.value!.volume = value;
};
//上一首 下一首
const handlePrevOrNext = (type: "prev" | "next") => {
  handlePause();
  const currentIndex = currentVideoInfo.value.index;
  if (type === "prev") {
    let prevIndex = currentIndex - 1;
    if (prevIndex <= 0) {
      prevIndex = vidoeList.value.length;
    }
    currentVideoInfo.value = {
      ...vidoeList.value[prevIndex - 1],
      duration: 0,
      currentTime: 0,
    };
  }
  if (type === "next") {
    let nextIndex = currentIndex + 1;
    if (nextIndex > vidoeList.value.length) {
      nextIndex = 1;
    }
    currentVideoInfo.value = {
      ...vidoeList.value[nextIndex - 1],
      duration: 0,
      currentTime: 0,
    };
  }
};
//切换视频
const handleSwitchVideo = (item: any) => {
  handlePause();
  currentVideoInfo.value = item;
};
// 进度条
const changeProgress = (e: any) => {
  console.log("e.target.value", e.target.value);

  videoRef.value!.currentTime = Math.round(e.target.value);
};
</script>

<template>
  <div class="videoPlay">
    <div class="header">
      <div class="logo"></div>
      <div class="title" style="color: red">
        {{ currentVideoInfo.name }}{{ currentVideoInfo.duration }}
        {{ currentVideoInfo.currentTime }}
      </div>
      <div class="close">
        <div class="close_min"></div>
        <div class="close_max"></div>
        <div class="close_close"></div>
      </div>
    </div>
    <div class="content">
      <!-- 视频  -->
      <div class="content_video">
        <video
          ref="videoRef"
          class="videoTag"
          :src="currentVideoInfo.url"
          :value="currentVideoInfo.currentTime"
          controlslist="nodownload"
          @canplay="handleCanPlay"
        ></video>
      </div>
      <!-- 列表 -->
      <div class="content_list">
        <div
          class="content_list_item"
          v-for="item in vidoeList"
          :key="item.index"
          :class="{ active: currentVideoInfo.name === item.name }"
          @click="handleSwitchVideo(item)"
        >
          <!-- 预留小箭头空间,当然你也可以设置padding -->
          <div class="content_list_item_arrow"></div>
          <div class="content_list_item_name">{{ item.name }}</div>
          <div class="content_list_item_time">{{ item.time }}</div>
        </div>
      </div>
    </div>
    <!-- 底部控制按钮 -->
    <div class="footer">
      <!-- 控制器 -->
      <div class="music-controller">
        <!-- 播放 重播 暂停 -->
        <div class="reset">
          <!-- 播放  -->
          <div class="play" v-show="!isPlay" @click="handlePlay"></div>
          <!-- 暂停 -->
          <div class="pause" v-show="isPlay" @click="handlePause"></div>
          <!-- 重播 -->
          <div class="again"></div>
        </div>
        <!-- 上一首 下一首   -->
        <div class="prev">
          <div class="prev-btn" @click="handlePrevOrNext('prev')"></div>
          <div class="next-btn" @click="handlePrevOrNext('next')"></div>
        </div>
        <!-- 进度控制 -->
        <!-- 音乐播放进度 -->
        <div class="music-progress">
          <!-- 通过设置这个的宽度来达到进度条的效果 -->
          <div class="progress-bar"></div>
          <!-- 进度条 -->
          <div class="range-box">
            <input
              type="range"
              class="input-range"
              :min="0"
              :max="currentVideoInfo.duration"
              @input="changeProgress"
            />
          </div>
        </div>
        <!-- 静音 -->
        <div class="mute" @click="muteVideo" :class="{ active: isMute }"></div>
        <!-- 音量 -->
        <div class="volume">
          <input
            type="range"
            :min="0"
            :max="100"
            :value="100"
            class="input-volume-range"
            @input="changeVolume"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.videoPlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 822px;
  height: 544px;
  background: url("./images/video-bg.png") no-repeat center center;
  box-sizing: border-box;
  padding: 14px;
  // 头部
  .header {
    display: flex;
    .logo {
      width: 132px;
      height: 34px;
      background: url("@/assets/logo.png") no-repeat;
    }
    .title {
      flex: 1;
      text-align: center;
      font-size: 22px;
      color: #0a0b0b;
    }
    .close {
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
      }
    }
  }
  .content {
    margin-top: 2px;
    display: flex;
    height: 406px;
    box-sizing: border-box;
    // 视频
    &_video {
      flex: 1;
      height: 100%;
      background-color: palevioletred;
      position: relative;
      background: url("./images/video-img.jpg") no-repeat center center;
      .videoTag {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &:after {
        position: absolute;
        right: 0;
        top: 4px;
        content: "";
        display: block;
        width: 8px;
        height: 100%;
        background: url("@/assets/control/line.png") no-repeat;
      }
    }
    // 列表
    &_list {
      width: 240px;
      box-sizing: border-box;
      padding: 0 10px;
      padding-right: 4px;
      padding-left: 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      color: #b5c6e3;
      &_item {
        height: 28px;
        box-sizing: border-box;
        padding-right: 4px;
        display: flex;
        align-items: center;
        cursor: pointer;
        &:nth-of-type(even) {
          background-color: #242937;
        }
        &_arrow {
          width: 10px;
          height: 10px;
          flex-shrink: 0;
        }
        &.active {
          background: url("@/assets/control/list-item-hover.png") no-repeat;
          background-size: 100% 100%;
        }
        &:hover {
          background: url("@/assets/control/list-item-hover.png") no-repeat;
          background-size: 100% 100%;
        }
        &_name {
          flex: 1;
          //超出省略
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        &_time {
        }
      }
    }
  }
  .footer {
    // 音乐播放进度
    .music-progress {
      position: relative;
      box-sizing: border-box;
      width: 416px;
      height: 24px;
      background: url("@/assets/control/process-bg.png") no-repeat;
      .progress-bar {
        position: absolute;
        left: 0;
        top: 0;
        // width: 100%;
        // 通过设置这个的宽度来达到进度条的效果
        width: 140px;
        height: 100%;
        background: url("@/assets/control/process-bg-h.png") no-repeat;
      }
      .range-box {
        box-sizing: border-box;
        // 控制滑块的最大位置
        padding: 0 22px;
        // 进度条的滑块
        .input-range {
          //设置滑块需要先消除基于操作系统主题的原生外观,否者你设置了thumb也不会生效
          appearance: none;
          background: none;
          border: none;
          outline: none;
          width: 100%;
          margin-top: 2px;
        }
        .input-range::-webkit-slider-thumb {
          appearance: none;
          width: 44px;
          height: 20px;
          // 进度条的滑块样式
          background: url("@/assets/control/process-btn.png") no-repeat center;
          border: 0;
          cursor: pointer;
          position: relative;
          z-index: 3;
        }
      }
    }
    // 控制器
    .music-controller {
      margin: 0 8px;
      margin-top: 10px;
      display: flex;
      align-items: center;
      //播放 重播 暂停
      .reset {
        padding-left: 2px;
        gap: 8px;
        width: 100px;
        height: 62px;
        display: flex;
        align-items: center;
        background: url("@/assets/control/control-bg1.png") no-repeat;
        margin-right: 12px;
        .play {
          width: 52px;
          height: 52px;
          cursor: pointer;
          transition: all 0.3s;
          background: url("@/assets/control/pause.png") no-repeat;
          &:hover {
            background: url("@/assets/control/pause-h.png") no-repeat;
          }
        }
        .pause {
          width: 52px;
          height: 52px;
          cursor: pointer;
          transition: all 0.3s;
          background: url("@/assets/control/play-btn.png") no-repeat;
          &:hover {
            filter: brightness(1.3);
          }
        }
        .again {
          width: 34px;
          height: 34px;
          cursor: pointer;
          transition: all 0.3s;
          background: url("@/assets/control/stop.png") no-repeat;
          &:hover {
            background: url("@/assets/control/stop-h.png") no-repeat;
          }
        }
      }
      //上一首 下一首
      .prev {
        margin-left: 12px;
        padding: 2px 4px;
        display: flex;
        align-items: center;
        width: 84px;
        height: 42px;
        gap: 8px;
        background: url("@/assets/control/control-bg2.png") no-repeat;
        cursor: pointer;
        .prev-btn {
          width: 34px;
          height: 34px;
          background: url("@/assets/control/prev.png") no-repeat;
          transition: all 0.3s;
          &:hover {
            background: url("@/assets/control/prev-h.png") no-repeat;
          }
        }
        .next-btn {
          width: 34px;
          height: 34px;
          background: url("@/assets/control/next.png") no-repeat;
          transition: all 0.3s;
          &:hover {
            background: url("@/assets/control/next-h.png") no-repeat;
          }
        }
      }
      //静音
      .mute {
        margin-left: 12px;
        width: 34px;
        height: 36px;
        background: url("@/assets/control/source-open.png") no-repeat;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          background: url("@/assets/control/source-open-h.png") no-repeat;
        }
        &.active {
          background: url("@/assets/control/source-mute.png") no-repeat;
          &:hover {
            background: url("@/assets/control/source-mute-h.png") no-repeat;
          }
        }
      }
      //音量
      .volume {
        width: 84px;
        height: 42px;
        margin-top: 20px;
        background: url("@/assets/control/volumn-bg.png") no-repeat;
        .input-volume-range {
          appearance: none;
          background: none;
          border: none;
          outline: none;
          width: 100%;
        }
        .input-volume-range::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 26px;
          background: url("@/assets/control/volume-handle.png") no-repeat;
        }
      }
    }
  }
}
</style>
