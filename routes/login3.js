
/*
exports.ruchla2 = function(req, res){

	
	res.render('login3');
	res.end();
};

<html>
<head>
<link type="text/css" rel="stylesheet" href="stylesheets/style1.css" />
<script>
function addFriend(id){
alert(id);
var id = id;
document.getElementById("abc").value=id;
}
</script> 
</head>
<body>
	<div class="headerx"></div>
	<div class="header">
	<input type="text" name="search" id="searchtext">
	<a id="homeLink" href='/success'> Home </a>	
	<a id="aboutLink" href='/about'> About </a>
	<a id="friend" href='/friendList'> Friends </a>
	<a id="logout" href='/logout'> Log Out </a>
	
	</div>
	<form method="post" action="addSearchedFriend">
	<br><br><br><br><br><br>
	
	
	
<% for(var i in resultSetName){ %>
name: <%= resultSetName[i] %>
<a href="/aboutFriend/<%= resultSetId[i] %>" > About </a>
<input type="submit" onclick="addFriend(<%= resultSetId[i] %>)" name=<%= resultSetName[i] %> value="Add friend" id=<%= resultSetId[i] %> /> <br>
<% } %>
<input type="hidden" name="abc" id="abc" value=<%= resultSetId[i] %>></input>
	 </form>
</body>
</html>*/