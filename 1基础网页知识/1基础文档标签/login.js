//请求express
var express = require('express');
//创建express对象
var app = express();
//请求mysql
var mysql = require('mysql');
//设置数据库连接信息
var connection = mysql.createConnection({

    host: '127.0.0.1', // 数据库连接地址
    user: 'root', // 数据库登录用户名
    password: '123456', // 数据库登录密码
    database: 'db_student_swing' // 选择哪个数据表

});


//建立连接
connection.connect();
//设置静态文件路径
app.use(express.static('public'));


app.get('/', function(req, res) {
    res.sendFile(__dirname + "/" + "login.html");
})

//创建实现登录功能的路由
app.get('/login', function(req, res) {
    //获取用户输入的账号，密
    var response = {
        "account": req.query.account,
        "password": req.query.password,
    };


    //创建查询数据的sql语句实现登录功能，查询账号和密码并且与用户输入的账号密码完全一致

    var selectSQL = "select username,password from users where username = '" + req.query.account + "' and password = '" + req.query.password + "'";
    //进行数据库操作
    connection.query(selectSQL, function(err, result) {
        //打印错误信息
        if (err) {
            console.log('[login ERROR] - ', err.message);
            return;
        }
        //如果查询结果为空，则登录失败，否则登录成功
        if (result == '')

        {
            console.log("帐号密码错误");


            res.end("fail");

        } else

        {
            // window.location.href = './图片链接.html'
            console.log("登录成功");
            // res.redirect('https://www.baidu.com/')
            res.redirect("http://localhost:8080/1.html")
                // res.end('');
        }

    });

    console.log(response);

})


//创建服务器

var server = app.listen(8081, function() {

    console.log('访问地址为 127.0.0.1:8081')

})