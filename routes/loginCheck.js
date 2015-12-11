
exports.signup = function(req, res){
	var u,p ,a, d;
	u=req.param("email");
    p=req.param("password");
    a=req.param("sex");
    d=req.param("dob");
    var n=req.param("username");
	 // console.log(u+" respond with a resource"+p);


//    
    

		var m=require("mysql");

		var c=m.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			socketPath : '/tmp/mysql.sock',
			database: 'ruchit',
			multipleStatements:true
			
		});
		c.connect();
	var query1=c.query("insert into users values (null, '"+u+"','"+p+"','"+a+"','"+d+"','"+n+"')",function(err,result){
		console.log(query1.sql);	
		if(err){
				console.error(err);
		//console.log("4rr");
			return;
		}
		else{
		
		var query2=c.query("select max(u_id) as abc from users",function(err1,result1){
			console.log(query2.sql);	
			if(err1){
					console.error(err1);
			//console.log("4rr");
				return;
				
			}
					 req.session.u_id =result1[0].abc ;
					 console.log(req.session.u_id+" behn");
						res.render('success',{ id:req.session.u_id });
		
		});
		
		
		
		
		
		
		 
//				 console.error(result[0].xy);
			
		}
	});	
		//c.end();

	
};  


exports.signinCheck = function(req, res){
	if(req.method=="POST")
		{
		console.log(req.method);
	var u,p ,email, password, age, dob, u_id;
	u=req.param("email");
    p=req.param("password");
	var m=require("mysql");
	console.log(u);
	console.log(p);

	var c=m.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		socketPath : '/tmp/mysql.sock',
		database: 'ruchit',
		multipleStatements :true
	});
	c.connect();
     var t=c.query("select count(*) as count,u_id,email,password,dob from ruchit.users  where email='"+(u)+"' and password='"+(p)+"'",function(err,result){
	console.log(t.sql);	
	//console.log(q1);	
	
	if(err){
			console.error(err);
	}
	//console.log(result[0].xy);
	
	 if((result[0].count)>0){
		 req.session.u_id = result[0].u_id;
		 console.log(req.session.u_id+"  my uid");
		 req.session.email=result[0].email;
		// console.log(req.session.email);
		 //console.log(req.session.u_id);
		 
		 email = result[0].email;
		 password = result[0].password;
		 age = result[0].age;
		 dob = result[0].dob;
		 
		 
		 if(req.session.email) {
			 res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
		 
		 
		 res.render('success',{email:email,password:password,age:age,dob:dob});
		 
		 }
	 
		 
		 }
	 else{
		 res.render('error');
	 }
	return;
		
		 
	});
       
		
	
     
	
}
	

};
exports.logout = function(req, res){
	req.session.destroy();	
	res.render('index',{title:"Welcome to login"});
	console.log('logout');	
};
