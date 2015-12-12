function dataPrinter(data) {
    $('#tbody').empty();
    $('.result').empty();
    data.forEach(function(val) {
        $('<tr><td>' + val.title + '</td>' + '<td class="delete" data-id= "' + val.id + '" ' + '> delete' + '</td></tr>').appendTo('#tbody');
    });
    var count = $("#tbody tr").length;

    $('<div>' + '共搜索到' + count + '条数据' + '</div>').appendTo('.result');
}

function highLight(idVal, keyWord, color) {
    var hlValue = new RegExp("(" + keyWord + ")(?=[^<>]*<)", "gi");

    document.getElementById(idVal).innerHTML = document.getElementById(idVal).innerHTML.replace(hlValue,
        '<span style="background-color:' + color + ';color:white">' + '$1' + '</span>');
}

function getNewData(data, searchText) {
    var newData = [];
    var filterDatas = _.filter(data, function(filterData) {
        var title = filterData.title.toLowerCase();

        return title.indexOf(searchText) !== -1;
    });

    _.forEach(filterDatas, function(filterData) {
        newData.push({
            title: filterData.title,
            id: filterData.id
        });
    });
    return newData;
}



$(function() {
    $.get('/print', function(data) {
        dataPrinter(data);

        $('.search-frame').on('input', function() {
            var searchText = $('.search-frame').val();

            searchText = searchText.toLowerCase();
            var newData = getNewData(data, searchText);

            dataPrinter(newData);
            highLight('tbody', searchText, "#FF1A9E");
        });
    });
})
