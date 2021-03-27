
$(function() {

    $(".digit").on('click', function() {
      var num = ($(this).clone().children().remove().end().text());
      $("#output").append('<span>' + num.trim() + '</span>');
    });

    $("#space").on('click', function() {
        $("#output").append('<span>&nbsp;</span>');
    });

    
    $('.fa-long-arrow-left').on('click', function() {
      $('#output span:last-child').remove();
    });

    $('#sendMessage').on('click', function(){
        var data = { message: $('#output').text() };

        $.ajax({
            url: '/getSavior',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            success: function (res) {
                alert(res.message);
            },
            data: JSON.stringify(data)
        });
    });
});
