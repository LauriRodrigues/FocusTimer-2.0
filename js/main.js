// ------------elements----------------------

const body = document.querySelector('body')

const buttonLightMode = document.querySelector('.lightModeIcon')
const buttonDarkMode = document.querySelector('.darkModeIcon')

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonIncrease = document.querySelector('.increase')
const buttonDecrease = document.querySelector('.decrease')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const forestButton = document.querySelector('.forest')
const rainButton = document.querySelector('.rain')
const coffeeShopButton = document.querySelector('.coffee-shop')
const fireButton = document.querySelector('.fire')

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

buttonLightMode.addEventListener('click', () => {
  darkMode()
})

buttonDarkMode.addEventListener('click', () => {
  lightMode()
})

buttonPlay.addEventListener('click', () => {
  play()
  pressButton()
})

buttonPause.addEventListener('click', () => {
  pause()
  pressButton()
})

buttonStop.addEventListener('click', () => {
  reset()
  pressButton()
})

buttonIncrease.addEventListener('click', () => {
  increase5Minutes()
  pressButton()
})

buttonDecrease.addEventListener('click', () => {
  decrease5Minutes()
  pressButton()
})

forestButton.addEventListener('click', () => {
  forest()
})

rainButton.addEventListener('click', () => {
  rain()
})

coffeeShopButton.addEventListener('click', () => {
  coffeeShop()
})

fireButton.addEventListener('click', () => {
  fire()
})

// ------------functions------------------------

function darkMode() {
  buttonLightMode.classList.add('hide')
  buttonDarkMode.classList.remove('hide')
  
  body.classList.remove('light')
}

function lightMode() {
  buttonDarkMode.classList.add('hide')
  buttonLightMode.classList.remove('hide')

  body.classList.add('light')
}

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
  forestButton.classList.toggle('selected')
    if (forestButton.classList.contains('selected') == true) {
    forestAudio.play()
    } else {
      forestAudio.pause()
    }
}

function rain() {
  rainButton.classList.toggle('selected')
    if (rainButton.classList.contains('selected') == true) {
    rainAudio.play()
    } else {
      rainAudio.pause()
    }
}

function coffeeShop() {
  coffeeShopButton.classList.toggle('selected')
    if (coffeeShopButton.classList.contains('selected') == true) {
    coffeeShopAudio.play()
    } else {
      coffeeShopAudio.pause()
    }
}

function fire() {
  fireButton.classList.toggle('selected')
    if (fireButton.classList.contains('selected') == true) {
    fireAudio.play()
    } else {
      fireAudio.pause()
    }
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