var subVis = document.getElementById("userSub");
var Profvis = document.getElementById("userProf");
Profvis.style.display = "none";
var ageGroup;
var userGender;

function subInput () {
var userAge = document.getElementById("num").value;
userGender = document.getElementById("profile-gender").value;
if (userAge < 3) {
    ageGroup = "infant"
} else if (userAge < 13){
    ageGroup = "child"
} else if (userAge < 20){
    ageGroup = "teenager"
} else if (userAge < 60){
    ageGroup = "adult"
}  else{
    ageGroup = "old"
}

console.log(userAge);
console.log(userGender);
console.log(ageGroup);
}



let image = document.getElementById("image");
const api_url = 'https://api.unsplash.com/photos/random?query=portrait&client_id=DSpfugB7jcZWFimvHwybAWNR4XWCkIlZeR8PXrx6u2c'

// var APIKey = "DSpfugB7jcZWFimvHwybAWNR4XWCkIlZeR8PXrx6u2c"

// var requestUrl = 'https://api.unsplash.com/photos/?client_id='DSpfugB7jcZWFimvHwybAWNR4XWCkIlZeR8PXrx6u2c'

async function getImg() {

    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);

    const userImg = document.getElementById('image');
    userImg.setAttribute('src', data.urls.small)

}

function show() {

    /* Get image and change value
    of src attribute */
    // let image = document.getElementById("image");

    image.src = "change this to the image API"




    document.getElementById("profileName").innerHTML = "change this to the name API";
}

function switchScreen() {
    if (subVis.style.display === "none") {
        subVis.style.display = "block";
    } else {
        subVis.style.display = "none";
    }

    if (Profvis.style.display === "none") {
        Profvis.style.display = "block";
    } else {
        Profvis.style.display = "none";
    }
}

// var requestUrl = 'https://api.github.com/orgs/nodejs/repos?per_page=5';

// var responseText = document.getElementById('response-text');

// function getApi(requestUrl) {
//     fetch(requestUrl)
//         .then(function (response) {
//             console.log(response);
//             if (response.status === 200) {
//                 responseText.textContent = response.status;
//             }
//             return response.json();
//         });
// }

// getApi(requestUrl);