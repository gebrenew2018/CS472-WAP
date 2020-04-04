/**
 * login.js
 */

 "use strict";

 $(document).ready(function(){
        $("#loginForm").submit(
            function(event){
                event.preventDefault();
                console.log("Email Address:"+$("#emailAddress").val());
                console.log("Password:"+$("#pwd").val());
                console.log("WebsiteURL:"+$("#url").val());
                
            }
        );
    }

 );
