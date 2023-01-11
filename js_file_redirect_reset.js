var url_grabber;
var token;

url_grabber = $(location).attr('href');
//console.log(url_grabber);

url_grabber = JSON.stringify(url_grabber);

window.addEventListener("load", function () {

    if (window.sessionStorage.getItem("id") == null && !url_grabber.includes("=")) {

        window.location.href = "index.html";

    }

});

window.addEventListener("pageshow", function () {

    if (window.sessionStorage.getItem("id") == null && !url_grabber.includes("=")) {

        window.location.href = "index.html";

    }

});

if (url_grabber.includes("=")) {

    var url_split = new Array;

    url_split = url_grabber.split("=");
    token = url_split[1];
    token = token.replace(/"/g, '');
    //console.log(token);
}