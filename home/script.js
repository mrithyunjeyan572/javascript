let updatePasswordFormEl = document.getElementById("signup");

        let newNameEl = document.getElementById("newName");
let newNameErrMsgEl = document.getElementById("newNameErrMsg");

let newEmailEl = document.getElementById("newEmail");
let newEmailErrMsgEl = document.getElementById("newEmailErrMsg")

let newPasswordEl = document.getElementById("newPassword");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");



let validateNewName = function() {
    if (newNameEl.value === "") {
        newNameErrMsgEl.textContent = "Enter the Name";
    } else {
        newNameErrMsgEl.textContent = "";
    }
};

let validateNewPassword = function() {
    if (newPasswordEl.value === "") {
        newPasswordErrMsgEl.textContent = "Enter the PassWord";
    } else {
        newPasswordErrMsgEl.textContent = "";
    }
};

let validateNewEmail = function() {
    
    if (newEmailEl.value === "") {
        newEmailErrMsgEl.textContent = "Enter  the Email";
    } else {
       newEmailErrMsgEl.textContent = "";
    }

};

newNameEl.addEventListener("blur", validateNewName);
newNameEl.addEventListener("blur", validateNewEmail);
newPasswordEl.addEventListener("blur", validateNewPassword);


updatePasswordFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateNewName();
    validateNewEmail();
    validateNewPassword();
    alert("Signup Succssful")
    window.location.href="login.html";
});






let httpResponseEl = document.getElementById("httpResponse");

function createAndAppendSearchResult(result) {
    let {
        name,
        email,
        body
    } = result;
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");

    let titleEl = document.createElement("h1");
    titleEl.textContent = name;
    titleEl.classList.add("result-title");
    resultItemEl.appendChild(titleEl);

    let titleBreakEl = document.createElement("br");
    resultItemEl.appendChild(titleBreakEl);

    let urlEl = document.createElement("p");
    urlEl.classList.add("result-url");
    urlEl.textContent = email;
    resultItemEl.appendChild(urlEl);

    let linkBreakEl = document.createElement("br");
    resultItemEl.appendChild(linkBreakEl);

    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = body;
    resultItemEl.appendChild(descriptionEl);

    httpResponseEl.appendChild(resultItemEl);
};

function displayResults(data) {
    for (let result of data) {
        createAndAppendSearchResult(result);
    }
}

function sendGetRequestBtn() {
    let url = "https://jsonplaceholder.typicode.com/comments";
    let options = {
        method: "GET",
    };


    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            displayResults(data);
        });
};

sendGetRequestBtn();



