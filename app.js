
/**
 * Module dependencies.
 */

var express = require('express');


  var routes = require('./routes')
  , user = require('./routes/user')
  , login=require('./routes/login')
  , loginCheck=require('./routes/loginCheck')
  , login3=require('./routes/login3')
  , creategroup=require('./routes/creategroup')
    ,newsfeed=require('./routes/newsfeed')
   ,newsfeed1=require('./routes/newsfeed1')
    , group=require('./routes/group')
   , friendreq1=require('./routes/friendreq1')
    , groupdb=require('./routes/groupdb')
    , userdetails=require('./routes/userdetails')
    ,about=require('./routes/about')
    ,userdetail1=require('./routes/userdetail1')
  ,useroverview=require('./routes/useroverview')
    , addfriend=require('./routes/addfriend')
  , searchfriends=require('./routes/searchfriends')
  
  , enterdetails=require('./routes/enterdetails')
  , http = require('http')
  , path = require('path')
  
  ;
  

var app = express();



var session = require('client-sessions');
app.use(session({
cookieName: 'session',
        secret: 'ruchit',
        duration: 30 * 60 * 1000,
        activeDuration: 5 * 60 * 1000,
}));


// all environments
app.set('port', process.env.PORT ||6080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.post('/signinCheck', loginCheck.signinCheck);
app.get('/signinCheck', loginCheck.signinCheck);
app.post('/group', group.group);
//app.post('/signup',loginCheck.signup);
app.get('/friends',searchfriends.list12);
app.post('/searchfriendbar12',searchfriends.list14);
//app.get('/signin',login.signin);
app.post('/addfriend',addfriend.addfriend);
app.post('/addSearchedFriend',searchfriends.sendFriendRequest);
app.get('/logout', loginCheck.logout);
app.post('/creategroup',creategroup.creategroup);
app.get('/creategroup',creategroup.creategroup);
app.get('/userdetails',userdetails.userdetails);
app.get('/pendingReq',searchfriends.pendingReq);
app.post('/approveFriendRequest',searchfriends.approveFriendRequest);
app.get('/about',about.about);
app.get('/useroverview',useroverview.useroverview);
app.post('/newsfeed',newsfeed.newsfeed);
app.post('/enterdetails',enterdetails.enterdetails);
app.post('/friendreq1',friendreq1.friendreq1);
app.post('/newsfeed1',newsfeed1.select1);
app.post('/groupdb',groupdb.groupdb);
app.get('/showgroups',groupdb.groupdb1);
app.get('/newsfeed1',newsfeed1.select1);
app.get('/userdetail1',userdetail1.userdetail1);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
