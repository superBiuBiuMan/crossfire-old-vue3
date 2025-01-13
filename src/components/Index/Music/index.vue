<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { MusicInfo } from "./types";
import type { ApplicationCommonEmits } from "../types";
import { formatTime, throttle } from "./methods";
import Wave from "./wave/index.vue";
const emits = defineEmits<ApplicationCommonEmits>();
const waveRef = ref<any>(); // 音波
const showMusicList = ref<boolean>(true); //是否显示音乐列表
const audioRef = ref<HTMLAudioElement | null>(null); //音频元素
const isPlay = ref<boolean>(false); //是否播放
const isMute = ref<boolean>(false); //是否静音
const canPlay = ref<boolean>(false); //是否可以播放
const progressBarWidth = ref<number>(0); //进度条宽度(进度条设置的宽度为372px,所以当为372的时候即占满进度条了)
const musicList = ref<MusicInfo[]>([
  {
    index: 1,
    name: "Metrohead",
    url: new URL(`@/assets/music/Metrohead.mp3`, import.meta.url).href,
    // url: "https://cf.lv.game.qq.com/dis_kt_b280c0dca695b9f721e7768bab9b2f42_1735811699/0b53zeaccaaatuaehilwbrt6psodeheqaiia.f0.mp3",
    time: "02:58",
    currentTime: 0,
  },
  {
    index: 2,
    name: "Cyber Thug",
    url: new URL(`@/assets/music/Cyber Thug.mp3`, import.meta.url).href,
    // url: "https://cf.lv.game.qq.com/dis_kt_ec180a5af07c28f418f6d898dbafb2bb_1735811692/0b53b4aciaaaliaemrlwyft6od6deqhqajaa.f0.mp3",
    time: "02:51",
    currentTime: 0,
  },
  {
    index: 3,
    name: "Unbound",
    url: new URL(`@/assets/music/Unbound.mp3`, import.meta.url).href,
    // url: "https://cf.lv.game.qq.com/dis_kt_567b23889847372baf4fb478aa60e27d_1735811685/0b53faaceaaapuaeb3lwbrt6okgdeiuaaiqa.f0.mp3",
    time: "02:01",
    currentTime: 0,
  },
  {
    index: 4,
    name: "strategy now",
    url: new URL(`@/assets/music/strategy now.mp3`, import.meta.url).href,
    // url: "https://cf.lv.game.qq.com/dis_kt_0e4a42d1944de32220cf46cd899994c9_1735811678/0b53mmaceaaag4aebn3wdnt6oy6dejrqaiqa.f0.mp3",
    time: "01:50",
    currentTime: 0,
  },
  {
    index: 5,
    name: "《穿越火线》游戏主题曲",
    url: new URL(`@/assets/music/crossfire.mp3`, import.meta.url).href,
    // url: "https://cf.lv.game.qq.com/dis_kt_1587e1a11e613382719dfea73b2d0595_1735888214/0b535macsaaau4akiwtx4zt6p26dfhvqakia.f0.mp3",
    time: "03:27",
    currentTime: 0,
  },
]);

const currentMusicInfo = ref<MusicInfo>({
  ...musicList.value[0],
  duration: 0,
  currentTime: 0,
});

const onCanplay = () => {
  canPlay.value = true;
  //获取音频的时长(秒)
  currentMusicInfo.value.duration = audioRef.value!.duration;
};

