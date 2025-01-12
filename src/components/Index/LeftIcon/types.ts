export interface IconItem {
  normal: string;
  selected: string;
  alt: string;
  width?: number;
  height?: number;
  key: string; //应用的key
}
export interface Emits {
  (event: "icon-click", data: IconItem): void;
}
