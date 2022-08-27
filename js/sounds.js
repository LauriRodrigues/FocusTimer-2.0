import {
  forestAudio,
  rainAudio,
  coffeeShopAudio,
  fireAudio,
  buttonPressAudio,
  kitchenTimer,
  forestButton,
  rainButton,
  coffeeShopButton,
  fireButton
} from './elements.js'


export function sounds() {

  forestAudio.loop = true
  rainAudio.loop = true
  coffeeShopAudio.loop = true
  fireAudio.loop = true

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

  return {
    pressButton,
    timeEnd,
    forest,
    rain,
    coffeeShop,
    fire
  }
}