//Inicializamos las variables necesarias.
var express = require('express')
  , http = require('http')
  , url  = require('url')
  , mysql      = require('mysql')
  , passwordHash = require('password-hash')
  , bodyParser = require('body-parser')
  , bcrypt = require('bcryptjs')
  ;
//toca instalar phyton 2.7 y otras cosas para que funcione bycrip https://www.npmjs.com/package/bcrypt
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var urlinicio = '';
server.listen(8080);
io.set('log level',1); //Lo pongo a nivel uno para evitar demasiados logs ajenos a la aplicación.
connection=0;
/*app.configure(function(){

	//No uso layout en las vistas
	app.set('view options', {
	  layout: false
	});

	//Indicamos el directorio de acceso publico
    app.use(express.static('public'));

});*/
//app.use(express.static('public'));
//Marco la ruta de acceso y la vista a mostrar
/*app.get('/', function(req, res){
    res.render('index.jade', { 
    	pageTitle: 'Pizarra'
    });
});*/
app.use(express.static(__dirname + '/')); 
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

/////////////////////////////////////////////////////////
/*Con esto permitimos que cualquier ruta que comience por sifu sea aceptada*/
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get(/sifu/, function(req, res) {
  res.render('login.html');
  var url_parts = url.parse(req.url);
 	//////////////hacemos la conexion con la bd//////////////
 	var urldbname = url_parts.pathname;
 	urlinicio = urldbname;
 	var dbname=urldbname.split('_');
        dbname='sifu_'+dbname[1];
    connection = mysql.createConnection({
  		host     : 'localhost',
  		user     : 'root',
  		password : '',
  		database : dbname
	});

	connection.connect(function(err) {
  		
	});
	
});




app.post('/aula', function(req, res) {	
	var usuario = req.body.user.username;
	var clave = req.body.user.password;
	var url = req.body.user.url;
	
	var salt = bcrypt.genSaltSync(10);
	var tabuser = connection.query("SELECT * FROM usuario WHERE usuario = ?",
    [usuario],
    function(err, rows) {
        if (err) {        	
            return done(err);
        }
        
        if ((rows.length)==0) {
        	
        	io.on('connection', function (socket) {

        		socket.emit('loginError', { msg: 'Error usuario desconocido, intenta nuevamente' });

        	});
  			
        	return res.redirect(urlinicio);
        }
        if ((bcrypt.compareSync(clave, rows[0].password))==true) {
          res.render('aula.html');
        }else{
        	io.on('connection', function (socket) {
        	socket.emit('loginError', { msg: 'Error contraseña no valida, intenta nuevamente' });
        	});
        	return res.redirect(urlinicio);
        }
	});
});


io.sockets.on('connection', function(socket) {

	/* 
		Cuando un usuario realiza una acción en el cliente,
	   recibimos los datos de la acción en concreto y 
	   envío a todos los demás las coordenadas escribiendo
	   en el canvas
	*/

	socket.on('mousedown',function(e){
		console.log(e);
		io.sockets.emit('mousedown',e);
	});
	socket.on('mousemove',function(e){
		console.log(e);
		io.sockets.emit('mousemove',e);
	});
	socket.on('mouseup',function(e){
		console.log(e);
		io.sockets.emit('mouseup',e);
	});
	socket.on('mouseleave',function(e){
		console.log(e);
		io.sockets.emit('mouseleave',e);
	});
	socket.on('repinta',function(){
		console.log();
		io.sockets.emit('repinta');
	});

});