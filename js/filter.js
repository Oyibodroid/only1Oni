const btn = document.querySelectorAll('.btn')
const filterImg = document.querySelectorAll('.gallery img')

const filter = e => {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active')

    filterImg.forEach(img => {
        img.classList.add('hide');

        if (img.dataset.name === e.target.dataset.name ) {
            img.classList.remove('hide')
        }else if(img.classList === 'hidden'){
            img.style.display = 'none'
        }

    })
}


btn.forEach(btn => {
    btn.addEventListener('click', filter)
})

// animation on scroll

// observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.intersectionRatio > 0) {
//             entry.target.style.animation = 'slideUp 1s ease'
//         } else {
//             entry.target.style.animation = 'none'
//         }
//     })
// })

// filterImg.forEach(img =>{
//     observer.observe(img)
// })