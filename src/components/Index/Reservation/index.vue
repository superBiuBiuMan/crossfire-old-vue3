<script lang="ts" setup>
import type { ApplicationCommonEmits } from "../types";
const emits = defineEmits<ApplicationCommonEmits>();
const closeReservation = () => {
  emits("close");
};
</script>
<template>
  <div>
    <div class="reservation">
      <div class="header">
        <div class="close" @click="closeReservation"></div>
      </div>
      <!-- 预约奖励 -->
      <div class="reward"></div>
      <!-- 预约按钮 -->
      <div class="btns">
        <div class="reservationBtn"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.reservation {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 542px;
  height: 664px;
  background: url("./images/hj-bg.png") no-repeat center center;
  background-size: 100% 100%;
  box-sizing: border-box;
  padding: 0 22px;
  .header {
    height: 28px;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    .close {
      height: 100%;
      width: 40px;
      background: url("./images/close-btn.png") no-repeat center center;
      transition: all 0.3s ease;
      cursor: pointer;
      &:hover {
        filter: brightness(1.3);
      }
    }
  }
  .reward {
    width: 100%;
    height: 490px;
    background: url("./images/rewards-table.png") no-repeat center center;
  }
  .btns {
    position: absolute;
    bottom: 6px;
    width: calc(100% - 44px);
    display: flex;
    justify-content: center;
    .reservationBtn {
      width: 126px;
      height: 46px;
      background: url("./images/submit-btn.png") no-repeat center center;
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover {
        filter: brightness(1.3);
      }
    }
  }
}
</style>
