$("#tbody").on('click', '.delete', function() {
    var id = $(this).data('id');

    if (confirm('Do you want to delete this data?')) {
        $.ajax({
            url: '/bookmarks_title/' + id,
            type: 'delete',
            success: function() {
                alert("delete success.");
                $('#search-frame').prop('value', '');
                $.get('/print', function(data) {
                    dataPrinter(data);
                });
            }
        });
    };
});
