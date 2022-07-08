
<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted } from 'vue'
let timeData = reactive([])
</script>
<template>
  <div class="time-point">
    <div class="line"></div>
    <div class="point-list">
      <div class="point"></div>
    </div>
  </div>
</template>
<style lang='less' scoped>
.time-point {
  z-index: 1;
  width: 100%;
  position: relative;

  .line {
    z-index: -1;
    background-color: rgb(148, 171, 186);
    height: .9375rem;
    border-radius: .4688rem;
    position: absolute;
    width: 100%;
    top: .9375rem;
    left: 0;
    box-sizing: border-box;
  }

  .point-list {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.8125rem;

    .point {
      z-index: 2;
      width: 1.5625rem;
      height: 1.5625rem;
      border-radius: .7813rem;
      background-color: rgb(252, 252, 252);
      border: .1875rem solid #014675;
      box-sizing: border-box;
      cursor: pointer;

    }
  }

}
</style>