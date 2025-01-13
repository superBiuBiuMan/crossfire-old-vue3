+ **源码下载地址: **[https://github.com/superBiuBiuMan/crossfire-old-vue3](https://github.com/superBiuBiuMan/crossfire-old-vue3)
+ **版权来自穿越火线,项目仅供参考学习!!!**

# 效果
+ **源码下载地址: **[https://github.com/superBiuBiuMan/crossfire-old-vue3](https://github.com/superBiuBiuMan/crossfire-old-vue3)
+ **预览地址:** [https://crossfire.123916.xyz/](https://crossfire.123916.xyz/)
+ **官网效果:** [https://www.cfhuodong.com/2025-1-https://cf.qq.com/cp/a20241227reserve/index.html](https://www.cfhuodong.com/2025-1-https://cf.qq.com/cp/a20241227reserve/index.html)

![](.\READMEIMAGE\1736745212429-e97fe2f1-b96a-40db-b6c9-93088fe14f9a.png)

![](.\READMEIMAGE\1736745219078-fd860154-50c7-4284-bd23-3630761c8511.png)

![](.\READMEIMAGE\1736745225959-282f452e-21ef-456d-a5ee-69a4f0f8cdfa.png)

* 移动端有的问题,哈哈,不调整了

# 用到的库
![](.\READMEIMAGE\1736502866700-4631ad61-c89d-4ff2-b993-648742d8570e.png)

## 重要的库
| 名称 | 描述 | 链接 |
| --- | --- | --- |
| JQuery | 不用说了 | |
| mmd.videoPlayer.min.js | <font style="color:rgb(51, 51, 51);">milo 旗下的-是适用于移动端H5的轻量视频播放组件</font> | [https://tgideas.qq.com/doc/frontend/component/m/mmd.html](https://tgideas.qq.com/doc/frontend/component/m/mmd.html) |
| milo.js | <font style="color:rgb(51, 51, 51);">milo 是一款前端JS库，包含了双端登录、弹出层、TAB切换等常用组件</font> | [https://tgideas.qq.com/doc/frontend/component/common/milo.html](https://tgideas.qq.com/doc/frontend/component/common/milo.html) |
| milo.gbk.min.js | <font style="color:rgb(51, 51, 51);">同上</font> |  |
| swiper-3.4.2.min.js | <font style="color:rgb(51, 51, 51);">轮播图</font> |  |
| preloadjs.min.js | createj旗下的内容 | [https://createjs.com/](https://createjs.com/) |
|  Howler.js | 适合现代网络的音频库。 | [https://howlerjs.com/](https://howlerjs.com/) |


## 不重要的库
| 名称 | 描述 | 链接 |
| --- | --- | --- |
| sequence.js | <font style="color:rgb(51, 51, 51);">他们自己写的js库(当前二级目录有具体代码)</font> |  |
| loadImgList.js | <font style="color:rgb(51, 51, 51);">代码图片素材的js代码</font> |  |
| index.js | 预约主逻辑 |  |
| apptLogic.js | <font style="color:rgb(51, 51, 51);">预约逻辑</font> |  |
| yuyue.js | <font style="color:rgb(51, 51, 51);">预约逻辑</font> |  |
| html2canvas.js | <font style="color:rgb(51, 51, 51);">转图片</font> |  |
| record.js | <font style="color:rgb(51, 51, 51);">预约话术逻辑</font> |  |
| atReport.js | <font style="color:rgb(51, 51, 51);">上报的,腾讯内部用的应该是</font> |  |




# 穿越火线说明
+ 素材图片一张的大小为82宽度,这里有8个格子,所以最小的宽度是82*8 = 656px,实际情况可以大一些,

![](.\READMEIMAGE\1736510726212-3ff5b1a9-0cd1-4d4a-ac02-aa819c0c7d31.png)

+ 当然，这个还是要手动去调整，最好打开控制台，使用小键盘调整

![](.\READMEIMAGE\1736511160400-1cef3678-206e-4004-bf43-5ce786467a24.png)





# 音乐播放器
+ 顺带一体,他们开发人员将play和pause搞错了好像

![](.\READMEIMAGE\1736653384233-b67e633e-13e7-4b4d-ab42-390717e78e5e.png)

## 进度条关键代码
![](.\READMEIMAGE\1736567082533-49fdc0e7-783a-4088-bbfe-017c54c1ec73.png)

## 设置进度条控制块的样式
+ 关键属性是`**-webkit-slider-thumb**`**,**然后我们拿到了素材图片,设置下就好了,下面是源代码,当然,你也可以将图片下载到本地,
+ 注意,设置滑块需要先消除<font style="color:rgb(27, 27, 27);">基于操作系统主题的原生外观,否者你设置了thumb也不会生效</font>
    - [appearance说明: https://developer.mozilla.org/zh-CN/docs/Web/CSS/appearance](https://developer.mozilla.org/zh-CN/docs/Web/CSS/appearance)

```javascript
.input-range {
        appearance: none;
        background: none;
        border: none;
        outline: none;
}
.input-range::-webkit-slider-thumb {
    width: 44px;
    height: 22px;
    background-image: url(//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/btn/process-btn.png?=t1735836008125);
}
```

+ 更多的内容可以看这里
    - [https://juejin.cn/post/7074774487815684110](https://juejin.cn/post/7074774487815684110)

```javascript
::-webkit-slider-container {
  /*可以修改容器的若干样式*/
}
::-webkit-slider-runnable-track {
  /*可以修改轨道的若干样式*/
}
::-webkit-slider-thumb {
  /*可以修改滑块的若干样式*/
}

```

## 音符律动(音波音浪)效果怎么做
+ 可以看到,当播放的时候律动效果展示,暂停后再继续播放会以之前的位置开始跳跃展示,并且波动效果不和音调有关系,也就是一个写死的动画

![](.\READMEIMAGE\1736731405690-45dd9428-81d9-4a14-aa6b-0a633961f19b.gif)

+ 翻看下代码

```css

function initVisualizer() {
    const visualizer = document.getElementById("visualizer");
    const barWidth = 2; // Width of each bar
    const barGap = 3; // Gap between bars
    const containerWidth = visualizer.clientWidth;
    const barCount = Math.floor(containerWidth / (barWidth + barGap)); // Calculate number of bars

    visualizer.innerHTML = ""; // Clear existing bars

    for (let i = 0; i < barCount; i++) {
        const bar = document.createElement("div");
        bar.className = "bar";

        const isDown = Math.random() < 0.5; // Randomly determine animation direction

        // Set random initial height between 15% and 50%
        const minHeight = 15 + Math.random() * 35;
        const maxHeight = minHeight + 30 + Math.random() * 20;

        bar.style.setProperty(
            "--min-height",
            `${isDown ? minHeight : maxHeight}%`
        );
        bar.style.setProperty(
            "--max-height",
            `${isDown ? maxHeight : minHeight}%`
        );
        bar.style.animationDuration = `${0.8 + Math.random() * 0.6}s`;
        // bar.style.marginRight = `${barGap}px`;

        visualizer.appendChild(bar);
    }
}
```

+ 仿照着着写一下,基础逻辑就是为每一个竖条设置独一无二的最小高度,最大高度,和动画持续时间
+ index.vue

```css
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

```

+ 效果

![](.\READMEIMAGE\1736744421714-d26c3293-49ad-4558-9baa-69ce171476ef.png)





## css变量读取的顺序?先从行内样式读取?  
在 CSS 中，CSS 变量（即自定义属性）是按照特定的优先级顺序被解析的，优先级的顺序如下：

1. **行内样式**：行内样式的优先级最高，浏览器会优先读取和应用内联样式中的 CSS 变量。如果你在 HTML 元素的 `style` 属性中定义了 CSS 变量，这些变量会优先于其他来源的定义。
2. **外部样式表**：如果没有在行内样式中定义，浏览器会查看外部或嵌入式的样式表（包括 `@import` 导入的样式表）中的 CSS 变量定义。
3. `**<style>**`** 标签**：内嵌样式（通过 `<style>` 标签定义的 CSS）会被应用，并且在应用过程中会考虑其优先级。
4. **默认值**：如果在某些地方没有定义 CSS 变量，那么它们可能会使用默认值，或者在 `@keyframes` 等规则中，使用无效的值会导致样式不生效。

在你的示例中，`@keyframes` 规则中的 `var(--min-height)` 和 `var(--max-height)` 会按照以下顺序解析：

### 解析顺序：
+ 首先，它会尝试从 **行内样式** 中读取 `--min-height` 和 `--max-height`（如果定义了的话）。
+ 如果在行内样式中找不到，它会去查看 **外部或内嵌样式表** 中是否定义了这些 CSS 变量。
+ 如果样式表中也没有定义这些变量，`@keyframes` 动画规则会使用默认值（即 `var(--min-height)` 和 `var(--max-height)` 会被视为无效变量，导致动画效果不生效）。

### 示例代码：
```html
<div style="--min-height: 100px; --max-height: 200px;">
  <!-- 内容 -->
</div>

<style>
@keyframes volume {
    0% {
        height: var(--min-height);
    }

    100% {
        height: var(--max-height);
    }
}

.animated-div {
  width: 100px;
  background-color: lightblue;
  margin: 10px;
  animation: volume 2s ease-in-out forwards;
}
</style>
```

### 关键点：
+ 在上面的代码中，`<div>` 元素的 `style` 属性定义了 `--min-height` 和 `--max-height`，这些变量会被 `@keyframes` 中的 `height` 动画读取到。
+ 如果没有在 `div` 中定义这些 CSS 变量，那么动画会因找不到这些变量而无法正常工作。

### 总结：
+ **优先级**：行内样式 > 外部样式表和 `<style>` 标签 > 默认值。
+ `**@keyframes**` 会在动画的运行时计算变量的值，因此必须确保相关的 CSS 变量在动画运行之前已经定义和赋值，否则动画将无法生效。

# 图片列表
+ 关键是Swiper的实例如何获取
    - 可以参考文档[https://swiperjs.com/vue#swiper-events](https://swiperjs.com/vue#swiper-events)
    - 安装

```javascript
yarn add swiper
```

```javascript
<swiper @swiper="onSwiper"></swiper>

// 获取实例
import type { Swiper as SwiperType } from "swiper";
const swiperInstance = ref<SwiperType>();


const handleSwiper = (type: "prev" | "next") => {
  if (!swiperInstance.value) return;

  if (type === "prev") {
    //上一张
    swiperInstance.value.slidePrev();
  } else {
    //下一张
    swiperInstance.value.slideNext();
  }
};
```



# 怎么解决缩放的问题,
+ 官网的效果ctrl加滚轮是无法缩放的,并且中间的形状一直保持在中间
+ 我们找下,发现在div#app下面有一个属性,会随着页面变化而变化
    - `transform:translate3d(0%, 0%, 1px) scale(0.8, 0.8)`
    - `transform-origin:center center;`

![](.\READMEIMAGE\1736728139557-07ffb000-f30f-4b6e-9ca0-a945719a9db2.png)

+ 发现是下面这一段代码变更调整的,JQuery版本的

```javascript
function coverBoxToViewport(boxSelector) {
        const box = $(boxSelector);
        if (box.length === 0) {
            console.error("Box not found with the given selector.");
            return;
        }

        // 设计稿的宽高比
        const designWidth = 1920;
        const designHeight = 1080;
        const designAspectRatio = designWidth / designHeight;

        function resizeBox() {
            // 获取视窗的宽高
            const ww = $(window).width();
            const hh = $(window).height();

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
            box.css({
                transform: translate3d(0%, 0%, 1px) scale(${scaleX}, ${scaleY}),
                transformOrigin: "center",
            });

            // 设置 overflow: hidden 来隐藏超出的部分，避免滚动条
            $("html, body").css({
                overflow: "hidden",
                margin: "0",
            });
        }

        // 初始化和监听窗口大小变化
        resizeBox();
        $(window).on("resize", resizeBox);
    } 
```

+ 纯js版本

```javascript
function coverBoxToViewport(boxSelector) {
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

```

+ 这样子就会影响之前设置的`.desktop-main`的定位了,所以我们调整下,设置和官网的一样

```css
.desktop-main{
  top: 90px;
  left: 390px;
  width: 1112px;
  height: 808px;
}

```

+ 再设置为他们设计稿的尺寸,人家注释就说明了嘛,设计稿尺寸是1920 * 1080,

```css
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #000;
}
/* 确保应用在任何屏幕尺寸下都保持1920x1080的显示比例 */
/* 始终保持应用在视窗中居中显示 */
/* 适合全屏展示的应用，如游戏界面或展示页面 */
#app {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1920px;
  height: 1080px;
  margin: -540px 0 0 -960px;
  will-change: transform;
}

# 为什么这么设置请看下方

1# html和body的样式：
width: 100% 和 height: 100%：确保页面占满整个视窗
overflow: hidden：隐藏超出视窗范围的内容，防止出现滚动条
background: #000：设置背景色为黑色
2#  app容器的样式：
position: absolute 和 top: 50%, left: 50%：将应用容器定位在页面的正中心
width: 1920px 和 height: 1080px：设置固定的宽高（1920x1080分辨率）
margin: -540px 0 0 -960px：通过负边距进行居中偏移调整
-540px 是高度的一半（1080/2）
-960px 是宽度的一半（1920/2）
will-change: transform：提示浏览器该元素可能会有变换，优化渲染性能
```

+ 我们使用scss就用scss

```css
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #000;
}
/* 确保应用在任何屏幕尺寸下都保持1920x1080的显示比例 */
/* 始终保持应用在视窗中居中显示 */
/* 适合全屏展示的应用，如游戏界面或展示页面 */
$design-width: 1920px;
$design-height: 1080px;

#app {
  position: absolute;
  top: 50%;
  left: 50%;
  width: $design-width;
  height: $design-height;
  margin: calc(#{$design-height} / -2) 0 0 calc(#{$design-width} / -2);
  will-change: transform;
}

```

+ 我们试试看效果,可以看到

![](.\READMEIMAGE\1736729121667-4621a129-03b8-4f18-be47-547931f51288.gif)







# 添加了遮罩背景,无法点击图标了
+ 添加下`pointer-events:none`即可



# 无法自动播放音频
+ 调用play方法出现控制台错误
    - Uncaught (in promise) NotAllowedError: play() failed because the user didn't interact with the document first. [https://goo.gl/xX8pDD](https://goo.gl/xX8pDD)
+ 解决
    - 添加mute属性即可,就是让他静音,示例如下

```css
    <video
      ref="enterVideoRef"
      class="enter_video"
      :controls="false"
      muted
      src="@/assets/video/enter.mp4"
      @canplay="handleVideoCanPlay"
    ></video>
```







# 他们的代码内容
## sequence.js
```javascript
window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

function sequence(opt) {
  var drawWrap = document.querySelector(opt.el);
  var useMode = 2;
  var ctx = null;
  var imgsdom = null;
  var list = opt.list;
  var count = list.length; // 修正为总长度
  var loadNumber = 0;
  var sprite = {};
  var frameNumber = -1;
  var lastUpdate = +new Date();
  var fps = opt.fps || 30;

  if (useMode === 1) {
    ctx = drawWrap.getContext('2d');
    drawWrap.width = opt.width;
    drawWrap.height = opt.height;
  }

  for (var i = 0; i < list.length; i++) {
    var img = new Image();
    img.src = list[i];
    img.crossOrigin = "Anonymous";
    (function(index) {
      drawWrap.appendChild(img);
      img.style.display = 'none';
      img.onload = function() {
        sprite[index] = this;
        loadNumber = index;
        if (typeof opt.progress === 'function') {
          opt.progress(loadNumber / (count - 1)); // 更新进度
        }
        if (loadNumber === count - 1) {
          imgsdom = document.querySelectorAll(opt.el + ' img');
          drawImg();
          if (typeof opt.complete === 'function') {
            opt.complete();
          }
        }
      };
    })(i);
  }

  function drawImg() {
    var newUpdate = +new Date();
    if (newUpdate - lastUpdate > 1000 / fps) {
      // 更新帧号
      frameNumber++;
      if (frameNumber >= count) {
        if (opt.loop) {
          // 循环播放，重置到第一帧
          frameNumber = 0;
        } else {
          // 播放结束，隐藏最后一帧，触发结束回调
          imgsdom[frameNumber - 1].style.display = 'none';
          if (typeof opt.playEnd === 'function') {
            opt.playEnd();
          }
          return; // 停止动画
        }
      }

      if (useMode === 2) {
        // 显示当前帧，隐藏上一帧
        if (frameNumber > 0) {
          imgsdom[frameNumber - 1].style.display = 'none';
        } else {
          // 如果是循环的第一帧，将最后一帧隐藏
          imgsdom[count - 1].style.display = 'none';
        }
        imgsdom[frameNumber].style.display = 'block';
      } else {
        // Canvas 绘制模式
        ctx.clearRect(0, 0, drawWrap.width, drawWrap.height);
        ctx.drawImage(sprite[frameNumber], 0, 0, drawWrap.width, drawWrap.height);
      }

      lastUpdate = newUpdate;
    }

    requestAnimFrame(drawImg);
  }
}
```

## loadImgList.js
```javascript
window.loadImgList = [
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/add-btn.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/close-btn.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/copy-btn.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/appoint-count-bg.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/destory-bg.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/fault/1.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/fault/2.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/fault/3.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/fault/4.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/fault/5.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/float-window.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/inner-shadowing.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/light.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/main-bar.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/mask.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/network-icon.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/notice-bar.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/qq-icon.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/shortcut/cf-h.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/shortcut/cf.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/shortcut/img-h.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/shortcut/img.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/shortcut/music-h.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/shortcut/music.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/shortcut/video-h.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/shortcut/video.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/source-icon.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/temp.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/window.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/hjLogin/close-btn.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/hjLogin/hj-login-bg.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/hjLogin/hj-subscribe-btn-h.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/hjLogin/hj-subscribe-btn.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/hjSubscribe/hj-bg.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/hjSubscribe/input-box1.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/hjSubscribe/input-box2.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/hjSubscribe/jddp-name.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/hjSubscribe/mc-tips.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/hjSubscribe/rewards-table.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/hjSubscribe/submit-btn.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/control-bg.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/1.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/10.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/11.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/12.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/13.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/14.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/15.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/16.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/17.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/18.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/19.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/2.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/20.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/21.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/22.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/23.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/24.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/25.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/26.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/27.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/3.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/4.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/5.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/6.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/7.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/8.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/9.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/next-h.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/next.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/prev-h.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/prev.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/wrapper-bg.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/invite-bg.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/line.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/loading.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/login-popup.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/login-title.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/btn/close-h.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/btn/close.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/btn/control-bg1.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/btn/control-bg2.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/btn/divider.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/btn/file.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/btn/list.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/btn/next-h.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/btn/next.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/btn/pause-h.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/btn/pause.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/btn/playing-h.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/btn/playing.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/btn/prev-h.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/btn/prev.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/btn/process-btn.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/btn/scroll-btn.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/btn/scroll-down.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/btn/scroll-up.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/btn/source-mute-h.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/btn/source-mute.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/btn/source-open-h.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/btn/source-open.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/btn/stop-h.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/btn/stop.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/btn/unknown.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/btn/volume.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/btn/volumn-btn.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/list-bg.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/list-item-hover.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/process-bg-h.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/process-bg.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/status-bg.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/music/volumn-bg.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/qq-icon-h.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/qq-icon.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/role.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/start.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/video/adorn1.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/video/adorn2.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/video/bar-next-btn.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/video/bar-prev-btn.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/video/close-btn.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/video/icon-bg1.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/video/icon-bg2.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/video/icon-bg3-h.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/video/icon-bg3.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/video/line.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/video/list-h.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/video/logo.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/video/mute-play-btn.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/video/mute-stop-btn.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/video/next-btn.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/video/pause-btn.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/video/play-btn.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/video/prev-btn.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/video/progress-handle.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/video/sjx1.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/video/sjx2.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/video/stop-btn.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/video/video-bg.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/video/video-img.jpg?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/video/volume-handle.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/video/volume-slider.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/wechat-icon-h.png?=t1735835345270',
  '//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/wechat-icon.png?=t1735835345270'
];


window.faultImgList = [
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/fault/1.png?=t1735835345270",
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/fault/2.png?=t1735835345270",
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/fault/3.png?=t1735835345270",
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/destory/fault/4.png?=t1735835345270",
]

window.imageViewList = [
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/1.jpg?=t1735835345270",
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/2.jpg?=t1735835345270",
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/3.jpg?=t1735835345270",
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/4.jpg?=t1735835345270",
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/5.jpg?=t1735835345270",
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/6.jpg?=t1735835345270",
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/7.jpg?=t1735835345270",
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/8.jpg?=t1735835345270",
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/9.jpg?=t1735835345270",
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/10.jpg?=t1735835345270",
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/11.jpg?=t1735835345270",
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/12.jpg?=t1735835345270",
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/13.jpg?=t1735835345270",
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/14.jpg?=t1735835345270",
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/15.jpg?=t1735835345270",
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/16.jpg?=t1735835345270",
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/17.jpg?=t1735835345270",
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/18.jpg?=t1735835345270",
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/19.jpg?=t1735835345270",
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/20.jpg?=t1735835345270",
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/21.jpg?=t1735835345270",
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/22.jpg?=t1735835345270",
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/23.jpg?=t1735835345270",
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/24.jpg?=t1735835345270",
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/25.jpg?=t1735835345270",
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/26.jpg?=t1735835345270",
  "//game.gtimg.cn/images/cf/cp/a20241227reserve/pc/image/list/27.jpg?=t1735835345270",
]
```



## index.js
```javascript
function openPop(className) {
  if (!className) return;
  $(".application").show();
  $(".application > .pop." + className).show();
}
// openPop('share-popup')

// 打开公用弹窗
function commonPop(text) {
  $(".common-popup .alter-text p").text(text);
  openPop("common-popup");
}

const processWidths = isMobile ? [30, 40] : [22, 44];
const videoWidths = isMobile ? [41, 44] : [41, 44];

function changeProgress($progressPlayed, percent, padding, thumbWidth, $input) {
  const totalWidth = parseInt(
    ($input || $progressPlayed.parent().children("#music-progress")).css(
      "width"
    )
  );
  $progressPlayed.css(
    "width",
    `${Math.floor(percent * (totalWidth - thumbWidth)) +
       padding +
       thumbWidth / 2
     }px`
  );
}

function closePop() {
  $(".application").hide();
  $(".application > .pop").hide();
}

function initVisualizer() {
  const visualizer = document.getElementById("visualizer");
  const barWidth = 2; // Width of each bar
  const barGap = 3; // Gap between bars
  const containerWidth = visualizer.clientWidth;
  const barCount = Math.floor(containerWidth / (barWidth + barGap)); // Calculate number of bars

  visualizer.innerHTML = ""; // Clear existing bars

  for (let i = 0; i < barCount; i++) {
    const bar = document.createElement("div");
    bar.className = "bar";

    const isDown = Math.random() < 0.5; // Randomly determine animation direction

    // Set random initial height between 15% and 50%
    const minHeight = 15 + Math.random() * 35;
    const maxHeight = minHeight + 30 + Math.random() * 20;

    bar.style.setProperty(
      "--min-height",
      `${isDown ? minHeight : maxHeight}%`
    );
    bar.style.setProperty(
      "--max-height",
      `${isDown ? maxHeight : minHeight}%`
    );
    bar.style.animationDuration = `${0.8 + Math.random() * 0.6}s`;
    // bar.style.marginRight = `${barGap}px`;

    visualizer.appendChild(bar);
  }
}

function initMusicPlayer() {
  const playlist = [
    {
      name: "Metrohead",
      url: "https://cf.lv.game.qq.com/dis_kt_b280c0dca695b9f721e7768bab9b2f42_1735811699/0b53zeaccaaatuaehilwbrt6psodeheqaiia.f0.mp3",
      time: "02:58",
    },
    {
      name: "Cyber Thug",
      url: "https://cf.lv.game.qq.com/dis_kt_ec180a5af07c28f418f6d898dbafb2bb_1735811692/0b53b4aciaaaliaemrlwyft6od6deqhqajaa.f0.mp3",
      time: "02:51",
    },
    {
      name: "Unbound",
      url: "https://cf.lv.game.qq.com/dis_kt_567b23889847372baf4fb478aa60e27d_1735811685/0b53faaceaaapuaeb3lwbrt6okgdeiuaaiqa.f0.mp3",
      time: "02:01",
    },
    {
      name: "strategy now",
      url: "https://cf.lv.game.qq.com/dis_kt_0e4a42d1944de32220cf46cd899994c9_1735811678/0b53mmaceaaag4aebn3wdnt6oy6dejrqaiqa.f0.mp3",
      time: "01:50",
    },
    {
      name: "《穿越火线》游戏主题曲",
            url: "https://cf.lv.game.qq.com/dis_kt_1587e1a11e613382719dfea73b2d0595_1735888214/0b535macsaaau4akiwtx4zt6p26dfhvqakia.f0.mp3",
            time: "03:27",
        },
    ];

    let currentIndex = 0; // Current track index
    let sound; // Howler.js sound instance

    function loadTrack(index) {
        if (sound) {
            sound.unload(); // Unload the current audio
        }
        sound = new Howl({
            src: [playlist[index].url],
            html5: !isMobile,
            onplay: function () {
                playPauseButton.addClass("playing");
                $("#visualizer").addClass("running");
                requestAnimationFrame(updateProgress);
            },
            onend: nextTrack,
            onstop: () => {
                playPauseButton.removeClass("playing");
                $("#visualizer").removeClass("running");
                requestAnimationFrame(updateProgress);
            },
            onpause: () => {
                playPauseButton.removeClass("playing");
                $("#visualizer").removeClass("running");
                requestAnimationFrame(updateProgress);
            },
        });
        updateNowPlaying(index);
        requestAnimationFrame(updateProgress);
    }

    // Update the currently playing track
    function updateNowPlaying(index) {
        $(".now-playing").text(`正在播放 - ${playlist[index].name}`);
        $(".playlist-item").removeClass("active");
        $(".playlist-item").eq(index).addClass("active");
    }

    // Render the playlist
    function renderPlaylist() {
        const playlistContainer = $(".playlist");
        playlistContainer.empty(); // Clear the existing playlist

        playlist.forEach((track, index) => {
            const item = $(`<div class="playlist-item" title="${track.name
                }" data-index="${index}">
          <span>${index + 1}. ${track.name}</span>
          <span>${track.time}</span>
      </div>`);

            item.on("click", function () {
                const musicName = $(this).attr("title");
                pttClick.send(
                    "btn",
                    "clickPlayListItem",
                    "点击播放列表-" + musicName
                );
                currentIndex = $(this).data("index");
                loadTrack(currentIndex);
                sound.play();
                playPauseButton.addClass("playing");
            });

            playlistContainer.append(item);
        });

        updateNowPlaying(currentIndex);
        requestAnimationFrame(updateProgress);
    }

    // Initialize controls
    const playPauseButton = $("#playPause");
    const progress = $("#music-progress");
    const volume = $("#music-volume");
    const timeDisplay = $("#music-time-display");
    const muteButton = $("#mute");
    const prevButton = $("#prev");
    const nextButton = $("#next");
    let previousVolume = 1; // Store previous volume level for mute toggle

    // Play/pause button event
    playPauseButton.on("click", function () {
        if (sound.playing()) {
            sound.pause();
            pttClick.send("btn", "musicPlayerCtrl", "音乐暂停");
            // playPauseButton.removeClass('playing');
        } else {
            sound.play();
            // playPauseButton.addClass('playing');
            pttClick.send("btn", "musicPlayerCtrl", "音乐开始/继续播放");
        }
    });

    // Stop button event
    $(".music-player #stop").on("click", function () {
        sound.stop();
        pttClick.send("btn", "musicPlayerStop", "音乐停止");
        // playPauseButton.removeClass('playing');
        // requestAnimationFrame(updateProgress);
    });

    $(".music-player .close").on("click", function () {
        sound.stop();
        $(".playlist-container").show();
        // playPauseButton.removeClass('playing');
    });

    $(".music-player .window-button").on("click", function () {
        pttClick.send("btn", "musicPlayerCloseList", "关闭播放列表");
        $(".playlist-container").hide();
    });

    $(".music-player .btn.list").on("click", function () {
        const display = $(".playlist-container").css("display");
        $(".playlist-container").css(
            "display",
            display === "none" ? "block" : "none"
        );
        pttClick.send("btn", "musicPlayerToggleList", "切换播放列表状态");
    });

    // Progress bar events
    progress.on("input", function () {
        if (sound.playing()) {
            sound.pause();
            // playPauseButton.removeClass('playing');
        }
        const seekTime = sound.duration() * (progress.val() / 100);
        sound.seek(seekTime);
    });

    progress.on("change", function () {
        if (!sound.playing()) {
            sound.play();
            pttClick.send("btn", "dragMusicProgress", "拖动音乐进度条");
            // playPauseButton.addClass('playing');
            requestAnimationFrame(updateProgress);
        }
    });

    // Volume slider event
    volume.on("input", function () {
        sound.volume(volume.val());
    });

    // Mute button event
    muteButton.on("click", function () {
        if (!sound.mute()) {
            previousVolume = sound.volume();
            sound.mute(true);
            pttClick.send("btn", "musicPlayerMute", "音乐静音");
            muteButton.addClass("muted");
        } else {
            sound.mute(false);
            pttClick.send("btn", "musicPlayerUnmute", "音乐取消静音");
            muteButton.removeClass("muted");
        }
    });

    // Previous track button
    prevButton.on("click", previousTrack);

    // Next track button
    nextButton.on("click", nextTrack);

    // Update progress bar and time display
    function updateProgress() {
        const seek = sound.seek() || 0;
        const percent = seek / sound.duration() || 0;
        progress.val(percent * 100 || 0);
        changeProgress(
            $(".progress-container .progress-played"),
            percent,
            ...processWidths
        );
        timeDisplay.text(formatTime(seek));
        if (sound.playing()) {
            requestAnimationFrame(updateProgress);
        }
    }

    // Format time in mm:ss
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs.toString().padStart(2, "0")}`;
    }

    // Play the next track
    function nextTrack() {
        currentIndex = (currentIndex + 1) % playlist.length;
        loadTrack(currentIndex);
        sound.play();
        // playPauseButton.addClass('playing');
    }

    // Play the previous track
    function previousTrack() {
        currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
        loadTrack(currentIndex);
        sound.play();
        // playPauseButton.addClass('playing');
    }

    // Initialize the playlist and load the first track
    renderPlaylist();
    loadTrack(currentIndex);
}

function initVideoPlayer() {
    class VideoPlayer {
        constructor() {
            // jQuery选择器
            this.$videoPlayer = $("#videoPlayer");
            this.$playPauseBtn = $("#playPauseBtn");
            this.$stopBtn = $("#stopBtn");
            this.$prevBtn = $("#prevBtn");
            this.$nextBtn = $("#nextBtn");
            this.$progressInput = $("#progressInput");
            this.$muteBtn = $("#muteBtn");
            this.$volumeInput = $("#volumeInput");
            this.$videoList = $("#videoList");
            this.$rewindBtn = $("#rewindBtn");
            this.$forwardBtn = $("#forwardBtn");

            this.currentVideoIndex = 0;
            this.videos = [
                {
                    title: "正式官宣！全新FPS网游 《穿越火线》 即将上线",
                    src: "https://cf.lv.game.qq.com/dis_kt_7dec27524b5d90a851e81c6298c73909_1735979808/0b53tqacwaaasmanqkdydft6phgdfooaakya.f0.mp4",
                },
                {
                    title: "震撼来袭！《穿越火线》全新CG首发",
                    src: "https://cf.lv.game.qq.com/dis_kt_3b1c33135e38522db3e393d96780c407_1735485126/0b53vaabaaaab4ahm73rfft6pkgdccuaaeaa.f0.mp4",
                },
                {
                    title: "轻松一刻！《穿越火线》搞笑CG",
                    src: "https://cf.lv.game.qq.com/dis_kt_161176d63e6b91fefdbf38b327192208_1735485116/0b53veabaaaaaeahm7trfft6pkodccuqaeaa.f0.mp4",
                },
            ];

            this.initializePlayer();
            this.setupEventListeners();
            // 初始化音量控制
            this.initializeVolume();
            this.setupPlayerControls();
        }

        initializePlayer() {
            this.createPlaylist();
            this.loadVideo(0);
        }

        createPlaylist() {
            const self = this;
            $.each(this.videos, function (index, video) {
                const $li = $("<li>").on("click", () =>
                    self.loadVideo(index, true)
                );

                // 创建标题和时间的容器
                const $titleSpan = $('<span class="video-title">').text(
                    video.title
                );
                const $durationSpan = $('<span class="video-duration">').text(
                    "--:--"
                );

                // 将标题和时间添加到列表项
                $li.append($titleSpan)
                    .append($durationSpan)
                    .appendTo(self.$videoList);
            });
        }

        updateDuration(index, duration) {
            this.$videoList
                .find("li")
                .eq(index)
                .find(".video-duration")
                .text(duration);
        }

        loadVideo(index) {
            this.currentVideoIndex = index;
            this.$videoPlayer.attr("src", this.videos[index].src);
            this.$videoPlayer[0].load();
            this.updatePlaylistUI();

            this.$progressInput.val(0);
            changeProgress(
                $(".video-player .progress-played"),
                0,
                ...videoWidths,
                $("#progressInput")
            );
            $('.video-player .title').text(this.videos[index].title);
            // this.$progressInput[0].style.setProperty('--progress', '0%');
            this.$playPauseBtn
                .find("i")
                .removeClass("vd-play")
                .addClass("vd-pause");

            // 添加一个标志来判断是否需要自动播放
            const shouldAutoPlay =
                arguments[1] !== undefined ? arguments[1] : false;

            this.$videoPlayer.one("loadedmetadata", () => {
                this.updateProgress();
                const duration = this.$videoPlayer[0].duration;
                const formattedDuration = this.formatTime(duration);
                this.updateDuration(index, formattedDuration);
                this.updatePlaylistUI();

                this.loadOtherVideosDuration();

                // 如果需要自动播放
                if (shouldAutoPlay) {
                    this.$videoPlayer[0].play();
                    this.$playPauseBtn
                        .find("i")
                        .addClass("vd-play")
                        .removeClass("vd-pause");
                }
            });
        }

        loadOtherVideosDuration() {
            this.videos.forEach((video, index) => {
                if (index !== this.currentVideoIndex) {
                    const tempVideo = document.createElement("video");
                    tempVideo.src = video.src;

                    $(tempVideo).one("loadedmetadata", () => {
                        const duration = tempVideo.duration;
                        const formattedDuration = this.formatTime(duration);
                        this.updateDuration(index, formattedDuration);
                    });
                }
            });
        }

        formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = Math.floor(seconds % 60);
            if (minutes >= 60) {
                const hours = Math.floor(minutes / 60);
                const remainingMinutes = minutes % 60;
                return `${hours}:${remainingMinutes
                    .toString()
                    .padStart(2, "0")}:${remainingSeconds
                        .toString()
                        .padStart(2, "0")}`;
            } else {
                return `${minutes}:${remainingSeconds
                    .toString()
                    .padStart(2, "0")}`;
            }
        }

        updatePlaylistUI() {
            this.$videoList
                .find("li")
                .removeClass("active")
                .eq(this.currentVideoIndex)
                .addClass("active");
        }

        setupEventListeners() {
            const self = this;

            // 播放/暂停按钮
            this.$playPauseBtn.on("click", () => this.togglePlay());

            // 停止按钮
            this.$stopBtn.on("click", () => this.stopVideo());

            // 上一个/下一个视频
            this.$prevBtn.on("click", () => this.playPrevious());
            this.$nextBtn.on("click", () => this.playNext());

            // 进度条控制
            this.$videoPlayer.on("timeupdate", () => this.updateProgress());
            this.$progressInput.on("input", (e) => this.setProgress(e));

            // 修改视频结束事件监听
            this.$videoPlayer.on("ended", () => {
                this.$playPauseBtn
                    .find("i")
                    .removeClass("vd-play")
                    .addClass("vd-pause");
                // 自动播放下一个视频
                this.playNext();
            });

            // 量控制
            this.$muteBtn.on("click", () => this.toggleMute());
            this.$volumeInput.on("input", (e) => this.setVolume(e));

            // 左右按钮控制进度条
            this.$rewindBtn.on("click", () => this.skipTime(-3));
            this.$forwardBtn.on("click", () => this.skipTime(3));
        }

        togglePlay() {
            const video = this.$videoPlayer[0];
            if (video.paused) {
                video.play();
                this.$playPauseBtn
                    .find("i")
                    .addClass("vd-play")
                    .removeClass("vd-pause");
            } else {
                video.pause();
                this.$playPauseBtn
                    .find("i")
                    .addClass("vd-pause")
                    .removeClass("vd-play");
            }
        }

        playPrevious() {
            const newIndex =
                (this.currentVideoIndex - 1 + this.videos.length) %
                this.videos.length;
            this.loadVideo(newIndex, true); // 传入 true 表示需要自动播放
        }

        playNext() {
            // 检查是否是最后一个视频
            if (this.currentVideoIndex === this.videos.length - 1) {
                // 如果是后一个，直接切换到第一个视频
                this.loadVideo(0, true);
            } else {
                // 否则切换到下一个视频
                const newIndex = this.currentVideoIndex + 1;
                this.loadVideo(newIndex, true);
            }
        }

        updateProgress() {
            const video = this.$videoPlayer[0];
            if (video.duration && !isNaN(video.duration)) {
                const percent = (video.currentTime / video.duration) * 100;
                this.$progressInput.val(percent);
                changeProgress(
                    $(".video-player .progress-played"),
                    video.currentTime / video.duration,
                    ...videoWidths,
                    $("#progressInput")
                );
                // this.$progressInput[0].style.setProperty('--progress', `${percent}%`);
            }
        }

        setProgress(e) {
            const video = this.$videoPlayer[0];
            const percent = e.target.value;
            video.currentTime = (percent / 100) * video.duration;
            changeProgress(
                $(".video-player .progress-played"),
                percent / 100,
                ...videoWidths,
                $("#progressInput")
            );
            // e.target.style.setProperty('--progress', `${percent}%`);
        }

        toggleMute() {
            const video = this.$videoPlayer[0];
            video.muted = !video.muted;

            if (video.muted) {
                this.$muteBtn
                    .addClass("mute-stop-btn")
                    .removeClass("mute-play-btn");
                this.$volumeInput.val(0);
            } else {
                this.$muteBtn
                    .addClass("mute-play-btn")
                    .removeClass("mute-stop-btn");
                // 恢复到静音前的音量值
                const previousVolume = video.volume * 100;
                this.$volumeInput.val(previousVolume);
            }
        }

        setVolume(e) {
            const video = this.$videoPlayer[0];
            const volume = e.target.value / 100;
            video.volume = volume;

            // 更新静音按钮状态
            if (volume === 0) {
                this.$muteBtn
                    .addClass("mute-stop-btn")
                    .removeClass("mute-play-btn");
            } else {
                this.$muteBtn
                    .addClass("mute-play-btn")
                    .removeClass("mute-stop-btn");
            }
        }
        skipTime(seconds) {
            const video = this.$videoPlayer[0];
            const newTime = video.currentTime + seconds;

            if (newTime < 0) {
                video.currentTime = 0;
            } else if (newTime > video.duration) {
                video.currentTime = video.duration;
            } else {
                video.currentTime = newTime;
            }
        }

        stopVideo() {
            const video = this.$videoPlayer[0];
            video.pause();
            video.currentTime = 0;
            this.$playPauseBtn
                .find("i")
                .addClass("vd-pause")
                .removeClass("vd-play");
            this.updateProgress();
        }

        initializeVolume() {
            const video = this.$videoPlayer[0];
            video.volume = 1;
            this.$volumeInput.val(100);
        }
        setupPlayerControls() {
            $(".open-video-player").click(() => {
                // $('.video-player').fadeIn();
                // 重新加载第一个视频
                this.loadVideo(0);
                // 重置播放器状态
                this.$videoPlayer[0].currentTime = 0;
                this.$progressInput.val(0);
                changeProgress(
                    $(".video-player .progress-played"),
                    0,
                    ...videoWidths,
                    $("#progressInput")
                );
                // this.$progressInput[0].style.setProperty('--progress', '0%');
                this.$playPauseBtn
                    .find("i")
                    .removeClass("vd-play")
                    .addClass("vd-pause");
            });
            // 关闭播放器
            $("#closePlayer").click(() => {
                // $('.video-player').fadeOut();
                // 停止视频播放
                this.stopVideo();
            });
        }
    }
    new VideoPlayer();
}

function initImageSwiper() {
    var $swiper = $(".img-swiper .swiper-container .swiper-wrapper");
    $swiper.empty();
    let html = "";
    imageViewList.forEach(function (uri) {
        html += `<div class="swiper-slide"><img src="${uri}" alt=""></div>`;
    });
    $swiper.append(html);
    var mySwiper = new Swiper(".img-swiper .swiper-container", {
        loop: true,
        prevButton: ".swiper-btn.prev-btn",
        nextButton: ".swiper-btn.next-btn",
        observer: true,
        observeParents: true,
        resistanceRatio: 0,
    });
}
function verifyPhoneCode() {
    let timer = null;
    const COUNTDOWN = 10;
    // 手机号验证
    function isValidPhone(phone) {
        return /^1[3-9]\d{9}$/.test(phone);
    }

    // 验证码验证
    function isValidCode(code) {
        return /^\d{6}$/.test(code);
    }

    // 倒计时函数
    function startCountdown($btn) {
        let count = COUNTDOWN;
        $btn.prop("disabled", true);
        $btn.text(`${count}秒后重新获取`);

        timer = setInterval(() => {
            count--;
            if (count <= 0) {
                clearInterval(timer);
                timer = null;
                $btn.prop("disabled", false);
                $btn.text("获取验证码");
            } else {
                $btn.text(`${count}秒后重新获取`);
            }
        }, 1000);
    }

    // 获取验证码
    $(".get-code").click(function () {
        if ($(this).prop("disabled")) {
            return;
        }
        const phone = $('.input-box[type="tel"]').val().trim();
        sendcode(1);
        /*接入发送验证码功能*/
        /*
      if (!isValidPhone(phone)) {
        alert('请输入正确的手机号码');
        return;
      }
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
      // 模拟发送验证码
      setTimeout(() => {
        alert('验证码已发送到您的手机');
        startCountdown($(this));
      }, 500);
    */
    });
    // 授权手机
    $(".bind-phone").click(function () {
        if ($(this).prop("disabled")) {
            return;
        }
        weui.confirm('授权后，您将允许我们通过手机短信语音电话等方式，向您推送CF或CFHD高清竞技大区相关福利活动、最新版本内容等信息', {
            className: 'diy-weui-dialog',
            buttons: [{
              label: '取消',
              type: 'default',
              onClick: function () { console.log('no') }
            }, {
              label: '确认授权',
              type: 'primary',
              onClick: function () {
                bindphone(1);
              }
            }]
        })
    });

    // 提交预约
    $(".submit-btn").click(function () {
        //添加功能整合
        Milo.emit(flow_1098772);
    });
    //领取奖励
    $(".get-gift").click(function () {
        //添加功能整合
        Milo.emit(flow_1098978);
    });

    $(".verify-input").on("input", function (e) {
        if (e.target.value.length) {
            $(".get-auth").removeClass("black");
        } else {
            $(".get-auth").addClass("black");
        }
    });

    // 退订链接
    $(".unsubscribe").click(function () {
        dmunsubscribe();
    });

    // 清理定时器
    $(window).on("unload", function () {
        if (timer) {
            clearInterval(timer);
        }
    });
    var activityLink = {
        gw: ['https://cf.qq.com/cp/a20241218yuandan/pc/index.html', 'https://cf.qq.com/cp/a20241224jansecond/pc/index.shtml'],
        nq: ['https://cf.qq.com/cp/a20241218yuandan/pc/neiqian.html', 'https://cf.qq.com/cp/a20241224jansecond/pc/neiqian.shtml'],
        zh: ['https://cf.qq.com/cp/a20241218yuandan/m/index.html', 'https://cf.qq.com/cp/a20241224jansecond/h5/h5.shtml']
    }
    $('.new-activity').css('cursor', 'pointer');
    $('.new-activity').on('click', function() {
        var isNQ = window.location.href.indexOf("nq.html") >= 0;
        var isZH = window.location.href.indexOf("zh.html") >= 0;
        var link = '';
        var linkIdx = 0;
        // 获取当前日期
        var currentDate = new Date();
    
        // 设置1.11的日期
        var comparisonDate = new Date(currentDate.getFullYear(), 0, 11);
    
        // 比较当前日期是否大于等于1.11
        if (currentDate >= comparisonDate) {
            linkIdx = 1;
        } else {
            linkIdx = 0;
        }
        if (isNQ) {
            link = activityLink.nq[linkIdx];
        } else if (isZH) {
            link = activityLink.zh[linkIdx];
        } else {
            link = activityLink.gw[linkIdx];
        }
        window.open(link, '_blank');
    })
}

function bindEvents() {
    // 显示用户信息
    $(".userinfo-arrow-btn").on("click", function () {
        $(this).toggleClass("active");
    });
    $(".shortcut-wrapper .shortcut").on("click", function () {
        const className = $(this).attr("data-type");
        const title = $(this).attr("title");
        pttClick.send("btn", "openPop", title);
        if (className === "qq") {
            return
        }
        if (className === "ie") {
            window.open('https://cf.qq.com/main.shtml?ADTAG=EventBlackTop.button.btnav.ecter', '_blank');
            return
        }
        openPop(className);
        if (className === "music-player") {
            initVisualizer();
        }
    });

    $(".pop").on("click", ".close", function () {
        pttClick.send("btn", "closePop", "关闭弹窗");
        // const popName = $(this).parents('.pop').attr('class');
        // if(popName.includes('music-player')) {
        //   destroyVisualizer();
        // }
        closePop();
    });
    //复制链接
    $("#copy_btn").click(async function () {
        const linkInput = document.getElementById("link_to_copy");
        const text = linkInput.value;
        try {
            await navigator.clipboard.writeText(text);
            alert("复制成功");
        } catch (err) {
            console.error("复制失败:", err);
            // 如果 Clipboard API 失败，回退到传统方法
            try {
                linkInput.select();
                document.execCommand("copy");
                alert("复制成功");
            } catch (err) {
                alert("复制失败，请手动复制");
            }
        }
    });
    //怀旧登录器
    $(".appot-count-window").on("click", function () {
        openPop("hj-login-popup");
    });
    $('.notice-btn').on('click', function () {
        weui.toast('授权后，您将允许我们通过手机短信语音电话等方式，向您推送CF或CFHD高清竞技大区相关福利活动、最新版本内容等信息', 3000)
    })
}
function initMainContent() {
    initMusicPlayer();
    initVideoPlayer();
    initImageSwiper();
    bindEvents();
    verifyPhoneCode();
}

function desktopContent() {
    $(".desktop").fadeIn(500, function () {
        /* sequence({
            el: "#fault",
            width: isMobile ? 750 : 1112,
            height: isMobile ? 1011 : 808,
            loop: true,
            fps: 15,
            list: faultImgList,
        }); */
    });
}

function initEnterVideo() {
    const videoPlayer = new MMD.VideoPlayer({
        videoElement: $("#enterVideo")[0],
        src: isMobile
            ? "//game.gtimg.cn/images/cf/cp/a20241227reserve/media/video/enter-m.mp4?=t1735893977540"
            : "//game.gtimg.cn/images/cf/cp/a20241227reserve/media/video/enter.mp4?=t1735893977540",
        visibilityHandle: false,
        muted: true,
    });
    videoPlayer.preload();
    videoPlayer.on(MMD.VideoEvent.START, () => {
        $(".loading-page").fadeOut(500, function () {
            $(".enter-video").show();
        });
    });
    // 视频播放完成；
    videoPlayer.on(MMD.VideoEvent.END, () => {
        desktopContent();
    });
    return videoPlayer;
}

function loadResource(onComplete) {
    var queue = new createjs.LoadQueue({
        preferXHR: true,
        crossOrigin: true,
    });
    queue.setMaxConnections(10);
    queue.loadManifest(loadImgList);

    queue.on("complete", function () {
        $(".loading-word").fadeOut(500, function () {
            $(".start-btn").fadeIn();
            onComplete();
        });
    });
}

loadResource(function () {
    $(document).ready(function () {
        const videoPlayer = initEnterVideo();
        initMainContent();
        const firstEnter = localStorage.getItem("first_enter");
        if (firstEnter) {
            $(".loading-page").hide();
            desktopContent();
        } else {
            $(".loading-page").show();
        }
        $(".start-btn").on("click", function () {
            videoPlayer.play();
            localStorage.setItem("first_enter", "1");
        });
        $(".restart-btn").on("click", function () {
            $(".desktop").fadeOut();
            // $('.enter-video').fadeIn()
            videoPlayer.play();
        });
    });
});
```

## apptLogic.js
```javascript
/**是否已预约 */
var isBooked = false;
/**是否已经登录 */
var isLogined = true;

//登录成功后
function afterLogin() {
  //已预约 查看邀请
  closePop();
  if (isBooked) {
    openPop('invite-viewer');
    $('.pop.login-popup').hide();
    return;
  }
  //未预约
  openPop('login-popup');
  $('#logined').show().siblings().hide();
}

//预约成功后
function afterBook() {
  closePop();
  openPop('login-popup');
  $('#subscribeSucceed').show().siblings().hide();
}

$(document).ready(function () {
  // //怀旧手机号预约
  $('#hj_subscribe_btn').on('click', function () {
    closePop();

    if (!isLogined) {
      //未登录
      openPop('login-popup');
      $('.hj-login-popup').hide();
      return;
    }

    if (!isBooked) {
      //未预约
      openPop('hj-subscribe');
      $('.hj-login-popup').hide();
      return;
    }

    //已预约，查看邀请
    openPop('invite-viewer');
  });



  $('.pop.invite-viewer .add-btn').on('click', function () {
    //邀请
    if (isMobile) {
      //打开邀请tip弹层
    } else {
      openPop('copy-viewer');
      $('.pop.invite-viewer').hide();
    }
  });
})
```

## yuyue.js
```javascript
//检查是否登录
var nowhref = window.location.href;
if (nowhref.indexOf("nq.html") >= 0) {
    var isQC = false;
} else {
    var isQC = true;
}
Milo.checkLogin({
    iUseQQConnect: isQC, //如果当前活动使用的互联登录,请将改参数设置true
    success: function (user) {
        if (Milo.isMobile()) $("#milo-logout").hide();
        var userInfo = user && user.userInfo;
        $("#milo-logined").show();
        $("#milo-unlogin").hide();
        $("#milo-userUin").text(userInfo.userUin);
        if (Milo.isMobile()) $("#milo-logout").hide();
        let nickName = userInfo.nickName;
        $("#milo-userUin").html(nickName);
		Milo.emit(flow_1101262);
        queryBindArea();
    },
    fail: function (res) {
        //todo login
		Milo.emit(flow_1101262);
        $(".userinfo-arrow-btn").addClass("active");
    },
});
// qq登录
function qqlogin() {
    if (isQC) {
        if (Milo.isMobile()) {
            Milo.mobileLoginByQQConnect();
        } else {
            Milo.loginByQQConnect();
        }
    } else {
        if (Milo.isMobile()) {
            Milo.mobileLoginByQQ();
        } else {
            Milo.loginByQQ();
        }
    }
}

// 退出
$("#milo-logout").click(function () {
    Milo.logout({
        callback: function () {
            $("#milo-logined").hide();
            $("#milo-unlogin").show();
        },
    });
    window.location.reload();
});

/*****************大区********************/

// 查询绑定大区
function queryBindArea() {
    var flow_query = {
        actId: "693120",
        token: "68b24f",
        loading: false, // 开启loading浮层,默认不开启
        sData: {
            query: true,
        },
        success: function (res) {
            if (res.data) {
                $("#milo-binded").show();
                $("#milo-unbind").hide();
                $("#milo-areaName,.share-service").text(res.data.areaName);
                $("#milo-roleName,.share-nickname").text(res.data.roleName);
            }
			Milo.emit(flow_1098787);
        },
        fail: function (res) {
            if (res.iRet === -9998 || res.iRet === "-9998") {
                return;
            }
            $("#milo-binded").hide();
            $("#milo-unbind").show();
            console.log("查询绑定大区fail", res);
        },
    };
    Milo.emit(flow_query);
}

$("#milo-commitArea, #milo-changeArea").click(function () {
    commitBindArea();
});

// 提交绑定大区
function commitBindArea() {
    var flow_commit = {
        actId: "693120",
        token: "f39729",
        loading: false, // 开启loading浮层,默认不开启
        sData: {
            query: false,
        },
        success: function (res) {
            if (res.data) {
                $("#milo-binded").show();
                $("#milo-unbind").hide();
                $("#milo-areaName,.share-service").text(res.data.areaName);
                $("#milo-roleName,.share-nickname").text(res.data.roleName);
            }
			Milo.emit(flow_1098787);
        },
        fail: function (res) {
            if (res.iRet === -9998 || res.iRet === "-9998") {
                return;
            }
            $("#milo-binded").hide();
            $("#milo-unbind").show();
            console.log("提交绑定大区fail", res);
        },
    };
    Milo.emit(flow_commit);
}
//预约
var flow_1098772 = {
    actId: "693120",
    token: "e6af34",
    sData: {},

    success: function (res) {
        setTimeout(() => {
            weui.toast('恭喜您预约成功~');
        }, 500);
        Milo.emit(flow_1098787);
		Milo.emit(flow_1101262);
    },
    fail: function (res) {
        if (res.iRet == 101) {
            qqlogin();
        } else if (res.iRet == 99998) {
            commitBindArea();
        } else {
            weui.toast(res.sMsg);
            /* closePop();
            commonPop(res.sMsg); */
        }
    },
};

//初始化
var flow_1098787 = {
    actId: "693120",
    token: "422093",
    sData: {},

    success: function (res) {
        record.init(); //初始化分享图片
        if (res.details.modRet.sOutValue1 > 0) {
            $(".submit-btn").hide();
            $(".subscribe-disable,.get-gift").show();
			var yyresult = res.details.modRet.sOutValue5;
			if (yyresult != 0) {
				yyrecord = yyresult.split("_");
				record.descIdx = yyrecord[0];
				record.picIdx = yyrecord[1];
				$("#my-file-second").show()
				$("#my-file-first").hide()
				record.initDescAndPic();
			} else {
				$("#my-file-second").hide()
				$("#my-file-first").show()
			}
        }
        if (res.details.modRet.sOutValue3 > 0) {
            $(".get-gift").hide();
            $(".get-gift-disable").show();
        } else {
            $(".get-gift").show();
            $(".get-gift-disable").hide();
        }
		if(res.details.modRet.sOutValue4>0){
			$(".share-subscribe-number").text(
				"您是怀旧服第" + res.details.modRet.sOutValue4 + "个预约玩家"
			);
		}
        
    },
    fail: function (res) {
        if (res.iRet == 101) {
            qqlogin();
        } else if (res.iRet == 99998) {
            commitBindArea();
        }
    },
};
//初始化-不带登录
var flow_1101262 = {
  actId: '693120',
  token: '35117e',
  sData: {
  },
  
	success: function(res){
      $("#appoint-count").text(res.details.modRet.sOutValue2);
  },
  fail: function(res){
        if(res.iRet == 101){
            //todo 登录态失效，需要重新调登录方法 （开发自行实现）
        } else if (res.iRet == 99998) {
            // todo 调用提交绑定大区方法
        }
  }
}
//领取预约奖励
var flow_1098978 = {
    actId: "693120",
    token: "90d8e2",
    sData: {},

    success: function (res) {
        weui.toast(res.sMsg);
        Milo.emit(flow_1098787);
    },
    fail: function (res) {
        if (res.iRet == 101) {
            qqlogin();
        } else if (res.iRet == 99998) {
            commitBindArea();
        } else {
            weui.toast(res.sMsg);
        }
    },
};

//领取迷彩套装
var flow_1098775 = {
    actId: "693120",
    token: "b502c0",
    sData: {},

    success: function (res) {
        closePop();
        commonPop(res.sMsg);
    },
    fail: function (res) {
        if (res.iRet == 101) {
            qqlogin();
        } else if (res.iRet == 99998) {
            commitBindArea();
        } else {
            weui.toast(res.sMsg);
        }
        //console.log(res);
    },
};
//记录黑话&头像
var flow_1100125 = {
    actId: "693120",
    token: "f0bef1",
    sData: {"dmid":0,"dmid1":1},
    loading: false,
    success: function (res) {
		Milo.emit(flow_1098787);
	},
    fail: function (res) {
        if (res.iRet == 101) {
            qqlogin();
        } else if (res.iRet == 99998) {
            commitBindArea();
        }else{
			weui.toast(res.sMsg);
		}
    }
};
amsCfg_1004838 = amsCfg_1004839 = {
    iAMSActivityId: "608967", // AMS活动号
    activityId: "592766", // 模块实例号
    sData: { phone: "", code: "", iActId: "", sService: "" },
    _everyRead: true,
    sNeedSubmitPopDiv: false,
    onBeginGetGiftEvent: function () {
        return 0; // 抽奖前事件，返回0表示成功
    },
    onGetGiftFailureEvent: function (callbackObj) {
        // 抽奖失败事件
        weui.toast(callbackObj.sMsg);
    },
    onGetGiftSuccessEvent: function (callbackObj) {
        // 抽奖成功事件
        var packageLen = callbackObj.iPackageId
            ? callbackObj.iPackageId.split(",")
            : "";
        if (packageLen && packageLen.length > 1) {
            alert(callbackObj.sMsg);
            return;
        }
        weui.toast(callbackObj.sMsg);
    },
};
amsCfg_1004837 = {
    iAMSActivityId: "608967", // AMS活动号
    activityId: "592766", // 模块实例号
    sData: { phone: "", code: "", iActId: "", sService: "" },
    _everyRead: true,
    sNeedSubmitPopDiv: false,
    onBeginGetGiftEvent: function () {
        return 0; // 抽奖前事件，返回0表示成功
    },
    onGetGiftFailureEvent: function (callbackObj) {
        // 抽奖失败事件
        weui.toast(callbackObj.sMsg);
    },
    onGetGiftSuccessEvent: function (callbackObj) {
        // 抽奖成功事件
		weui.toast('发送成功~');
        $(".bind-phone").removeClass("black");
    },
};
//手机号码填写
function sendcode(id) {
    var phoneNum = $("#phoneNum" + id).val();
    if (phoneNum) {
        amsCfg_1004837.sData.phone = phoneNum;
        amsSubmit(608967, 1004837);
    } else {
        // closePop();
        // commonPop("请输入正确的手机号码！");
        weui.toast('请输入正确的手机号码！')
    }
}
function bindphone(id) {
    var phoneNum = $("#phoneNum" + id).val();
    var codeNum = $("#codeNum" + id).val();
    if (phoneNum && codeNum) {
        amsCfg_1004838.sData.phone = phoneNum;
        amsCfg_1004838.sData.code = codeNum;
        amsCfg_1004838.sData.iActId = 689039;
        amsCfg_1004838.sData.sService = "CF";
        amsSubmit(608967, 1004838);
    } else {
        weui.toast('请输入正确的手机号码和验证码后再授权！')
        // closePop();
        // commonPop("请输入正确的手机号码和验证码后再授权！");
    }
}

function dmunsubscribe() {
    confirm("您确定要退订吗？", function () {
        amsSubmit(608967, 1004839);
    });
}
window.confirm = function (msg, callback, callback1, callback2) {
    need("util.modalDialog", function (Dialog) {
        Dialog.confirm(msg, {
            onConfirm: function () {
                typeof callback == "function"
                    ? callback()
                    : console.log("no callback");
            },
            onCancel: function () {
                typeof callback1 == "function"
                    ? callback1()
                    : console.log("no callback1");
            },
            onClose: function () {
                typeof callback1 == "function"
                    ? callback2()
                    : console.log("no callback2");
            },
        });
    });
};
```

## record.js
```javascript
var record = {
    name: "",
    arename: "",
    descIdx: 0, //初始化描述索引
    picIdx: 1, //初始化头像索引
    yuyenum: "", //当前预约名次
    descArr: [
        "三亿鼠标的枪战梦想",
        "两黄两水",
        "马来狗马来狗 按住左键不放手",
        "银色换大炮 迷彩换大炮",
        "自雷国密",
        "找哥哥收徒弟",
        "战队收人只要90后",
        "爆破三禁",
        "中路对狙",
        "斜角AK",
        "运输船solo",
        "左手狙神",
        "kkkkkkkkk",
        "1861",
        "33主道",
        "按F抢治疗",
        "哥哥发把枪",
        "把ACE踢了",
        "一回合杀10个",
        "网吧五连坐 从来没赢过",
        "一动不动是王八",
        "按G获取加特林",
    ],
    init: function () {
        var self = this;
        if (pageName == "zh") {
            $(".save-tips").addClass("save-tips-zh");
        }
        if (pageName == "nq") {
            $(".save-tips").hide();
        }
        self.bindEvent();
        self.initDescAndPic();
        $("#refresh-btn-desc,#refresh-btn-avatar").on("click", function () {
            var type = $(this).attr("data-type");
            var index = self.refresh(type);
            if (type == "avatar") {
                self.picIdx = index;
                flow_1100125.sData.dmid1 = self.picIdx;
                $(".share-avatar img").attr(
                    "src",
                    "//game.gtimg.cn/images/cf/cp/a20241227reserve/common/avatar/" +
                        index +
                        ".jpg"
                );
            } else {
                self.descIdx = index;
                flow_1100125.sData.dmid = self.descIdx;
                $(".text-items-content .text-items").text(
                    record.descArr[index - 1]
                );
            }
        });
    },
    //初始黑话和头像
    initDescAndPic: function () {
        const self = this;
        var url =
            "https://game.gtimg.cn/images/cf/cp/a20241227reserve/common/avatar/" +
            self.picIdx +
            ".jpg";
        $(".share-avatar img").attr("src", url);
        $(".text-items-content .text-items").text(
            self.descArr[self.descIdx - 1]
        );
    },
    bindEvent: function () {
        const self = this;
        const img = $("#share-popup-img")[0];
        $(".subscribe-disable").on("click", function () {
            closePop();
            const className = $(this).attr("data-type");
            openPop(className);
        });
        $(".my-file").off("click").on("click", function () {
            closePop();
            const className = $(this).attr("data-type");
            openPop(className);
            console.log("self.picIdx", self.picIdx);
            console.log("self.descIdx", self.descIdx);
            if (className == "share-popup") {
                self.convertToImage(img).then((src) => {
                    console.log("src", src);
                    $("#share-loading").hide();
                    $("#share-img").show();
                    $("#share-img").attr("src", src);
                });
            }
        });
        //点击生成档案  self.picIdx self.descIdx 两个值保存
        $(".create-btn")
            .off("click")
            .on("click", function () {
                // console.log("self.picIdx", self.picIdx);
                // console.log("self.descIdx", self.descIdx);
                closePop();
                const className = $(this).attr("data-type");
                openPop(className);
                self.convertToImage(img).then((src) => {
                    console.log("src", src);
                    $("#share-loading").hide();
                    $("#share-img").show();
                    $("#share-img").attr("src", src);
                });
                Milo.emit(flow_1100125);
            });
        //再次编辑
        $(".edit-btn").on("click", function () {
            closePop();
            const className = $(this).attr("data-type");
            openPop(className);
        });
    },
    convertToImage: function (container) {
        const _width = container.offsetWidth;
        const _height = container.offsetHeight;
        const ops = {
            _width,
            _height,
            backgroundColor: null,
            useCORS: true,
            allowTaint: false,
        };
        return html2canvas(container, ops).then((canvas) => {
            return canvas.toDataURL("image/png");
        });
    },
    getRandomNumber: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    //刷新文案
    refresh: function (type) {
        if (type == "avatar") {
            //img
            return this.getRandomNumber(1, 11);
        } else {
            //text
            return this.getRandomNumber(1, 22);
        }
    },
};
```

