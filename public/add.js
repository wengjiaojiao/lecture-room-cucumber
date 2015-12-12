$("#submit").on("click", function() {
    if ($("#name").val() === "") {
        $("<div class='info'>Please input the right name!</div>").appendTo(".modal-body");
    } else if ($("#address").val() === "") {
        $(".info").empty();
        $("<div class='info'>Please input the right address!</div>").appendTo(".modal-body");
    } else {
        $(".info").empty();
        $.post('/bookmarks_title', {
            title: $("#name").prop('value'),
            address: $("#address").prop('value')
        }, function() {});
        $.get('/print', function(data) {
            dataPrinter(data);
        });
    }
    $('#name').prop('value', '');
    $('#address').prop('value', '');
});
