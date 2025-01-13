// 秒数转换分+秒 秒数保留2位
export const formatTime = (time: number | string | undefined) => {
  if (!time) return "0:00";
  const timeNumber = Number(time);
  const minutes = Math.floor(timeNumber / 60);
  const seconds = Math.floor(timeNumber % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

export function throttle(func: Function, wait: number) {
  let timeout: any = null;
  return function () {
    //@ts-ignore
    let context = this ;
    let args = arguments;
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args);
      }, wait);
    }
  };
}
