$('#send-button').click(function() {
    console.log('clicked!');
    var payload = $('#payLoad').val();
    var dest = $('#endPoint').val();
    console.log(payload);
    console.log(dest);

    $.ajax({
            url: dest,
            type: "POST",
            data: payload,
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        })
        .done(function() {
            // alert("success");
            $('#outcome').removeClass("hidden");
            $('#outcome').prepend("<p>" + payload + "</p>");
            $('#outcome').prepend("<span class=\"dateTime\">" + new Date($.now()) + "</span>");
        })
        .fail(function() {
            alert("error");
        })
        .always(function() {
            // alert("complete");
    });
});