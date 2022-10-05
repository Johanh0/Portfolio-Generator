// HTML ELEMENTS CONST

// Hero const
const heroImg = document.querySelector(`.hero-circle_img`);

//Btns Const
const githubUrl1 = document.querySelector(`.github-url1`);
const githubUrl2 = document.querySelector(`.github-url2`);




function apiRequest() {

    // Calling the API
    fetch(`https://api.github.com/users/johanh0`).then( (response) => {

        return response.json();

    }).then( (data) => {

        console.log(data);
        setupUserData(data);

    });
};

function setupUserData(data) {

    // Hero circle img
    heroImg.style.backgroundImage = `url(${data.avatar_url})`;

    // Btn links
    githubUrl1.setAttribute(`href`, data.html_url);
    githubUrl2.setAttribute(`href`, data.html_url);

}

apiRequest();


function repoApi() { 
    fetch(`https://api.github.com/users/johanh0/repos`).then( (response) => {
        
    return response.json();
    }).then( (data) => {
        console.log(data);
    })
 }

 repoApi();