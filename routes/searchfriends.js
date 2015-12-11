
/*
 * GET users listing.
 */

exports.list12 = function(req, res){

if(req.session.u_id){
console.log("reach friends page");
//console.log(req.session.uid);

var uid1 = req.session.u_id;
console.log("uid:"+ uid1);
var mysql=require("mysql");

var conn1=mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
socketPath : '/tmp/mysql.sock',
database: 'ruchit',

});
conn1.connect();
    var query=conn1.query("select u_id , name from users where u_id in (select u_id from friends where f_id="+uid1+" and status=1 union select f_id from friends where u_id="+uid1+" and status=1 ) and u_id<>"+uid1,function(err,result){
console.log(query.sql);
//console.log(q1);

if(err){
console.error(err);
}
else{
if((result.length)>0){
console.log("stage: 1");
  var resultSetId = [];
  var resultSetName = [];
  for(var i in result)
  {
  console.log("name:");
  resultSetId.push(result[i].uid);
  resultSetName.push(result[i].name);
  console.log("name: "+result[i].name+"  id: "+result[i].uid);
  }
   
  res.render('friend',{resultSetId:resultSetId , resultSetName:resultSetName}); 
  conn1.end();
}
else{
console.log("no records");
res.render('final', {title:"No existing friends"});
}}});

}
};


exports.list14 = function(req, res){

if(req.session.u_id){
console.log("reach search friends page");
//console.log(req.session.uid);
var name = req.param("search");
console.log(name);
var uid1 = req.session.u_id;
console.log("uid: "+ uid1);
var mysql=require("mysql");

var conn=mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
socketPath : '/tmp/mysql.sock',
database: 'ruchit',

});
conn.connect();

    var query=conn.query("select u_id , name from users where u_id not in (select u_id from friends where f_id="+uid1+" and status=1 union select f_id from friends where u_id="+uid1+" and status=1 ) and u_id<>"+uid1+" and name like '%"+name+"%'",function(err,result){
    console.log(query.sql);
//console.log(q1);

if(err){
console.error(err);
}
else{
if((result.length)>0){
console.log("stage: 1");
  var resultSetId = [];
  var resultSetName = [];
  for(var i in result)
  {
  console.log("id :"+result[i].u_id);
  resultSetId.push(result[i].u_id);
  resultSetName.push(result[i].name);
  console.log("name: "+result[i].name+"  id: "+result[i].u_id);
  }
   
  res.render('searchbar',{resultSetId:resultSetId , resultSetName:resultSetName}); 
  conn.end();
}
else{
console.log("no records");
res.render('final', {title:"No user with this name"});
}}});

}
};


exports.sendFriendRequest = function(req, res){

if(req.session.u_id){
console.log("reach add new friend page");
//console.log(req.session.uid);
var toUid = req.param("abc");
console.log("To user: "+toUid);
var fromUid = req.session.u_id;
console.log("uid: "+ fromUid);
var mysql=require("mysql");

var conn=mysql.createConnection({
 host: 'localhost',
user: 'root',
password: '',
socketPath : '/tmp/mysql.sock',
database: 'ruchit',

});
conn.connect();
    var query=conn.query("insert into friends values("+fromUid+","+toUid+","+2+")" ,function(err,result){
console.log(query.sql);
//console.log(q1);

if(err){
console.error(err);
}
else{
 
  res.render('final',{title:"Request sent successfully"}); 
  conn.end();
 
}});

}

};


exports.pendingReq = function(req,res){
if(req.session.u_id){
console.log("reach pending req friend page");

var uid1 = req.session.u_id;
console.log("uid: "+ uid1);
var mysql=require("mysql");

var conn=mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
socketPath : '/tmp/mysql.sock',
database: 'ruchit',

});
conn.connect();
    var query=conn.query("select name , u_id from users where u_id in(select u_id from friends where f_id="+uid1+" and status=2)",function(err,result){
console.log(query.sql);
//console.log(q1);

if(err){
console.error(err);
}
if((result.length)>0){
console.log("stage: 1");
  var resultSetId = [];
  var resultSetName = [];
  for(var i in result)
  {
  console.log("id :"+result[i].u_id);
  resultSetId.push(result[i].u_id);
  resultSetName.push(result[i].name);
  console.log("name: "+result[i].name+"  id: "+result[i].u_id);
  }
   
  res.render('pendingFriendRequest',{resultSetId:resultSetId , resultSetName:resultSetName}); 
  conn.end();
}
else{
console.log("no records");
res.render('final', {title:"No pending requests"});
}});

}

};


exports.approveFriendRequest = function(req, res){

if(req.session.email){
console.log("reach approve friend req page");
//console.log(req.session.uid);
var toUid = req.param("abc");
console.log("To user: "+toUid);
var fromUid = req.session.u_id;
console.log("uid: "+ fromUid);
var mysql=require("mysql");

var conn=mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
socketPath : '/tmp/mysql.sock',
database: 'ruchit',

});
conn.connect();
    var query=conn.query("update friends set status=1 where f_id="+fromUid+" and u_id="+toUid ,function(err,result){
console.log(query.sql);
//console.log(q1);

if(err){
console.error(err);
}
else{
  res.render('final',{title:"Request Approved successfully"});
  conn.end();
}});

}
};








