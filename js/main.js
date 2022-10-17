document.addEventListener("DOMContentLoaded",() =>{
    const elementosCarrusel = document.querySelectorAll(".carousel")
    M.Carousel.init(elementosCarrusel ,{
        duration: 150,
       
        paddin: 5,
        numVisible: 2
    })
})