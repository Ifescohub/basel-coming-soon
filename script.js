
$("#newsletter").validate({

    errorPlacement: function (error, element) {
        error.insertAfter(element);
        if (element.hasClass('mail')) {
            element.addClass("red");
            element.next().removeClass('passValid').addClass('passError');
        }
    },
    success: function (div) {
        if (div.prev().hasClass('mail')) {
           div.prev().removeClass('red');
        }
    },
    highlight: function (element, errorClass, validClass) {
        if ($(element).hasClass('mail')) {
            $(element).next().removeClass('passValid').addClass('passError');
        } else {
            $(element).addClass(errorClass).removeClass(validClass);
        }
    },
    unhighlight: function (element, errorClass, validClass) {
        if ($(element).hasClass('mail')) {
            $(element).next().removeClass('passError').addClass('passValid');
        } else {
            $(element).removeClass(errorClass).addClass(validClass);
        }
    },

    rules:{
        email: {
            required: true,
            email: true
        }
    },

    message:{
        email: {
            required: "Email cannot be empty",
            email: "Please provide a valid email"
        },

        submitHandler: function(form) {
            form.submit();
        }
}
});