//关闭音乐
const closeMusic = () => {
  emits("close");
};
//播放音乐
const playMusic = () => {
  isPlay.value = true;
  waveRef.value?.start();
  audioRef.value?.play();
};
//暂停音乐
const pauseMusic = () => {
  isPlay.value = false;
  waveRef.value?.stop();
  audioRef.value?.pause();
};
//重播(重置播放)
const resetMusic = () => {
  canPlay.value = false;
  isMute.value = false;
  pauseMusic();
  audioRef.value!.currentTime = 0;
  audioRef.value!.muted = false;
};
//静音
const muteMusic = () => {
  isMute.value = !isMute.value;
  audioRef.value!.muted = isMute.value;
};
//音量 todo 你也可以使用节流
const changeVolume = (e: any) => {
  //归一化
  audioRef.value!.volume = Math.round(Number(e.target.value) / 100);
};
//切换播放音乐
const switchPlayMusic = (item: MusicInfo) => {
  resetMusic();

  currentMusicInfo.value = {
    ...item,
    currentTime: 0,
  };
  //todo 需要等待音频加载完成,当然你也可以使用监听的方式去实现
  let timer = setInterval(() => {
    if (canPlay.value) {
      clearInterval(timer);
      playMusic();
    }
  }, 700);
};
//上一首 下一首
const prevOrNextMusic = (type: string) => {
  //暂停播放
  pauseMusic();
  // 获取当前音乐的索引
  const currentIndex = currentMusicInfo.value.index;
  // 上一首
  if (type === "prev") {
    // 获取上一首音乐的索引
    // 获取上一首音乐的索引
    let prevIndex = currentIndex - 1;
    if (prevIndex <= 0) {
      prevIndex = musicList.value.length;
    }
    // 设置当前音乐
    // currentMusicInfo.value = musicList.value.find(
    //   (item) => item.index === prevIndex
    // ) as any;
    switchPlayMusic(musicList.value[prevIndex - 1]);
  }
  //下一首
  else {
    let nextIndex = currentIndex + 1;
    if (nextIndex > musicList.value.length) {
      nextIndex = 1;
    }
    // 设置当前音乐
    switchPlayMusic(musicList.value[nextIndex - 1]);
  }
};

// 进度条
const changeProgress = (e: any) => {
  audioRef.value!.currentTime = Math.round(e.target.value);
};
// 音频时间更新
const onAudioTimeupdate = throttle((e: any) => {
  const { currentTime, duration } = e.target;
  currentMusicInfo.value.currentTime = currentTime;
  //更新进度条,20为距离补偿,因为图片上有一个22px的小圆球
  progressBarWidth.value = Math.ceil((currentTime / duration) * 372) + 22;
}, 200);
// 音频结束
const onAudioEnded = () => {
  prevOrNextMusic("next");
};
</script>

