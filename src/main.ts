import { createApp } from "vue";
import "./style/reset.scss";
import App from "./App.vue";

//@ts-ignore
import 'swiper/css';

//
// // 判断设备是移动端还是pc端,如果是返回移动端设备信息
// const deviceType = () => {
//     return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
//     );
// };
// (() => {
//     const mobileDeviceInfo = deviceType()
//     if(mobileDeviceInfo){
//         //移动端
//         import("./style/styleMobile.scss");
//     }else{
//         //PC端
//         import("./style/stylePC.scss")
//     }
// })()



createApp(App).mount("#app");
