var home = document.getElementById('UL1')
var home_dropdown = document.getElementById('dropdown1')
var about = document.getElementById('UL2')
var about_dropdown = document.getElementById('dropdown2')
var contact = document.getElementById('UL3')
var contact_dropdown = document.getElementById('dropdown3')


//
home.addEventListener('mouseover', (e) => {
    home_dropdown.style.display = "block"
})

home.addEventListener('mouseout', (e) => {
    home_dropdown.style.display = "none"
})
//
//
about.addEventListener('mouseover', (e) => {
    about_dropdown.style.display = "block"
})

about.addEventListener('mouseout', (e) => {
    about_dropdown.style.display = "none"
})
//
//
contact.addEventListener('mouseover', (e) => {
    contact_dropdown.style.display = "block"
})

contact.addEventListener('mouseout', (e) => {
    contact_dropdown.style.display = "none"
})
//