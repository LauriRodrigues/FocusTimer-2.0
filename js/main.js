// ------------elements----------------------

let buttonPlay = document.querySelector('.play');
let buttonPause = document.querySelector('.pause');
let buttonStop = document.querySelector('.stop');
let buttonIncrease = document.querySelector('.increase');
let buttonDecrease = document.querySelector('.decrease');

let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')

let forestButton = document.querySelector('.forest')
let rainButton = document.querySelector('.rain')
let coffeeShopButton = document.querySelector('.coffee-shop')
let fireButton = document.querySelector('.fire')

let timerTimeOut
let minutes = Number(minutesDisplay.textContent)

const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

const forestAudio = new Audio("./assets/audio/Floresta.wav")
const rainAudio = new Audio("../assets/audio/Chuva.wav")
const coffeeShopAudio = new Audio("../assets/audio/Cafeteria.wav")
const fireAudio = new Audio("../assets/audio/Lareira.wav")

forestAudio.loop = true
rainAudio.loop = true
coffeeShopAudio.loop = true
fireAudio.loop = true

// ----------events-------------------------

buttonPlay.addEventListener('click', function() {
  play()
  pressButton()
})

buttonPause.addEventListener('click', function() {
  pause()
  pressButton()
})

buttonStop.addEventListener('click', function() {
  reset()
  pressButton()
})

buttonIncrease.addEventListener('click', function() {
  increase5Minutes()
  pressButton()
})

buttonDecrease.addEventListener('click', function() {
  decrease5Minutes()
  pressButton()
})

forestButton.addEventListener('click', function() {
  forest()
  playPause()
})

rainButton.addEventListener('click', function() {
  rain()
})

coffeeShopButton.addEventListener('click', function() {
  coffeeShop()
})

fireButton.addEventListener('click', function() {
  fire()
})

// ------------functions------------------------

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function updateMinutes() {
  minutes = Number(minutesDisplay.textContent)
}

function buttonPlayHide() {
  buttonPlay.classList.add('hide'),
  buttonPause.classList.remove('hide')
}

function buttonPauseHide() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}

function pressButton() {
  buttonPressAudio.play()
}

function timeEnd() {
  kitchenTimer.play()
}

function forest() {
  forestAudio.play()
}

function rain() {
  rainAudio.play()
}

function coffeeShop() {
  coffeeShopAudio.play()
}

function fire() {
  fireAudio.play()
}

// --------------buttons------------------------

function reset() {
  pause()
  updateTimerDisplay(minutes, 0)
}

function pause() {
  buttonPauseHide()
  clearTimeout(timerTimeOut)
}

function play() {
  buttonPlayHide()
  timerTimeOut = setTimeout (function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if (minutes <= 0 && seconds <= 0) {
      buttonPauseHide()
      timeEnd()
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
    timeEnd()
  }
}