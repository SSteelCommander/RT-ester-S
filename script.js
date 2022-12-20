var x = document.getElementById("userSub");
var y = document.getElementById("userProf");
y.style.display = "none";
//var age = document.getElementById("passkey").name;
//var gender = document.getElementById("profileGender");
//console.log(age);
//console.log(gender);

function show() {
 
    
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
