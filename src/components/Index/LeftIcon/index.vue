<script setup lang="ts">
import { ref } from "vue";
import type { IconItem, Emits } from "./types";
const emits = defineEmits<Emits>();
const getImageUrl = (name: string) => {
  return new URL(`./images/${name}`, import.meta.url).href;
};
const icons = ref<IconItem[]>([
  {
    normal: "crossfire.png",
    selected: "crossfire_select.png",
    alt: "穿越火线",
    width: 64,
    height: 64,
    key: "crossfire",
  },
  {
    normal: "audio.png",
    selected: "audio_select.png",
    alt: "音乐播放器",
    key: "music",
  },
  {
    normal: "play.png",
    selected: "play_select.png",
    alt: "视频播放器",
    key: "video",
  },
  {
    normal: "pic.png",
    selected: "pic_select.png",
    alt: "图片查看器",
    key: "picShow",
  },
  {
    normal: "ie.png",
    selected: "ie_select.png",
    alt: "IE浏览器",
    width: 70,
    height: 64,
    key: "ie",
  },
  {
    normal: "qq.png",
    selected: "qq.png",
    alt: "QQ",
    width: 40,
    height: 70,
    key: "qq",
  },
].map((item:any) => {
  return {
    ...item,
    normal: getImageUrl(item.normal),
    selected: getImageUrl(item.selected),
  }
}));
// 点击图标
const handleClick = (icon: IconItem) => {
  if (icon.key === "ie") {
    window.open("https://dreamlove.top", "_blank");
  } else if (icon.key === "qq") {
    window.open("https://qq.com", "_blank");
  } else {
    emits("icon-click", icon);
  }
};
</script>

<template>
  <div class="leftIcon">
    <div v-for="(icon, index) in icons" :key="index" class="icon-wrapper">
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
