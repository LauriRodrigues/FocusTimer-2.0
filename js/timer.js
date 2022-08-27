export function timer({minutesDisplay,
  secondsDisplay, Controls, Sounds}) {

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function updateMinutes() {
    minutes = Number(minutesDisplay.textContent)
  }

  //----------Buttons-----------------

  function reset() {
    pause()
    updateTimerDisplay(minutes, 0)
  }

  function pause() {
    Controls.buttonPauseHide()
    clearTimeout(timerTimeOut)
  }

  function play() {
    Controls.buttonPlayHide()
    timerTimeOut = setTimeout (function() {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      if (minutes <= 0 && seconds <= 0) {
        Controls.buttonPauseHide()
        Sounds.timeEnd()
        return
      }

      if (seconds == 0) {
        seconds = 60
        --minutes
      }

      --seconds

      updateTimerDisplay(minutes, seconds)
    
      play()

    }, 1000)
  }

  function increase5Minutes() {
    updateTimerDisplay(minutes + 5, 0)
    updateMinutes(minutes)
  }

  function decrease5Minutes() {
    updateTimerDisplay(minutes - 5, 0)
    updateMinutes(minutes)

    if (minutes == 0) {
      Sounds.timeEnd()
    }
  }

  return {
    reset,
    pause,
    play,
    increase5Minutes,
    decrease5Minutes
  }

}