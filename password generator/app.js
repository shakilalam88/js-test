const passBox = document.querySelector('#passBox')
const sliderValue = document.querySelector('#sliderValue')
const inputSlider = document.querySelector('#inputSlider')
const lowerCase = document.querySelector('#lowercase')
const upperCase = document.querySelector('#uppercase')
const number = document.querySelector('#number')
const symbols = document.querySelector('#symbols')
const genBtn = document.querySelector('#genBtn')
const copyPassword = document.querySelector('#copyPassword')

//slider range value
sliderValue.textContent = inputSlider.value
inputSlider.addEventListener('input', () => {
  sliderValue.textContent = inputSlider.value
})

// password generate

let lowerChars = 'abcdefghijklmnopqrstuvwxyz'
let upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let numberChars = '01233456789'
let symbolsChars = '!@#$%^&*'

genBtn.addEventListener('click', () => {
  copyPassword.innerText = 'content_copy'
  passBox.value = generatePassword()
})

function generatePassword() {
  let genPassword = ''
  let allChars = ''

  allChars += lowerCase.checked ? lowerChars : ''
  allChars += upperCase.checked ? upperChars : ''
  allChars += number.checked ? numberChars : ''
  allChars += symbols.checked ? symbolsChars : ''

  //   genPassword = Math.floor(Math.random() * 10 ** inputSlider.value)

  if (allChars == '' || allChars.length == 0) {
    return genPassword
  }

  for (let i = 0; i < inputSlider.value; i++) {
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length))
  }

  return genPassword
}

// copy password
copyPassword.addEventListener('click', () => {
  if (passBox.value != '' || passBox.value.length >= 1) {
    navigator.clipboard.writeText(passBox.value)
    copyPassword.innerText = 'done'
  }
})
