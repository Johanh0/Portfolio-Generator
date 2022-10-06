
const tableEl = document.querySelector(".table");
const tableRow = document.querySelector(".table-row-group");


function apiRepository(github) {

    fetch("https://api.github.com/users/" + github + "/repos").then( (Response) => {

        return Response.json();
    }).then( (data) => {

        writeData(data)
    })
}

function writeData(data) {


    // Creating the data on the table
    for(let i = 0; i <= 3; i++) {

        // Creating elements
        const divRow = document.createElement("div");

        const divCellName = document.createElement("div");
        const divCellRepo = document.createElement("div");

        const tableBtn = document.createElement("a");

        // Adding classes
        divRow.classList.add("table-row");

        divCellName.classList.add("table-cell");
        divCellRepo.classList.add("table-cell");

        tableBtn.classList.add("text-blue-600",  "hover:text-blue-700",  "transition-all");
        

        // Insert data value
        divCellName.innerText = data[i].name;
        tableBtn.innerText = "View Repository";

        // Append Child
        tableEl.appendChild(divRow);
        tableRow.appendChild(divRow);
        divRow.appendChild(divCellName);
        divRow.appendChild(divCellRepo);

        divCellRepo.appendChild(tableBtn);


        tableBtn.setAttribute("href", data[i].html_url);


    }
};

apiRepository("Johanh0");
    