const filterButtons = document.querySelectorAll('.tablinks')
const filterAbleImgs = document.querySelectorAll('.column img')

const filterImg = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    filterAbleImgs.forEach(Img => {
        Img.classList.add("hide");
        if(Img.dataset.name === e.target.dataset.name || e.target.dataset.name === 'all'){
            Img.classList.remove("hide");
            console.log('hello world');
        }
    })
};


filterButtons.forEach(button => button.addEventListener("click", filterImg))

console.log('hello world');