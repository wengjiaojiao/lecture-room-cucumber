var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');
var mysql  = require('mysql');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('bookmarks', 'root', '', {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql'
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public'));
app.engine(".html",ejs.__express);
app.set("view engine",'html');

var bookmarks_title = sequelize.define('bookmarks_title',   {  
    title:  Sequelize.STRING
}, {
    tableName: 'bookmarks_title',
    timestamps: false
});

app.get('/', function (req, res) {
  res.render("index", {});
});

app.get('/print', function (req, res) {
    var all_data = [];

    bookmarks_title.findAll().then(function(data) {
        for (var i = 0; i < data.length; i++) {
            all_data.push(data[i].dataValues);
        }
    res.send(all_data);
    });
});


app.delete('/bookmarks_title/:id' ,function (req, res){
    var id = req.params.id;

    bookmarks_title.destroy({where:{id:id}});
    res.end();
});

app.post('/bookmarks_title', function(req, res) {
    var title = req.body.title;

    bookmarks_title.create({title:title});
});


var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
