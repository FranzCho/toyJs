import image1 from '../img/1.jpeg'
import image2 from '../img/2.jpg'
import image3 from '../img/3.jpg'
import image4 from '../img/4.jpg'
const images = [image1, image2, image3, image4];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

console.log(image1)
bgImage.src = chosenImage

document.body.appendChild(bgImage);

bgImage.classList.add("imgFile");