var x = document.getElementById("userSub");
var y = document.getElementById("userProf");
y.style.display = "none";

function show() {
 
    /* Get image and change value
    of src attribute */
    let image = document.getElementById("image");

    image.src = "change this to the image API"
    
    
    

    document.getElementById("profileName").innerHTML = "change this to the name API";
}

function screenShare() {
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
  }
