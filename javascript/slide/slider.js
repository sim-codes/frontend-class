const mainImg = document.querySelector('.main-img');
const smallImgs = document.querySelectorAll('.small-images');
console.log(mainImg.src);

smallImgs.forEach((smallImg) => {
    smallImg.addEventListener('click', () => {
        const temp = mainImg.src;
        mainImg.src = smallImg.src;
        smallImg.src = temp;
    });
});
