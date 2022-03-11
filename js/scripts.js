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