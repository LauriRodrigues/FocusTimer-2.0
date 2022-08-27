import {
  body,
  buttonLightMode,
  buttonDarkMode,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonIncrease,
  buttonDecrease,
  minutesDisplay,
  secondsDisplay,
  forestButton,
  rainButton,
  coffeeShopButton,
  fireButton,
  forestVolume,
  rainVolume,
  coffeeShopVolume,
  fireVolume,
  buttonPressAudio,
  kitchenTimer,
  forestAudio,
  rainAudio,
  coffeeShopAudio,
  fireAudio
} from './elements.js'

import { controls } from './controls.js'
import { timer } from './timer.js'
import { sounds } from './sounds.js'
import { events } from './events.js'

const Controls = controls({
  buttonLightMode,
  buttonDarkMode,
  body,
  buttonPlay,
  buttonPause
})
const Sounds = sounds()

const Timer = timer({
  minutesDisplay,
  secondsDisplay,
  Controls,
  Sounds
})

events({ Controls, Timer, Sounds })
