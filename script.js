const imgTrack = document.querySelector("main")

window.onmousedown = event => {
  imgTrack.dataset.mouseDownAt = event.clientX;
}

window.onmousemove = event => {
  const dist = imgTrack.dataset.mouseDownAt - event.clientX
  peakDist = window.innerWidth / 2

  const moveChng = dist / peakDist * 100
}