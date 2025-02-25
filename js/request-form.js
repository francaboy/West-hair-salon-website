// JavaScript Document
$(document).ready(function () {
  "use strict";

  $(".request-form").submit(function (e) {
    e.preventDefault();
    var email = $(".email");
    var flag = false;
    if (email.val() == "") {
      email.closest(".form-control").addClass("error");
      email.focus();
      flag = false;
      return false;
    } else {
      email.closest(".form-control").removeClass("error").addClass("success");
      flag = true;
    }
    var dataString = "&email=" + email.val();
    $(".loading").fadeIn("slow").html("Slanje...");
    $.ajax({
      type: "POST",
      data: dataString,
      url: "php/requestForm.php",
      cache: false,
      success: function (d) {
        $(".form-control").removeClass("success");
        if (d == "success")
          // Message Sent? Show the 'Thank You' message and hide the form
          $(".loading")
            .fadeIn("slow")
            .html('<font color="#48af4b">E-mail je uspješno poslan.</font>')
            .delay(3000)
            .fadeOut("slow");
        else
          $(".loading")
            .fadeIn("slow")
            .html('<font color="#ff5607">Pošaljite ponovo.</font>')
            .delay(3000)
            .fadeOut("slow");
        document.quickform.reset();
      },
    });
    return false;
  });

  $("#reset").on("click", function () {
    $(".form-control").removeClass("success").removeClass("error");
  });
});
