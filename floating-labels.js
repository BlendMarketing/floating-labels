var onFocus = function() {
    $(this).parents('.form-item').addClass('focus');
};

var offFocus = function() {
    $(this).parents('.form-item').removeClass('focus');
    if (this.value.length>0) {
        $(this).parents('.form-item').addClass('data');
    }
    else {
        $(this).parents('.form-item').removeClass('data');
    }
};
$(document).ready(function(){
var inputs = $('form input.floating, form textarea.floating');
    for(i=0; i<inputs.length; i++) {
        $(inputs[i]).on('focus', onFocus);
        $(inputs[i]).on('blur', offFocus);
    }
});
