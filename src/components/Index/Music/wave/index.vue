<template>
  <div class="wave" ref="waveRef" :class="{ running: isRunning }">
    <div
      class="wave-bar"
      v-for="(_, index) in divCount"
      :key="index"
      :style="divs[index]"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from "vue";
const isRunning = ref(false); //是否播放动画效果
// 添加一个ref来存储wave容器的宽度
const waveRef = ref<HTMLElement | null>(null);
const divCount = ref(0);

const divs = computed(() => {
  return Array.from({ length: divCount.value }, (_, index) => {
    //随机生成minHeight和maxHeight和持续时间
    //同时也随机minHeight和maxHeight谁更大,
    // const minHeight = 15 + Math.random() * 35;
    const minHeight = 15 + Math.random() * 16; //调整下,不然会超出高度了
    const maxHeight = minHeight + 30 + Math.random() * 20;
    const duration = 1 + Math.random() * 0.6;
    const isDown = Math.random() < 0.5; // Randomly determine animation direction(随机方向)

    return {
      //设置成css变量,后续可以根据优先级被读取到
      "--min-height": `${isDown ? minHeight : maxHeight}px`,
      "--max-height": `${isDown ? maxHeight : minHeight}px`,
      "animation-duration": `${duration}s`,
    };
  });
});
onMounted(() => {
  nextTick(() => {
    // 获取容器元素
    const container = waveRef.value;

    if (container) {
      // 获取容器宽度
      //clientWidth 返回元素的宽度（包括元素宽度、内边距，不包括边框和外边距）
      //offsetWidth 返回元素的宽度（包括元素宽度、内边距和边框，不包括外边距）
      const containerWidth = container.clientWidth;
      const barWidth = 2; // 波浪线的宽度,和css保持一致
      const barGap = 2; // Gap between bars
      // 计算可以容纳的波浪条数量
      divCount.value = Math.floor(containerWidth / (barWidth + barGap));
    }
  });
});
defineExpose({
  start: () => {
    isRunning.value = true;
  },
  stop: () => {
    isRunning.value = false;
  },
});
</script>
<style>
@keyframes volume {
  0% {
    height: var(--min-height);
  }

  100% {
    height: var(--max-height);
  }
}
</style>
<style scoped lang="scss">
.wave {
  height: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 2px; // 添加波浪条之间的间距
  &.running &-bar {
    animation-play-state: running;
  }
  &-bar {
    width: 2px;
    //读取顺序   行内样式 -> 外部样式表 -> style标签 -> 默认值
    height: var(--min-height);
    background-color: #5c6589;
    //alternate 往返效果
    animation: volume 1s ease-in-out infinite alternate;
    animation-play-state: paused;
  }
}
</style>
