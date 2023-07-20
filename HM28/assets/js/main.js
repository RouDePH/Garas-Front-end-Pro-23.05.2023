

const images = ["image-1.jpg", "image-2.jpg", "image-3.jpg", "image-4.jpg", "image-5.jpg", "image-6.jpg", "image-7.jpg", "image-8.jpg", "image-9.jpg", "image-10.jpg"];

let currentImageIndex = 0;
document.getElementById("prev-button").style.display = "none";

function changeImage(index) {
    document.getElementById("slider-image").src = `assets/images/${images[index]}`;

    if (index === 0) {
        document.getElementById("prev-button").style.display = "none";
    } else {
        document.getElementById("prev-button").style.display = "block";
    }

    if (index === images.length - 1) {
        document.getElementById("next-button").style.display = "none";
    } else {
        document.getElementById("next-button").style.display = "block";
    }
}

document.getElementById("prev-button").addEventListener("click", function () {
    currentImageIndex--;
    changeImage(currentImageIndex);
});

document.getElementById("next-button").addEventListener("click", function () {
    currentImageIndex++;
    changeImage(currentImageIndex);
});
