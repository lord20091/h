let ism = prompt(`Ismingizni kiriritng`)

let text = document.getElementById(`ism`)

let body = document.querySelector(`body`)


text.innerHTML = ism


body.style.backgroundColor = `blue`
text.style.color = `white`
text.style.display = `flex`
text.style.justifyContent = `center`
text.style.alignItems = `center`
text.style.height = `100vh`
text.style.fontSize = `150px`

