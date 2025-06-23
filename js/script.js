document.querySelector(".burger").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("menu-open")
})

document.querySelector(".menu-cross").addEventListener("click", () => {
    document.querySelector(".menu").classList.remove("menu-open")
})