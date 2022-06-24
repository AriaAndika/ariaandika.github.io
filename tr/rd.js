





var player = document.getElementById('videoss')



function rExc(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


function rInc(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
var num = rInc(1,11)

player.src = "led (" + num + ").mp4"
// player.src = "vxv.mp4"

console.log("led (" + num + ").mp4")
player.load()
