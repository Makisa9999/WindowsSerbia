var submitbutton1 = document.getElementById('button1')
var h1heeading = document.getElementById('header')
var inputfield1 = document.getElementById('A0001')

submitbutton1.addEventListener('click', (e) => {
    inputfield = inputfield1.value
    document.getElementById('h1_text').innerHTML = inputfield
})

