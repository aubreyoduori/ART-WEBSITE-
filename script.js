function scrollGallery(){

document.getElementById("gallery").scrollIntoView({

behavior:"smooth"

});

}

const images = document.querySelectorAll(".gallery img");

images.forEach(image => {

image.addEventListener("click", () => {

alert("Thanks for viewing my artwork!");

});

});
