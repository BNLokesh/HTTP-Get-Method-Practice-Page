let options = {
    method: "GET"
};

let sendGetRequestBtnEl = document.getElementById("sendGetRequestBtn");
let url = "https://gorest.co.in/public-api/users";
let httpResponseEl = document.getElementById("httpResponse");
let requestStatusEl = document.getElementById("requestStatus");

function responseBody() {
    fetch(url, options)
        .then(function(response) {
            return response.text();
        })

        .then(function(text) {
            let requestStatus = text;
            httpResponseEl.textContent = requestStatus;
        });
}


function RequestStatus() {
    fetch(url, options)
        .then(function(response) {
            return response.status;
        })

        .then(function(status) {
            let requestStatus = status;
            requestStatusEl.textContent = requestStatus;
        });
    responseBody();
}


sendGetRequestBtnEl.addEventListener("click", RequestStatus)