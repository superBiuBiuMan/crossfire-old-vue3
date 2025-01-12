<script setup lang="ts">
import { ref, computed } from "vue";
import type { IconItem, Emits } from "./types";
const emits = defineEmits<Emits>();
const icons = ref<IconItem[]>([
  {
    normal: "./images/crossfire.png",
    selected: "./images/crossfire_select.png",
    alt: "穿越火线",
    width: 64,
    height: 64,
    key: "crossfire",
  },
  {
    normal: "./images/audio.png",
    selected: "./images/audio_select.png",
    alt: "音乐播放器",
    key: "music",
  },
  {
    normal: "./images/play.png",
    selected: "./images/play_select.png",
    alt: "视频播放器",
    key: "video",
  },
  {
    normal: "./images/pic.png",
    selected: "./images/pic_select.png",
    alt: "图片查看器",
    key: "picShow",
  },
  {
    normal: "./images/ie.png",
    selected: "./images/ie_select.png",
    alt: "IE浏览器",
    width: 70,
    height: 64,
    key: "ie",
  },
  {
    normal: "./images/qq.png",
    selected: "./images/qq.png",
    alt: "QQ",
    width: 40,
    height: 70,
    key: "qq",
  },
]);
const iconsShow = computed(() => {
  return icons.value.map((icon) => {
    return {
      ...icon,
      normal: new URL(icon.normal, import.meta.url).href,
      selected: new URL(icon.selected, import.meta.url).href,
    };
  });
});
// 点击图标
const handleClick = (icon: IconItem) => {
  if (icon.key === "ie") {
    window.open("https://cf.qq.com/main.shtml", "_blank");
  } else if (icon.key === "qq") {
    window.open("https://qq.com", "_blank");
  } else {
    emits("icon-click", icon);
  }
};
</script>

<template>
  <div class="leftIcon">
    <div v-for="(icon, index) in iconsShow" :key="index" class="icon-wrapper">
      <img
        :src="icon.normal"
        :style="{ width: icon.width + 'px', height: icon.height + 'px' }"
        :alt="icon.alt"
        class="icon normal"
      />
      <img
        @click="handleClick(icon)"
        :src="icon.selected"
        :style="{ width: icon.width + 'px', height: icon.height + 'px' }"
        :alt="icon.alt"
        class="icon selected"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.leftIcon {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  .icon-wrapper {
    position: relative;
    cursor: pointer;
    width: 74px;
    height: 74px;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      position: absolute;
    }

    .icon.selected {
      opacity: 0;
    }

    &:hover {
      .normal {
        opacity: 0;
      }
      .selected {
        opacity: 1;
      }
    }
  }
}
</style>
