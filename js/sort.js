
// Photo Enlargement

document.querySelectorAll('.row img').forEach(image => {

    image.onclick = () => {
        document.querySelector('.popup-img').style.display = 'block';
        document.querySelector('.popup-img img').src = image.getAttribute('src');
    }

});

document.querySelector('.popup-img span').onclick = () => {
    document.querySelector('.popup-img').style.display = 'none';
}

// Image Sorting //

var images = document.querySelectorAll('.row img');

for (i = 0; i <= images.length; i++) {

    images[i].className = "image-" + i;

}



images.classList.toggle("showFilter");