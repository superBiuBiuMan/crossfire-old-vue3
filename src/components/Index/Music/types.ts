export interface MusicInfo {
  index: number; //索引
  url: string; //音乐地址
  name: string; //音乐名称
  time: string; //音乐时长(纯展示用)
  duration?: number; //音乐时长(秒)
  currentTime: number; //当前播放时间(秒)
}
