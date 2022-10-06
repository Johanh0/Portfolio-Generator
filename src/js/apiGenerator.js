 function apiGenerator(github) {
    return `
// Hero Const
const heroImg = document.querySelector(".hero-circle_img");

//User Name
const githubUser = "${github}";

function apiRequest(github) {
    // Calling the API
    fetch("https://api.github.com/users/"+ github + "").then( (response) => {
        return response.json();
    }).then( (data) => {
        setupUserData(data);
    });
};
function setupUserData(data) {
    // Hero circle img
    heroImg.style.backgroundImage = "url("+ data.avatar_url + ")";
};

function apiRepository(github) {

    fetch("https://api.github.com/users/" + github + "/repos").then( (Response) => {

        return Response.json();
    }).then( (data) => {
        console.log(data);
    })
}

apiRepository(githubUser);
apiRequest(githubUser);
    `
};

module.exports = apiGenerator;