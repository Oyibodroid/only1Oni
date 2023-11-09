const gallery = document.querySelectorAll('.gallery img')
const previewBox = document.querySelector('#preview-box')
const previewImg = document.querySelector('#img')
const closeIcon = document.querySelector('#closer')
const shadow = document.querySelector('#shadow')


for (let i = 0; i < gallery.length; i++) {

    gallery[i].onclick = () => {
        let clickImgIndex;
        let newIndex = i;
        clickImgIndex = newIndex;

        function preview() {
            let selectedImg = gallery[newIndex].src;
            previewImg.src = selectedImg;
        }

        const prevBtn = document.querySelector('#prev')
        const nextBtn = document.querySelector('#next')

        if (newIndex === 0) {
            prevBtn.style.display = 'none';
        }

        if (newIndex >= gallery.length - 1) {
            nextBtn.style.display = 'none';
        }

        prevBtn.onclick = () => {
            newIndex--;
            if (newIndex === 0) {
                preview()
                prevBtn.style.display = 'none'
            } else {
                preview()
                nextBtn.style.display = 'block';
            }

        }


        nextBtn.onclick = () => {
            newIndex++;
            if (newIndex >= gallery.length - 1) {
                preview()
                nextBtn.style.display = 'none'
            } else {
                preview()
                prevBtn.style.display = 'block'
            }
        }

        preview()
        previewBox.classList.add('show')
        shadow.classList.add('show')

        closeIcon.onclick = () => {
            newIndex = clickImgIndex;
            nextBtn.style.display = 'block';
            prevBtn.style.display = 'block';
            shadow.classList.remove('show')
            previewBox.classList.remove('show')
        }
    }
}