exports.friendreq1 = function(req, res){


	
	

		var m=require("mysql");
var n=req.param("dost");
console.log("dost"+n);
		var c=m.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			socketPath : '/tmp/mysql.sock',
			database: 'ruchit',
			//multipleStatements: true
		});
		var r;
	
				c.connect();
				
				
				var q2=c.query(" select name from ruchit.users where name like '%"+n+"%'",function(err,result1){
					console.log(q2.sql);	
					if(err){
							console.error(err);
							console.log("if");
					}
					else
					{
						var x=[];
						for( var i=0;i<result1.length;i++){
							console.log(result1[i].name);
							
							x.push(result1[i].name);
							}
						res.render('mc',{x:x})
							
					}
				});
				
				
				};
					
				