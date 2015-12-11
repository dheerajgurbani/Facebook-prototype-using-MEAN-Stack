
/*

exports.list = function(req, res){
	if(req.method=="POST")
		{
		console.log(req.method);
	var u,p ,email, password, age, dob, u_id;
	u=req.param("username1");
    p=req.param("password1");
	var m=require("mysql");

	var c=m.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		socketPath : '/tmp/mysql.sock',
		database: 'ruchit',
		
	});
	c.connect();
     var t=c.query("select count (*) as count,u_id,email,password,age,dob from ruchit.users  where email='"+u+"' and password='"+p+"'   ",function(err,result){
	//console.log(t.sql);	
	//console.log(q1);	
	
	if(err){
			console.error(err);
	}
	//console.log(result[0].xy);
	
	 if((result[0].count)>0){
		 req.session.u_id = result[0].u_id;
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
       
		
	
     
	c.end();
	
}
	else{
		
		if(req.session.email)
		 {
			//console.log('get');			
			 res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
			 
			 
			 res.render('success',{email:email,password:password,age:age,dob:dob});
			
		 }
		else
			res.render('login3');
		
	}

};
exports.list2 = function(req, res){
	
	
	
	
	req.session.destroy();	
	res.render('login3');
	console.log('logout');
	
	
};


*/




