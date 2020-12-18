var submitbutton1 = document.getElementById('button1')
var h1heeading = document.getElementById('header')
var inputfield1 = document.getElementById('A0001')

submitbutton1.addEventListener('mouseover', (e) => {
    inputfield = inputfield1.value
    document.getElementById('h1_text').innerHTML = inputfield
})

submitbutton1.addEventListener('mouseout', (e) => {
    document.getElementById('h1_text').innerHTML = ""
})

submitbutton1.addEventListener('click', (e) => {
    inputfield = inputfield1.value
    document.getElementById('h1_text').innerHTML = inputfield
})

