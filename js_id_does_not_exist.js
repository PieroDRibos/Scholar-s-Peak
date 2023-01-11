var url_grabber, token;

url_grabber = $(location).attr('href');
//console.log(url_grabber);

window.addEventListener("load", function (event) {

    url_grabber = $(location).attr('href');

    var historyTraversal = event.persisted || (typeof window.performance != "undefined" && window.performance.getEntriesByType("navigation")[0].type === "back_forward");

    if (historyTraversal) {

        /* Redirect the user if he/she isn't loged in */
        if (window.sessionStorage.getItem("id") == null && !url_grabber.includes("=")) {

            //Redirect user to the Log in page  
            //window.location.href = "html_file.html";
            window.history.go(1);
        
        }

    }
    else if (window.sessionStorage.getItem("id") == null  && !url_grabber.includes("=")) {

        window.location.href = "index.html";
        

    }

});

window.addEventListener("pageshow", function (event) {

    url_grabber = $(location).attr('href');

    var historyTraversal = event.persisted || (typeof window.performance != "undefined" && window.performance.getEntriesByType("navigation")[0].type === "back_forward");

    if (historyTraversal) {

        /* Redirect the user if he/she isn't loged in */
        if (window.sessionStorage.getItem("id") == null && !url_grabber.includes("=")) {

            //Redirect user to the Log in page  
            //window.location.href = "html_file.html";
            window.history.go(1);
        
        }

    }
    else if (window.sessionStorage.getItem("id") == null && !url_grabber.includes("=")) {

        window.location.href = "index.html";
        

    }

});

url_grabber = JSON.stringify(url_grabber);

if (url_grabber.includes("=")) {

    var url_split = new Array;

    url_split = url_grabber.split("=");
    token = url_split[1];
    token = token.replace(/"/g, '');
    //console.log(token);
}

window.onunload = reloadNone();

function reloadNone()  {

    void (0);

}

// if (window.sessionStorage.getItem("id") != null) {

//     //Redirect user to the Log in page  
//     window.location.href = "html_file.html";
//     //window.history.go(-1);

// }