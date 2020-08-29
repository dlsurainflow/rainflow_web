const express = require("express")
const session = require("express-session")
const bodyparser = require("body-parser")
const hbs = require("hbs")
const url = require("url")
//const publicPath = path.join(_dirname, '../views');

const app = express()
var path = require('path');


const {Pool, Client } = require('pg')
// pools will use environment variables asghdaadjsdgcyuevhaigciyaskdakjds


const client = new Client({
	user: 'tammy',
	host:'RainFLOW.live',
	database:'rainflow',
	password:'Inmediasres8!',
	port: 5432,
	
})

client.connect()

app.get("/", (req,res)=>{ 
    var data;
	var filter;
    client.query("SELECT * FROM common_raft ORDER BY polyID", function (err, result) {
        if (err) throw err;
        console.log(result.rows);
        data = result.rows;

		res.render("home.hbs", {data: result.rows, filter:'none'});
		
    });
    
    
})

app.get("/rain", (req,res)=>{ 
    var data;
	var filter;
    client.query("SELECT * FROM common_raft ORDER BY polyID", function (err, result) {
        if (err) throw err;
        console.log(result.rows);
        data = result.rows;
		res.render("home.hbs", {data: result.rows, filter:'rain'});
		
    });
    
    
})

app.get("/flood", (req,res)=>{ 
    var data;
	var filter;
    client.query("SELECT * FROM common_raft ORDER BY polyID", function (err, result) {
        if (err) throw err;
        console.log(result.rows);
        data = result.rows;
		res.render("home.hbs", {data: result.rows, filter:'flood'});
		
    });
    
    
})
/*
app.get("/mobilerain", (req,res)=>{ 
    var data;
	var filter;
	
	client.query("DELETE FROM common_mobile WHERE((dislikes/likes) > 1 AND (likes) > 1)", function(err, result){
		if (err) throw err;
		console.log("No. of records deleted- " + result.affectedRows);
	});
	
	
    client.query("SELECT * FROM common_mobile ORDER BY polyID", function (err, result) {
        if (err) throw err;
        console.log(result);
        data = result;
		res.render("home_mobile.hbs", {data: result, filter:'rain'});
		
    });
    
    
})

app.get("/mobileflood", (req,res)=>{ 
    var data;
	var filter;
	
	client.query("DELETE FROM common_mobile WHERE((dislikes/likes) > 1 AND (likes) > 1)", function(err, result){
		if (err) throw err;
		console.log("No. of records deleted- " + result.affectedRows);
	});
	
    client.query("SELECT * FROM common_mobile ORDER BY polyID", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        data = result;
		res.render("home_mobile.hbs", {data: result, filter:'flood'});
		
    });
    
    
})



app.get("/mobile", (req,res)=>{ 
    var data;
	var filter;
    
	client.query("DELETE FROM common_mobile WHERE((dislikes/likes) > 1 AND (likes) > 1)", function(err, result){
		if (err) throw err;
		console.log("No. of records deleted- " + result.affectedRows);
	});

	client.query("SELECT * FROM common_mobile ORDER BY polyID", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        data = result;
		res.render("home_mobile.hbs", {data: result, filter:'none'});
		
    });
    
    
})

*/


app.listen(30300, ()=>{
    console.log("server live at port 30300");
})

app.use(express.static(path.join(__dirname, "/public")));
