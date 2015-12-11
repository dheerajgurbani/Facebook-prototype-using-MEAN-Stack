
/*
 * GET users listing.
 */

exports.creategroup = function(req, res){
	
	//var u,p ,email, password, age, dob;
	var gn=req.param("gname");
    //p=req.param("password1");
	//console.log("username: "+u);
	var m=require("mysql");

	var c=m.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		socketPath : '/tmp/mysql.sock',
		database: 'ruchit',
		
	});
	c.connect();
     var t=c.query(" select email,u_id from users where  u_id in ( select f_id from friends where u_id='"+req.session.u_id+"' ); ",function(err,result){
	
  //  console.log(t.sql);	
    if(err){
			console.error(err);
	}
	
	//console.log(result[0].xy);
	
	 else{
		   
	    //   	console.log(result); 
//	       	res.send(result)
		//res.render('friend', { title12: result }); 
	        //var arr = result;
	 
	       	     
	       	     
var a1=[];
var a2=[];
for (var i in result){
	a1.push(result[i]["email"]);
	a2.push(result[i]["u_id"]);
console.log(result[i]["email"]+" "+result[i]["u_id"]+"yolo")	;
}


res.render('creategroup', { title12: a1,title13: a2 }); 
	
      	     
	       	     
	       	     
	       	     
	 
	       //y.push(arr[i].email.toString())	;
	       	 //    }\
	 
	       	
	 }

    //var data;
    //res.send(result); 
	});
       

	c.end();
	
    	  


    
    
	  
	
	
	

};