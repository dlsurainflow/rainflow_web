const express = require("express")
const session = require("express-session")
const bodyparser = require("body-parser")
const hbs = require("hbs")
const url = require("url")
//const publicPath = path.join(_dirname, '../views');

const app = express()

const mysql = require('mysql');
var path = require('path');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'node',
    password: 'dlsurainflow1920_1234',
    database: 'rainflow'
});

con.connect();
app.get("/", (req,res)=>{ 
    var data;
    con.query("SELECT * FROM common_raft ORDER BY polyID", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        data = result;
		res.render("home.hbs", {data: result});
		
    });
    
    
})

app.get("/flood", (req,res)=>{ 
    var data;
    con.query("SELECT * FROM common_raft ORDER BY polyID", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        data = result;
		res.render("home_flood.hbs", {data: result});
		
    });
    
    
})

app.get("/rain", (req,res)=>{ 
    var data;
    con.query("SELECT * FROM common_raft ORDER BY polyID", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        data = result;
		res.render("home_rain.hbs", {data: result});
		
    });
    
    
})


app.get("/mobile", (req,res)=>{ 
    var data;
    con.query("SELECT * FROM common_mobile ORDER BY polyID", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        data = result;
		res.render("home_mobile.hbs", {data: result});
		
    });
    
    
})




app.listen(30300, ()=>{
    console.log("server live at port 30300");
	// console.log(result.latitude);
})

app.use(express.static(path.join(__dirname, "/public")));