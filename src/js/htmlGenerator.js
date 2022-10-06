function htmlGenerator(name, github, email, description, profession) {

    return `
    <!DOCTYPE html>
<html lang="en" class=" scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name} Portfolio</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="./dist/output.css">
</head>
<body>

    <header id="home">
        <nav class=" absolute w-full flex justify-end my-10 px-5">
            <ul class="hidden  lg:flex text-blue-600 font-bold">
                <li><a href="#home" class="ml-10 text-xl hover:text-blue-700 transition-all">Home</a></li>
                <li><a href="#about" class="ml-10 text-xl hover:text-blue-700 transition-all">About</a></li>
                <li><a href="#projects" class="ml-10 text-xl hover:text-blue-700 transition-all">Projects</a></li>
                <li><a href="#contact" class="ml-10 text-xl hover:text-blue-700 transition-all">Contact</a></li>
            </ul>

            <div class="burger lg:hidden  w-11 h-6 flex flex-col justify-around cursor-pointer">
                <div class="line1 w-full h-1 bg-black rounded-md"></div>
                <div class="line1 w-full h-1 bg-black rounded-md"></div>
            </div>
        </nav>

        
    </header>

    <main>
        <section class="hero  w-full h-screen flex flex-col justify-center items-center">
            <div class="hero-circle_img w-80 h-80 rounded-full mb-8 shadow-lg bg-contain">
            </div>

            <div class="mb-10">
                <h1 class=" text-center text-3xl">${name}<br><span class=" text-4xl text-blue-600 font-bold">${profession}</span></h1>
            </div>

            <div class="animate-bounce">
                <a href="#about" class="mt-10 w-fit h-fit p-3 bg-blue-600 text-lg text-white rounded-full">
                    <i class="fa-solid fa-angle-down"></i>
                </a>
            </div>
        </section>

        <section id="about" class=" container w-full h-fit px-5 m-auto mb-10 flex flex-col lg:flex-row">

            <div class=" w-full mb-10">
                <img src="./assets/Thumbnail-Freebie.jpg" alt="" class=" rounded-lg shadow-lg">
            </div>

            <div class="lg:w-1/2 lg:px-5 w-full flex flex-col justify-center items-center">

                <h2 class=" text-4xl mb-7 font-bold text-blue-600 ">About Me</h2>

                <p class=" text-lg mb-5 text-center">
                    ${description}
                </p>

                <a target="_blank" href="https://github.com/${github}" class="github-url1 bg-blue-600 p-4 text-white rounded-lg shadow-lg cursor-pointer hover:bg-blue-700 transition-all">
                    <i class="fa-brands fa-github"></i>
                    View Github
                </a>
            </div>
        </section>

        <section class=" bg-gray-100 w-full h-fit px-2 py-6 mb-10 shadow-lg"> 
            <div class="flex justify-evenly items-center lg:max-w-2xl m-auto">
                <i class=" cursor-pointer hover:text-gray-500 transition-all text-gray-400 text-5xl fa-brands fa-html5"></i>
                <i class=" cursor-pointer hover:text-gray-500 transition-all text-gray-400 text-5xl fa-brands fa-css3-alt"></i>
                <i class=" cursor-pointer hover:text-gray-500 transition-all text-gray-400 text-5xl fa-brands fa-square-js"></i>
                <i class=" cursor-pointer hover:text-gray-500 transition-all text-gray-400 text-5xl fa-brands fa-git-alt"></i>
                <i class=" cursor-pointer hover:text-gray-500 transition-all text-gray-400 text-5xl fa-brands fa-bootstrap"></i>
                <i class=" cursor-pointer hover:text-gray-500 transition-all text-gray-400 text-5xl fa-brands fa-node-js"></i>
                <i class=" cursor-pointer hover:text-gray-500 transition-all text-gray-400 text-5xl fa-brands fa-react"></i>
            </div>
        </section>

        <section id="projects" class="w-full p-5 mb-10">

            <div class="table w-full lg:w-2/3 lg:m-auto shadow-lg border-2 border-solid rounded-lg p-5  ">
                <div class="table-header-group text-2xl text-center font-bold text-blue-600 ">
                  <div class="table-row">
                    <div class="table-cell text-left">Name</div>
                    <div class="table-cell text-left">Repository</div>
                  </div>
                </div>
                <div class="table-row-group text-xl ">
                  
              </div>

        </section>

        <section id="contact" class=" w-full h-fit px-5 py-10 m-auto  flex items-center flex-col bg-gray-50">

                <h2 class="text-4xl mb-7 font-bold text-blue-600 ">
                    Contact Me!
                </h2>

                <div class=" flex lg:w-1-2 m-auto">
                    <a href="mailto:${email}" class=" p-5 w-40 bg-blue-600 text-gray-50 text-center rounded-lg cursor-pointer hover:bg-blue-700 transition-all">Send Email</a>

                    <a target="_blank" href="https://github.com/${github}" class="github-url2 ml-5 p-5 w-40 border-2 border-blue-600 hover:border-blue-700 text-blue-600 hover:text-blue-700 text-center rounded-lg cursor-pointer transition-all">GitHub</a>
                </div>
        </section>
    </main>

    <footer class="w-full h-fit p-10 flex flex-col justify-center items-center bg-blue-600 text-xl text-white">
        <i class="fa-solid fa-code mb-2"></i>
        <h2 class=" text-2xl">
            ${name} ©
        </h2>
    </footer>

    <script src="./src/js/api.js"></script>
    <script src="./src/js/apiRepo.js"></script>
</body>
</html> 
    `
}

module.exports = htmlGenerator;