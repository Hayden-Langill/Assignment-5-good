let d = document.getElementById('input').value
const pi = Math.PI
let n = 0
let r = 0

document.getElementById('button').addEventListener('click', area)
document.getElementById('button2').addEventListener('click', cir)

function area () {
  d = document.getElementById('input').value
  d = parseInt(d)
  r = d / 2
  r = r * r
  n = pi * r 
  document.getElementById('answer').innerHTML = Math.floor(n)
}

function cir () {
  d = document.getElementById('input').value
  d = parseInt(d)
  r = d / 2
  n = (pi * r) * 2
  document.getElementById('answer').innerHTML = Math.floor(n)
}
