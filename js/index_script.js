document.querySelector("#menu_icon").addEventListener("click", function() {
    var x = document.querySelector("#links");
    if (x.style.display == "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
});