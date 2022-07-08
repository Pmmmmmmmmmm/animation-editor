<script setup lang="ts">
import {
  ref,
  reactive,
  // toRefs,
  // onBeforeMount,
  // onMounted,
  watch
} from 'vue'
// import Bezier from '@/utils/Bezier.js'

const animation = reactive({
  alternate: false,
  duration: 0,
})
watch(animation, (val) => {
  console.log(val.duration);

})






// let animationString = ref('')
// function insertStyleSheetRule(keyFrameText: string) {
//   // let sheets = document.styleSheets
//   // if (sheets.length == 0) {
//   //   let style = document.createElement('style');
//   //   style.appendChild(document.createTextNode(""));
//   //   document.head.appendChild(style);
//   // }
//   // //要动态生成不同的anmation,所以要把前面创建的相同anmation给删了
//   // let reg = /(?<=@keyframes\s+?)(.+?)(?=\s+?{)/
//   // let match = ruleText.match(reg)
//   // let name
//   // match ? name = match[0] : null
//   // let ss: number | null = null
//   // let st: number | null = null
//   // if (name) {
//   //   for (let i in sheets) {
//   //     for (let k in sheets[i].rules) {
//   //       if (sheets[i].rules[k].name == name) {
//   //         ss = parseInt(i)
//   //         st = parseInt(k)//每次只传一个属性，所有表里只能有一个同名
//   //       }
//   //     }
//   //   }
//   //   if (ss !== null) {
//   //     sheets[ss].deleteRule(st)
//   //   }
//   // }
//   // let sheet = sheets[ss ? ss : sheets.length - 1] as CSSStyleSheet
//   // sheet.insertRule(ruleText, sheet.rules ? sheet.rules.length : sheet.cssRules.length);
//   const style = document.createElement("style")
//   style.setAttribute("type", "text/css")
//   document.head.appendChild(style)
//   const sheet = style.sheet
//   sheet && sheet.insertRule(keyFrameText, 0)
// }
// console.log(animationString, insertStyleSheetRule('123'));








</script>
<template>
  <header>
    <div class="title">Animation</div>
    <div class="toolbar"></div>
  </header>
  <div class="content">
    <div class="setting-box">
      <div class="animation-setting">
        <span>duration</span>
        <el-slider v-model="animation.duration" :max='15' />
        <div class="btn">mode</div>
        <el-switch v-model="animation.alternate" active-text="alternate" />
        <div class="btn">infinite</div>
        <div class="btn"></div>
      </div>
      <div class="keyframe-setting"></div>
    </div>
    <div class="show-box">
      <div class="background">
        <div class="animation-target"></div>
      </div>
    </div>
  </div>
</template>
<style lang='less' scoped>
header {
  padding: 0 1.25rem;
  height: 3.125rem;
  line-height: 3.125rem;
  font-size: 2.5rem;
  background-color: #425c89;
  color: beige;
}

.content {
  height: calc(100vh - 3.125rem);
  background-color: beige;
  display: flex;
  box-sizing: border-box;
  gap: 2.4rem;
  padding: 2.4rem;

  .setting-box {
    flex-grow: 1.8;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    .animation-setting {
      padding: 2.4rem;
      border-radius: .875rem;
      background-color: #fffbe8;
      ;
    }

    .keyframe-setting {
      flex: 1;
      padding: 2.4rem;
      border-radius: .875rem;
      background-color: #fffbe8;
      ;
    }
  }

  .show-box {
    flex-grow: 1;
    display: flex;

    .background {
      margin: auto;
      min-width: 16rem;
      width: 100%;
      min-height: 30rem;
      height: 100%;
      border-radius: .875rem;
      display: flex;
      perspective: 50rem;
      background:
        -webkit-linear-gradient(top, transparent calc(2.5rem - .0625rem), #7e7e7e 2.5rem),
        -webkit-linear-gradient(left, #fff calc(2.5rem - .0625rem), #7e7e7e 2.5rem);
      background-size: 2.5rem 2.5rem;
      background-position: center;
      box-shadow: 0rem 0rem .75rem 0rem inset #000000ad;

      .animation-target {
        border: .0625rem solid #000000;
        margin: auto;
        border-radius: .875rem;
        width: 12rem;
        height: 12rem;
        background-color: #99c0e2;
        animation: identifier 2s cubic-bezier(.68, -0.55, .27, 1.55) alternate;
        box-shadow: 0rem 0rem .75rem 0rem #000000;

      }

      @keyframes identifier {
        0% {
          transform: rotateY(0deg);
        }

        100% {
          transform: rotateY(180deg);


        }
      }
    }
  }
}
</style>