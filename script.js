const toggle = document.querySelector(
    '.toggle')
const navigation =document.querySelector(
    '.navigation')
const banner1 =document.querySelector(
    '.banner-text1')


toggle.addEventListener('click', () =>{
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
    banner1.classList.toggle('active')
})

