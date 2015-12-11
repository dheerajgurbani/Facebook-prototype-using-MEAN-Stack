
exports.enterdetails = function(req, res){

var	sname=req.param("sname");
   var  syear=req.param("syear");
    var cname=req.param("cname");
    var crole=req.param("crole");
    var cyear=req.param("cyear");
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
	var query1=c.query("insert into about values ('"+req.session.u_id+"', '"+sname+"','"+syear+"','"+cname+"','"+crole+"','"+cyear+"')",function(err,result){
		console.log(query1.sql);	
		if(err){
				console.error(err);
		//console.log("4rr");
			return;
		}
		else{
		
		
		
		
		
		
		
		 
		 console.log('success');
		
		}
	});	
		//c.end();

	
};  




