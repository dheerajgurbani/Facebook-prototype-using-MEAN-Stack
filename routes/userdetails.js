exports.userdetails=function(req, res){



	var m=require("mysql");
	var c=m.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		socketPath : '/tmp/mysql.sock',
		database: 'ruchit',
		multipleStatements :true
	});
	c.connect();
     var t=c.query("select * from about  where u_id='"+req.session.u_id+"';", function(err,result){
	console.log(t.sql);	
	console.log("aboutttt");
	//console.log(q1);	
	
	if(err){
			console.error(err);
	}
	//console.log(result[0
	else
		{
		console.error(result[0].sname);

		
		res.render('useroverview',{ a:result[0].sname, b:result[0].syear, c:result[0].cname, d:result[0].crole});
		
		
		
		}
	
	
     });
	
};