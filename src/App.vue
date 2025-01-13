<script setup lang="ts">
import { nextTick, onMounted } from "vue";
import Index from "./components/Index/index.vue";
function deviceType() {
  return navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
}
function coverBoxToViewport(boxSelector: string) {
  if (deviceType()) {
    //移动端
    import("./style/styleMobile.scss");
    coverBoxToViewportMobile(boxSelector);
  } else {
    //PC端
    import("./style/stylePC.scss");
    coverBoxToViewportPC(boxSelector);
  }
}
coverBoxToViewport("#app");

function coverBoxToViewportPC(boxSelector: string) {
  console.log("pc端");
  const box = document.querySelector(boxSelector) as any;
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
function coverBoxToViewportMobile(boxSelector: string) {
  console.log("移动端");
  const box = document.querySelector(boxSelector) as any;
  if (!box) {
    console.error("Box not found with the given selector.");
    return;
  }

  // 设计稿的宽高比
  const designWidth = 750;
  const designHeight = 1624;
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

    // 设置transform以缩放盒子
    box.style.transform = `scale(${scaleX}, ${scaleY})`;
    box.style.transformOrigin = "center";

    // 设置 overflow: hidden 来隐藏超出的部分，避免滚动条
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.documentElement.style.margin = "0";
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
