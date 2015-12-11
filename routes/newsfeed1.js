
/*
 * GET users listing.
 */

exports.select1 = function(req, res){
	
	//var u,p ,email, password, age, dob;
	
	
	var m=require("mysql");

	var c=m.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		socketPath : '/tmp/mysql.sock',
		database: 'ruchit',
		
	});
	var a1=[];
	var a2=[];
	var a3=[];
	var a4=[];
	var a5=[];
	var a6=[];	
	c.connect();
     var t=c.query("  select status, email,time  from newsfeed n inner join users u  on  n.u_id=u.u_id and n.u_id in(select f_id from friends where u_id='"+req.session.u_id+"' );   ",function(err,result){
	console.log(t.sql);	
	//console.log(q1);
	
	if(err){
			console.error(err);
	}
	
	//console.log(result[0].xy);
	
	 else{
		 for (var j in result){
		     	a1.push(result[j]["status"]);
		    	a3.push(result[j]["email"]);
		    	a5.push(result[j]["time"]);     	
		 }
			
		 
  var t1=c.query("   select status,email,time from newsfeed n inner join users u on n.u_id=u.u_id  and u.u_id='"+req.session.u_id+"'  order by time desc;   ",function(err1,result1){
	  console.log(t1.sql);	

	    		if(err1){
	    				console.error(err1);
	    		}
	    		
	
	     
	     else
	    	{
	    	 for (var i in result1){
	    			a2.push(result1[i]["status"]);
	    			a4.push(result1[i]["email"]);
	    			a6.push(result1[i]["time"]);
	    			
	    			
	    	    			
	    	 }}
	    	 
 
	     


	    	     console.log("hello "+a2[0]);
	    	     res.render('newsfeed1',{a1:a1, a2:a2,a3:a3,a4:a4,a5:a5,a6:a6});
	    	
	     }); 	 
	 }
	
	
	//for (var j in result){
     //	a1.push(result[j]["status"]);}
	console.log("hello "+a1[0]);
	console.log("brkpoint2: "+a2[0]);
	       	   
	 //res.render('success',{email:email,password:password,age:age,dob:dob});
		

    //res.render('newsfeed1',{a1:a1, a2:a2}); 	 
	});
       
     

           	     

};