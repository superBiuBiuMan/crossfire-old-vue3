<script setup lang="ts">
import { onMounted } from "vue";
import Index from "./components/Index/index.vue";
const keepRatio = () => {
  let ratio = 0; // 定义一个缩放比例
  let screen = window.screen; // 获取窗口对象
  let ua = navigator.userAgent.toLowerCase();
  if (window.devicePixelRatio !== undefined) {
    ratio = window.devicePixelRatio; // 像素大小的比例
  } else if (ua.indexOf("msie")) {
    if (screen.deviceXDPI && screen.logicalXDPI) {
      ratio = screen.deviceXDPI / screen.logicalXDPI;
    }
  } else if (
    window.outerWidth !== undefined &&
    window.innerWidth !== undefined
  ) {
    ratio = window.outerWidth / window.innerWidth; // 外部比例/内部比例：缩放比例
  }
  if (ratio) {
    ratio = Math.round(ratio * 100);
  }
  this.ratio = (ratio / 100).toFixed(2);
  document.body.style.zoom = 1 / this.ratio; // 窗口视图除以缩放比例：即缩放还原
};
onMounted(() => {
  // keepRatio();
  // window.addEventListener("resize", () => {
  //   //监听窗口缩放
  //   keepRatio();
  // });
  coverBoxToViewport("#app");
});
function coverBoxToViewport(boxSelector: string) {
  const box = document.querySelector(boxSelector);
  if (!box) {
    console.error("Box not found with the given selector.");
    return;
  }

  // 设计稿的宽高比
  const designWidth = 1920;
  const designHeight = 1080;
  const designAspectRatio = designWidth / designHeight;

  function resizeBox() {
    // 获取视窗的宽高
    const ww = window.innerWidth;
    const hh = window.innerHeight;

    // 视窗宽高比
    const viewportAspectRatio = ww / hh;

    let scaleX, scaleY;

    if (viewportAspectRatio > designAspectRatio) {
      // 视窗更宽，以视窗宽度为基准
      scaleX = ww / designWidth;
      scaleY = scaleX; // 保持比例
    } else {
      // 视窗更高，以视窗高度为基准
      scaleY = hh / designHeight;
      scaleX = scaleY; // 保持比例
    }

    // 设置 transform 以缩放盒子
    box.style.transform = `translate3d(0%, 0%, 1px) scale(${scaleX}, ${scaleY})`;
    box.style.transformOrigin = "center";

    // 设置 overflow: hidden 来隐藏超出的部分，避免滚动条
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.margin = "0";
    document.body.style.overflow = "hidden";
    document.body.style.margin = "0";
  }

  // 初始化和监听窗口大小变化
  resizeBox();
  window.addEventListener("resize", resizeBox);
}
</script>

<template>
  <Index />
</template>

<style scoped></style>
