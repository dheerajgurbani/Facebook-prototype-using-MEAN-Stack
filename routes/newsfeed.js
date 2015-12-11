
exports.newsfeed = function(req, res){
	var u,p;
	
	u=req.param("name");
	
    console.log("u is "+u);
	 // console.log(u+" respond with a resource"+p);

	  

		var m=require("mysql");

		var c=m.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			socketPath : '/tmp/mysql.sock',
			database: 'ruchit',
			//multipleStatements:true
			
		});
		c.connect();
		console.log("status uis "+u);
	var q=c.query("insert into ruchit.newsfeed values ('"+req.session.u_id+"', '"+u+"',curtime())",function(err,result){
		console.log(q.sql);	
		if(err)
				console.error(err);
	
		else
				{
			        var jsonres = result.insertId;
					//res.end(jsonres);
			        //res.send('newsfeed',{id:jsonres});
			
				}
			
			
			 
		});
		c.end();
		
	    	  

  
	
};  