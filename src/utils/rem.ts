const baseSize = 16
function setRem() {
  let scale = document.documentElement.clientWidth / 1920
  if (scale > 1.6) {
    scale = 1.6
  } else if (scale < 0.5) {
    scale = 0.5
  }
  document.documentElement.style.fontSize = baseSize * scale + 'px'
}
setRem()
window.onresize = function () {
  setRem()
}
