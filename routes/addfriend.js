exports.addfriend = function(req, res){
	var u=req.param('sname');
	console.log("paaji");
    //p=req.param("password1");
	console.log("username: "+u);
	var m=require("mysql");

	var c=m.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		socketPath : '/tmp/mysql.sock',
		database: 'ruchit',
		multipleStatements: true
		
	});
	c.connect();
     var t=c.query("select email,u_id from ruchit.users where email='"+u+"' ",function(err,result){
	console.log("break 1 "+t.sql);	
	console.log(result.length);
	//console.log(q1);
	
	if(err){
			console.error(err);
	}
	
	//console.log(result[0].xy);
	
	 else{
		   
	    //   	console.log(result); 
//	       	res.send(result)
		//res.render('friend', { title12: result }); 
	 //console.log(result[0].u_id);
	console.log(req.session.u_id+"break4"); 
	var myUid = req.session.u_id;
	console.log("My Uid: "+myUid);
	 var q1=c.query("insert into ruchit.friends values ( "+myUid+","+result[0].u_id +",'0')",function(err1,result1){
		 console.log(q1.sql);	
	 
	     if(err1)
	    	 console.error(err1);
	     
	     
	     
	     else
	    	 {
	    	 
	    	 var q2=c.query("insert into ruchit.friends values ('"+result[0].u_id +"', '"+ req.session.u_id+"', '"+0+"')",function(err2,result2){
	    		 console.log(q1.sql);	
	    	 
	    	     if(err2)
	    	    	 console.error(err2);
	    	     else
	    	    	 {
	    	    	 
	    	    	 console.log('success');
	    	    	 }
	    		 
	    		 
	    		 
	    	 });
	    	 
	    	 
	    	 
	    	 
	    	 
	    	 console.log('success');
	    	 }
		 
		 
		 
	 });
	 
	 
	 
	 
	 
		 
	 }
	});
       

	

	
	
	
};