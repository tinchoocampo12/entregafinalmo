const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

//FAQS//

let collapsibles = document.querySelectorAll('.faq-container')

collapsibles.forEach(element => {
    element.addEventListener("click", () =>{
        element.querySelector('.faq-answer').classList.toggle('open');
        element.querySelector('.question').classList.toggle('active');
        element.querySelector('.arrow-container').classList.toggle('up');
    })
});