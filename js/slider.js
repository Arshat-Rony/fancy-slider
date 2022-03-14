const sliderImage = document.querySelector("#slider-img")
const goRight = document.getElementById("right")
const goLeft = document.getElementById("left")

const images = [
    'images/pic-10.avif',
    'images/pic-3.avif',
    'images/pic-4.avif',
    'images/pic-5.avif',
    'images/pic-6.avif',
    'images/pic-7.avif',
    'images/pic-8.avif',
    'images/pic-9.avif',
    'images/pic-1.avif',
]



let imagesIndex = 0;
setTime()

function setTime() {
    return setInterval(() => {
        setImgAtr(images)
    }, 1000);
}


function setImgAtr(array, isIncrease) {
    if (imagesIndex >= array.length) {
        imagesIndex = 0;
    }
    sliderImage.setAttribute('src', images[imagesIndex])
    if (isIncrease == false) {
        imagesIndex--;
    }
    imagesIndex++;
}

const removeSlide = () => {
    setImgAtr(images, false)
}
const addSlide = () => {
    setImgAtr(images)
    console.log(imagesIndex)
}
goLeft.addEventListener("click", removeSlide)
goRight.addEventListener("click", addSlide)