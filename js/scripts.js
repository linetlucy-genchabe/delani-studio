$(document).ready(function() {
    $("#development-image").click(function() {
        $("#development-image").slideDown('1500').hide('1000');
        $("#development").show('1500');
    });
    $("#development").click(function() {
        $("#development").slideUp('1500');
        $("#development-image").slideDown('1500');
    });
});

$(document).ready(function() {
    $("#design-image").click(function() {
        $("#design-image").slideDown('1500').hide('1000');
        $("#design").show('1500');
    });
    $("#design").click(function() {
        $("#design").slideUp('1500');
        $("#design-image").slideDown('1500');
    });
});

$(document).ready(function() {
    $("#product-image").click(function() {
        $("#product-image").slideDown('1500').hide('1000');
        $("#product").show('1500');
    });
    $("#product").click(function() {
        $("#product").slideUp('1500');
        $("#product-image").slideDown('1500');
    });
});

$(document).ready(function() {
    $("#work1").mouseover(function() {
        $("#shadow").show();

    }).mouseout(function() {
        $("#shadow").hide();
    });
});
$(document).ready(function() {
    $("#work2").mouseover(function() {
        $("#shadow2").show();
    }).mouseout(function() {
        $("#shadow2").hide();
    });
});
$(document).ready(function() {
    $("#work3").mouseover(function() {
        $("#shadow3").show();
    }).mouseout(function() {
        $("#shadow3").hide();
    });
});
$(document).ready(function() {
    $("#work4").mouseover(function() {
        $("#shadow4").show();
    }).mouseout(function() {
        $("#shadow4").hide();
    });
});

$(document).ready(function() {
    $("#work5").mouseover(function() {
        $("#shadow5").show();
    }).mouseout(function() {
        $("#shadow5").hide();
    });
    $("#work6").mouseover(function() {
        $("#shadow6").show();
    }).mouseout(function() {
        $("#shadow6").hide();
    });
    $("#work7").mouseover(function() {
        $("#shadow7").show();
    }).mouseout(function() {
        $("#shadow7").hide();
    });
    $("#work8").mouseover(function() {
        $("#shadow8").show();
    }).mouseout(function() {
        $("#shadow8").hide();
    });
});



$(document).ready(function() {
    $("form#formLynne").submit(function(event) {

        var name = $("input#MERGE1").val();
        var email = $("input#MERGE0").val();
        var message = $("textarea#comment").val();
        if ($("input#MERGE1").val() && $("input#MERGE0").val()) {
            alert(name + ", We have received your message. Thank you for reaching out to us.");
        } else {
            alert("Please enter your name and email!");
        }

    });

});