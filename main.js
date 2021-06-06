const form = document.querySelector('.form')
const formControl = form.querySelector('.form-control')

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  formControl.classList.remove('empty', 'invalid', 'success')
  const email = formControl.querySelector('input')
  const submitBtn = form.querySelector('.submit-btn')

  if (!email.value.trim()) {
    form.classList.add('nope')
    return formControl.classList.add('empty')
  }
  if (!validateEmail(email.value)) {
    form.classList.add('nope')
    return formControl.classList.add('invalid')
  }

  submitBtn.classList.add('loading')
  await wait(1000)
  submitBtn.classList.remove('loading')
  formControl.classList.add('success')
  email.value = ''
})

form.addEventListener('animationend', () => form.classList.remove('nope'))

function validateEmail(emailAdress) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (emailAdress.match(regexEmail)) {
    return true
  } else {
    return false
  }
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
