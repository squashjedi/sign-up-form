const passwords = document.querySelectorAll('.error')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')

passwords.forEach(password => {
  password.classList.remove('error')
})

const errorMessage = document.querySelector('.error-message')
errorMessage.style.display = 'none'

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log('yes')
  if (password.value === '' || confirmPassword.value === '' || password.value !== confirmPassword.value) {
    passwords.forEach(password => {
      password.classList.add('error')
    })
    errorMessage.style.display = 'block'
    return
  }
  passwords.forEach(password => {
    password.classList.remove('error')
  })
  errorMessage.style.display = 'none'
})