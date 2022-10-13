$(function(){
    //Validation

    $('form input[name="date"]').datepicker({
        dateFormat: 'dd-mm-yy'
    });

    $.validate({
        lang: 'es'
    });

});