exports.groupdb = function(req, res){


	var y=[];
	
	 name=req.param("gname");
	/*for (var i=0;i<gno;i++)
		{
		
		var x=req.param();
	//	console.log(JSON.stringify(req.body));
	//	console.log(x);
		if(x===i.toString()){
			console.log(i);
			y.push(i+1);
			
		}
		
		
		}
	*/
	
	

		var m=require("mysql");

		var c=m.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			socketPath : '/tmp/mysql.sock',
			database: 'ruchit',
			multipleStatements: true
		});
		var r;
	
				c.connect();
				
				
				var q4=c.query("select  max(u_id) as xy from ruchit.users",function(err,result){
					console.log(q4.sql);	
					if(err)
							console.error(err);
					
					else
					{console.log("4rr");
				console.log("max users"+result[0].xy);
					var gno=result[0].xy;
					
					
					for (var i=0;i<gno;i++)
					{
					
					var x=req.param(i);
				//	console.log(JSON.stringify(req.body));
					console.log(x);
					if(x!=null)
					  y.push(x);	
					
					
					
				
					}
					}
				});
					
				
				
				
				
				
				
		
				var q=c.query("insert into ruchit.groups values (null, '"+name+"', '"+req.session.u_id+"')",function(err,result){
			console.log(q.sql);	
			if(err)
					console.error(err);
			
			else
			{console.log("4rr");
		
			
				var q1=c.query("select  max(g_id) as xy from ruchit.groups",function(err1,result1){
					console.log(q1.sql);	
					if(err1)
							console.error(err1);
					
					else
					{//console.log("4rr1");
				
					r=result1[0].xy;
					console.log(r);
					
					
					var q6=c.query("insert into ruchit.groupmembers values ('"+r+"', '"+req.session.u_id+"')",function(err6,result6){
						console.log(q6.sql);	
						if(err6)
								console.error(err);
						
						else
						console.log("faaaadaa");				
					
					
				});
					
					
					
					
					
					
					
						
				//console.log("bcmc"+gno)

				for( var i1=0;i1<y.length;i1++){
					var q3=c.query("insert into ruchit.groupmembers values ('"+r+"', '"+y[i1]+"')",function(err3,result3){
						console.log(q3.sql);	
						if(err3)
								console.error(err);
						
						else
						console.log("4rr");				
					
					
				});
				}
			}});
				}
				});
};





















exports.groupdb1 = function(req, res){

	
	console.log("show all groups");

		var m=require("mysql");

		var c=m.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			socketPath : '/tmp/mysql.sock',
			database: 'ruchit',
			multipleStatements: true
		});
		var r;
	
				c.connect();
		var y=[];
				var q=c.query("select g_name from groups inner join groupmembers on groups.g_id=groupmembers.g_id where groupmembers.u_id='"+req.session.u_id+"'",function(err,result){
			console.log(q.sql);	
			if(err)
					console.error(err);
			
			else
				
			{ //console.log('else');
				//console.log("4rr");
				//console.log(result.length);
			 for(var i=0;i<result.length;i++)
				 y.push(result[i].g_name);
				}
			
			
			 res.render('showgroups',{y:y});
				
				});
};

