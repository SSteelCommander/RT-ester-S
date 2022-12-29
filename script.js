var subVis = document.getElementById("userSub");
var Profvis = document.getElementById("userProf");
Profvis.style.display = "none";
var ageGroup;
var userGender;

function subInput() {
    var userAge = document.getElementById("num").value;
    userGender = document.getElementById("profile-gender").value;
    if (userAge < 3) {
        ageGroup = "infant"
    } else if (userAge < 13) {
        ageGroup = "child"
    } else if (userAge < 20) {
        ageGroup = "teenager"
    } else if (userAge < 60) {
        ageGroup = "adult"
    } else {
        ageGroup = "old"
    }

    console.log(userAge);
    console.log(userGender);
    console.log(ageGroup);
}

let name1 = document.getElementById('name1');
// let nameF_api = "https://api.api-ninjas.com/v1/babynames?gender=girl"
// let nameM_api = "https://api.api-ninjas.com/v1/babynames?gender=boy"
// //   +
// " " +
// userGender


async function getName1() {
    let nameF_api = "https://api.api-ninjas.com/v1/babynames?gender=girl"
    let nameM_api = "https://api.api-ninjas.com/v1/babynames?gender=boy"
    userGender = document.getElementById("profile-gender").value;

    if (userGender == 'Male') {


        const response = await fetch(nameM_api, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'zUbmPIOiCjjhkg4oPwvGgg==UtuZLiRTBl1bNcQo'
            }
        });
        let data = await response.json();
        console.log(data[4]);

        const userName1 = document.getElementById('profileName1');
        userName1.innerHTML = data[4];

    }
    else {
        const response = await fetch(nameF_api, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'zUbmPIOiCjjhkg4oPwvGgg==UtuZLiRTBl1bNcQo'
            }
        });
        let data = await response.json();
        console.log(data[4]);

        const userName1 = document.getElementById('profileName1');
        userName1.innerHTML = data[4];

    }




}











let name = document.getElementById('name');
const name_api = "https://randommer.io/api/Name?nameType=surname&quantity=1"

async function getName() {




    const response = await fetch(name_api, {
        method: 'GET',
        headers: {
            'X-API-KEY': '814385c0d6d24bf082d8bd56e39eff9b'
        }
    });
    let data = await response.json();
    console.log(data);

    const userName = document.getElementById('profileName');
    userName.innerHTML = data;




}

// apikey = 814385c0d6d24bf082d8bd56e39eff9b
// "https://randommer.io/api/Name?nameType=fullname&quantity=1"


let image = document.getElementById("image");
const api_url = 'https://api.unsplash.com/photos/random?query=portrait&client_id=DSpfugB7jcZWFimvHwybAWNR4XWCkIlZeR8PXrx6u2c'

// var APIKey = "DSpfugB7jcZWFimvHwybAWNR4XWCkIlZeR8PXrx6u2c"

// var requestUrl = 'https://api.unsplash.com/photos/?client_id='DSpfugB7jcZWFimvHwybAWNR4XWCkIlZeR8PXrx6u2c'

async function getImg() {

    const api_url =
        "https://api.unsplash.com/photos/random?query=" +
        ageGroup +
        " " +
        userGender +
        " portrait&client_id=DSpfugB7jcZWFimvHwybAWNR4XWCkIlZeR8PXrx6u2c";
    const response = await fetch(api_url);
    let data = await response.json();
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





// https://api.api-ninjas.com/v1/babynames?gender=
// zUbmPIOiCjjhkg4oPwvGgg==UtuZLiRTBl1bNcQo


// let name1 = document.getElementById('name1');
// const name1_api = "https://api.api-ninjas.com/v1/babynames?gender=" 


// async function getName1() {




//     const response = await fetch(name_api, {
//         method: 'GET',
//         headers: {
//             'X-API-KEY': 'zUbmPIOiCjjhkg4oPwvGgg==UtuZLiRTBl1bNcQo'
//         }
//     });
//     const data = await response.json();
//     console.log(data);




// }
