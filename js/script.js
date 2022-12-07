let current_image = 1;
let leftbutton = document.querySelector("#scrollleft");
let rightbutton = document.querySelector("#scrollright");
let lrimage = document.querySelector("#lrimage");

leftbutton.addEventListener("click", function() {
    current_image -= 1;
    let new_image = "img/labrat" + current_image.toString() + ".png";
    lrimage.src = new_image;
	console.log("Image scrolled left to " + current_image);
    leftbutton.disabled = current_image == 1;
    rightbutton.disabled = current_image == 9;
});

rightbutton.addEventListener("click", function() {
    current_image += 1;
    let new_image = "img/labrat" + current_image.toString() + ".png";
    lrimage.src = new_image;
	console.log("Image scrolled left to " + current_image);
    leftbutton.disabled = current_image == 1;
    rightbutton.disabled = current_image == 9;
});