<template>
  <div class="music">
    <!-- 音乐播放状态 -->
    <div class="music-status">
      <!-- 音乐顶部控制按钮 -->
      <div class="music-top-control">
        <div class="btns">
          <div class="btn file"></div>
          <div class="btn unknown"></div>
          <div class="btn volume"></div>
          <div class="btn list" @click="showMusicList = !showMusicList"></div>
        </div>
        <div class="divider"></div>
        <div class="operation">
          <div class="min"></div>
          <div class="close" @click="closeMusic"></div>
        </div>
      </div>
      <!-- 音符 -->
      <div class="music-note">
        <div class="header">{{ formatTime(currentMusicInfo.currentTime) }}</div>
        <div class="content">
          <Wave ref="waveRef" :length="20" :speed="800" />
        </div>
        <div class="footer">正在播放{{ currentMusicInfo?.name }}</div>
      </div>
      <!-- 音乐播放进度 -->
      <div class="music-progress">
        <!-- 通过设置这个的宽度来达到进度条的效果 -->
        <div
          class="progress-bar"
          :style="{ width: `${progressBarWidth}px` }"
        ></div>
        <!-- 进度条 -->
        <div class="range-box">
          <input
            type="range"
            class="input-range"
            :value="currentMusicInfo.currentTime"
            :min="0"
            :max="currentMusicInfo.duration"
            @input="changeProgress"
          />
        </div>
      </div>
      <!-- 控制器 -->
      <div class="music-controller">
        <!-- 播放 重播 暂停 -->
        <div class="reset">
          <!-- 播放  -->
          <div class="play" @click="playMusic" v-show="!isPlay"></div>
          <!-- 暂停 -->
          <div class="pause" @click="pauseMusic" v-show="isPlay"></div>
          <!-- 重播 -->
          <div class="again"></div>
        </div>
        <!-- 上一首 下一首   -->
        <div class="prev">
          <div class="prev-btn" @click="prevOrNextMusic('prev')"></div>
          <div class="next-btn" @click="prevOrNextMusic('next')"></div>
        </div>
        <!-- 静音 -->
        <div class="mute" @click="muteMusic" :class="{ active: isMute }"></div>
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
      <audio
        ref="audioRef"
        :src="currentMusicInfo.url"
        @canplay="onCanplay"
        @timeupdate="onAudioTimeupdate"
        @ended="onAudioEnded"
        :hidden="true"
      />
    </div>
    <!-- 音乐列表 -->
    <div class="music-list" v-show="showMusicList">
      <div class="header">播放列表</div>
      <div class="list-content">
        <!-- 歌单分类 -->
        <div class="description">
          <div class="title">歌单1</div>
          <div class="time">2008-07-20</div>
        </div>
        <!-- 歌单列表 -->
        <div class="list">
          <div
            class="list_item"
            v-for="item in musicList"
            :key="item.index"
            @click="switchPlayMusic(item)"
            :class="{ active: currentMusicInfo.name === item.name }"
          >
            <!-- 预留小箭头空间,当然你也可以设置padding -->
            <div class="list_item_arrow"></div>
            <div class="list_item_index">{{ `${item.index}.` }}</div>
            <div class="list_item_name">{{ item.name }}</div>
            <div class="list_item_time">{{ item.time }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 关闭按钮 -->
    <!-- <div class="closeBtn" @click="closeMusic"></div> -->
  </div>
</template>

<style scoped lang="scss">
.music {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  //   background-color: #fff;
  // 音乐播放状态
  &-status {
    background-image: url("./images/status-bg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 444px;
    height: 322px;
    box-sizing: border-box;
    padding: 12px;
    .music-top-control {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .btns {
        display: flex;
        gap: 8px;
        .btn {
          width: 26px;
          height: 30px;
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
        .file {
          background-image: url("@/assets/control/file.png");
        }
        .unknown {
          background-image: url("@/assets/control/unknown.png");
        }
        .volume {
          background-image: url("@/assets/control/volume.png");
        }
        .list {
          cursor: pointer;
          background-image: url("@/assets/control/list.png");
        }
      }
      .divider {
        width: 4px;
        height: 26px;
        background: url("@/assets/control/divider.png") no-repeat;
        margin: 0 6px;
        margin-right: 8px;
      }
      .operation {
        display: flex;
        align-items: center;
        gap: 12px;
        .min {
          width: 18px;
          height: 3px;
          background-color: #445788;
        }
        .close {
          background: url("@/assets/control/close.png") no-repeat;
          width: 18px;
          height: 18px;
          cursor: pointer;
        }
      }
    }
    // 音符
    .music-note {
      text-align: center;
      margin-top: 10px;
      box-sizing: border-box;
      padding: 0 4px;
      .header {
        font-size: 26px;
        line-height: 26px;
        color: #9dfe9d;
      }
      .content {
        height: 88px;
      }
      .footer {
        text-align: center;
        color: #b5c6e3;
        font-size: 22px;
        line-height: 22px;
        margin-top: 14px;
      }
    }
    // 音乐播放进度
    .music-progress {
      margin-top: 26px;
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
          background: url("@/assets/control/playing.png") no-repeat;
          &:hover {
            background: url("@/assets/control/playing-h.png") no-repeat;
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
  // 音乐列表
  &-list {
    display: flex;
    flex-direction: column;
    width: 442px;
    height: 320px;
    background-image: url("./images/list-bg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .header {
      width: 100%;
      line-height: 50px;
      color: #0a0b0b;
      font-size: 22px;
      text-align: center;
    }
    .list-content {
      width: 100%;
      height: 100%;
      padding: 0 20px;
      padding-bottom: 20px;
      display: flex;
      // 歌单分类
      .description {
        width: 90px;
        text-align: center;
        box-sizing: border-box;
        padding-top: 10px;
        .title {
          font-size: 20px;
          color: #02e602;
        }
        .time {
          font-size: 16px;
          color: #b3d3b3;
        }
      }
      //歌曲列表
      .list {
        flex: 1;
        width: 0;
        box-sizing: border-box;
        margin-left: 14px;
        margin-top: 8px;
        color: #b5c6e3;
        display: flex;
        flex-direction: column;
        font-size: 16px;
        &_item {
          height: 28px;
          display: flex;
          align-items: center;
          cursor: pointer;
          // 偶数行
          &:nth-of-type(even) {
            background-color: #242937;
          }
          &.active {
            background: url("@/assets/control/list-item-hover.png") no-repeat;
            background-size: 100% 100%;
          }
          &:hover {
            background: url("@/assets/control/list-item-hover.png") no-repeat;
            background-size: 100% 100%;
          }
          &_arrow {
            width: 16px;
            height: 16px;
            flex-shrink: 0;
          }
          &_index {
          }
          &_name {
            flex: 1;
          }
          &_time {
            padding-right: 16px;
          }
        }
      }
    }
  }
}
</style>
