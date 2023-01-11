var url_grabber;

url_grabber = $(location).attr('href');
//console.log(url_grabber);

if (window.sessionStorage.getItem("verified") !== "1") {

    url_grabber = JSON.stringify(url_grabber);

    if (url_grabber.includes("=")) {

        window.sessionStorage.clear();

        var url_split = new Array;
        var token;

        url_split = url_grabber.split("=");
        token = url_split[1];
        token = token.replace(/"/g, '');
        t = token;

        $.when(tokenexistanceCheck(t)).done(function(tokenexistanceCheck_result) {

            //console.log(JSON.parse(tokenexistanceCheck_result));

            if (JSON.parse(tokenexistanceCheck_result) == "OK") {

                $.when(update_SESSION(token)).done(function(Ajax_SESSION_res) {

                    //console.log(JSON.parse(Ajax_SESSION_res));

                    SESSION_res = JSON.parse(Ajax_SESSION_res);

                    var Ajax_SESSION_res_split = JSON.stringify(SESSION_res).replace(/"/g, '');

                    Ajax_SESSION_res_split = Ajax_SESSION_res_split.replace(/{/g, '');

                    Ajax_SESSION_res_split = Ajax_SESSION_res_split.replace(/}/g, '');

                    Ajax_SESSION_res_split = Ajax_SESSION_res_split.split(",");
                    //console.log(Ajax_SESSION_res_split);

                    var Ajax_SESSION_split_vars = new Array;
                    var Ajax_SESSION_split_values = new Array;

                    for (let i = 0; i < Ajax_SESSION_res_split.length; i++) {

                    var Ajax_SESSION_split = new Array;

                    Ajax_SESSION_split = Ajax_SESSION_res_split[i].split(":");
                    //console.log(Ajax_SESSION_res_split[i]);
                    Ajax_SESSION_split_vars[i] = Ajax_SESSION_split[0];
                    Ajax_SESSION_split_values[i] = Ajax_SESSION_split[1];
                    window.sessionStorage.setItem(Ajax_SESSION_split_vars[i], Ajax_SESSION_split_values[i]);

                    }

                    /* User's username display */
                    $("#welcome_user").html("Welcome " + '<span class="text-warning">' + window.sessionStorage.getItem("firstname") + '</span>');

                    $("#verification_message").hidden = true;
                    $("#resend_token").hidden = true;

                    //console.log(window.sessionStorage);

                });

            }
            else {

                //Redirect user to the Log in page
                window.location.href = "index.html";
        
            }

        });

    }
    else {

        /* User's username display */
        $("#welcome_user").html("Welcome " + '<span class="text-warning">' + window.sessionStorage.getItem("firstname") + '</span>');

        $("#verification_message").html('<div class="alert alert-warning border border-warning">' + "You need to verify your account. Sign in to your email account and click on the verification link we just emailed you at " + '<strong class="text-break">' + window.sessionStorage.getItem("email") + '</strong>' + '</div');

        /* Resend token button */
        $("#resend_token").html('<button class="btn btn-block btn-lg btn-primary bg-gradient border border-warning btn_verified" id="btn_token" type="button">' + "Resend email verification!" + '</button>');

        var btn_resend;

        btn_resend = document.getElementById("btn_token");

        if (btn_resend) {

            btn_resend.addEventListener("click", function(press_resend) {

                var e;
                e = window.sessionStorage.getItem("email");

                $.when(resend_TOKEN(e)).done(function(Ajax_RESEND_res) {

                    //console.log(JSON.parse(Ajax_RESEND_res));

                });

            });

        }

        //console.log(window.sessionStorage);

    }

}
else {

    /* User's username display */
    $("#welcome_user").html("Welcome " + '<span class="text-warning">' + window.sessionStorage.getItem("firstname") + '</span>');

    $("#verification_message").hidden = true;
    $("#resend_token").hidden = true;

    //console.log(window.sessionStorage);

}

function update_SESSION(token) {

    return $.ajax({

                url: "php_data_base_verification.php",
                type: "POST",
                data:{url_token:token},
                cache: false,
                success: function(data_SESSION) {
                
                var SESSION_result;

                SESSION_result = JSON.parse(data_SESSION);
                ////console.log(SESSION_result);

                if (SESSION_result !== "") {

                    //console.log("SESSION update success!")

                }
                else {

                    //console.log("SESSION update fail!")

                }

                }

            });

}

function resend_TOKEN(e) {

    return $.ajax({
  
                url: "php_data_base_resend_token.php",
                type: "POST",
                data:{email:e},
                cache: false,
                success: function(data_RESEND) {
                
                var RESEND_result;

                RESEND_result = JSON.parse(data_RESEND);
                ////console.log(RESEND_result);

                if (RESEND_result == "RESPONSE: OK") {

                    //console.log("RESEND success!")

                }
                else {

                    //console.log("RESEND fail!")

                }

                }
  
            });
  
}

function tokenexistanceCheck(t) {

    return $.ajax({
  
                url: "php_data_base_token_existance.php",
                type: "POST",
                data:{token:t},
                cache: false,
                success: function(token_existance) {
                
                var token_result;

                token_result = JSON.parse(token_existance);
                ////console.log(token_result);

                if (token_result == "OK") {

                    //console.log("Token success!")

                }
                else {

                    //console.log("Token fail!")

                }

                }

            });

}