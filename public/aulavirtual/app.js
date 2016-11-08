//Inicializamos las variables necesarias.
var express = require('express')
  , http = require('http')
  , https = require('https')
  , fs = require('fs')
  , url  = require('url')
  , mysql      = require('mysql')
  , passwordHash = require('password-hash')
  , bodyParser = require('body-parser')
  , bcrypt = require('bcryptjs')
  , ms = require('mediaserver')
  ;
var options = {
  key: fs.readFileSync('C:/xampp/sifusp.key'),
  cert: fs.readFileSync('C:/xampp/63fb03b3f660e55f.crt')
};
//toca instalar phyton 2.7 y otras cosas para que funcione bycrip https://www.npmjs.com/package/bcrypt
var app = express();
//var server = http.createServer(app);
//https.createServer(options, app).listen(443);
//var server = https.createServer(app);


//variables por kellerman
var calls = {};
var rooms = {};
var teachers = {};


//rs.pipe(response)
var server = https.createServer(options, app).listen(8080);
var io = require('socket.io').listen(server);
var urlinicio = '';
//server.listen(8080);
io.set('log level',1); //Lo pongo a nivel uno para evitar demasiados logs ajenos a la aplicación.
connection=0;
var spamdin;
var admin;
var salir = false;
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
    	spamdin = urldbname.split('_');
        spamdin = spamdin[2];
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
          //una vez redireccionado emitimos dos funciones
          // * Verificamos si es o no el administrador del aula virtual
          // * Avisamos al servidor que entro un nuevo usuario
          // * Avisamos a todos los sockets que entro un nuevo usuario
          // * Buscamos el nombre de este usuario

          //*debo colocar grado y seccion para saber que alumnos pueden ingresar a esta aula virtual.
          //console.log(rows[0].id);
          //console.log(spamdin);
          	if (spamdin==(rows[0].id)) {
          		admin = true;
          	}else{
          		admin = false;
          	}

          	if ((rows[0].rolid)==1) {
          		var username = usuario;
          		//console.log(username);
          	}
          	if ((rows[0].rolid)==2) {
          		var datosprofesor = connection.query("SELECT * FROM profesor WHERE id ='"+rows[0].id+"'", function(err, dprofesor) {
        			if (err) {        	
            			return done(err);
        			}
        		var username = dprofesor[0].nombre_profesor;
        		//console.log(username);
        		});
          	}
          	if ((rows[0].rolid)==3) {
          		var datosalumno = connection.query("SELECT * FROM alumno WHERE id ='"+rows[0].id+"'", function(err, dalumno) {
        			if (err) {        	
            			return done(err);
        			}
        		var username = dalumno[0].nombre;
        		//console.log(username);
        		});
          	}

          	if ((rows[0].rolid)>3) {
          		io.on('connection', function (socket) {
        			socket.emit('loginError', { msg: 'Este usuario no tiene acceso a esta aula.' });
        		});
        		return res.redirect(urlinicio);
          	}

        	io.on('connection', function (socket) {
        		socket.emit('datosUsuario', { username:username, id:rows[0].id, admin:admin, urlinicio:urlinicio});
            //console.log('video');
        	});
        }else{
        	io.on('connection', function (socket) {
        	socket.emit('loginError', { msg: 'Error contraseña no valida, intenta nuevamente' });
        	});
        	return res.redirect(urlinicio);
        }
	});
	
});


io.on('connection', function(socket) {

	/* 
		Cuando un usuario realiza una acción en el cliente,
	   recibimos los datos de la acción en concreto y 
	   envío a todos los demás las coordenadas escribiendo
	   en el canvas

	   con socket.id; puedo obtener el id de cada uno de los que se conectan
	   de esta manera hacer el chat individual, tambien enviar mensajes directos
	   al profesor en el aula virtual.
	*/

	socket.on('mousedown',function(e){
		//console.log(e);
		io.sockets.emit('mousedown',e);
	});
	socket.on('mousemove',function(e){
		//console.log(e);
		io.sockets.emit('mousemove',e);
	});
	socket.on('mouseup',function(e){
		//console.log(e);
		io.sockets.emit('mouseup',e);
	});
	socket.on('mouseleave',function(e){
		//console.log(e);
		io.sockets.emit('mouseleave',e);
	});
	socket.on('repinta',function(){
		//console.log();
		io.sockets.emit('repinta');
	});

	//////////envio y recepcion de eventos para el chat /////////
	/////////////////////////////////////////////////////////////
	socket.on('mensajeChatUser',function(e){
		io.sockets.emit('mensajesChat',e);
	});


	/////////////////////////////////////////////////////////////
	//////////envio y recepcion de eventos para el streaming/////

	socket.on('streaming',function(e){
   // console.log(e.recorder);
		io.sockets.emit('streaming',e);
    //var audioStreaming = document.getElementById("audioStreaming");
    //console.log(audioStreaming);
    //console.log(e);
    //var urlAudio = e.audioUpdateCliente;
    //7var audiostreamingTest = e.pipe(fs.createWriteStream(urlAudio));
   // console.log(audiostreamingTest);
    /*.pipe(
   fs.createWriteStream('file.xlsx')
);*/

	});

	////////////////////////SALIR /////////////////////////
	
	socket.on('mensajeSalida',function(e){
		io.sockets.emit('mensajeSalida',{e,urlinicio:urlinicio});
		cerrarSesion(true);		
		//io.socket.emit('salir',{e,urlinicio:urlinicio});		
		//console.log(e);
			
	});
	function cerrarSesion(bool) {
		if (bool==true) {
			io.on('connection', function (socket) {
     			socket.emit('salir',{urlinicio:urlinicio});
    		});
		}
	}
	/*socket.on('mensajeSalida',function(e){
		//io.sockets.emit('mensajeSalida',{e,urlinicio:urlinicio});		
		io.socket.emit('salir',{e,urlinicio:urlinicio});		
		console.log(e);		
	});*/
});




//el codigo de kellerman

io.on('connection', function (socket) {
    console.log('a user connected');

    //Called when an student get connected.
    socket.on('join', function (roomId) {

        if (rooms && rooms[roomId]) 
        {
            console.log('Joining user: ' + socket.id + " to teacher room #" + roomId);
        }

        var room = rooms[roomId];

        socket.join(roomId);
        socket.emit("joined", socket.id, room);
        io.to(room.socketId).emit("studentJoined", socket.id);
    });

    //Called when a teacher get connected.
    socket.on('createRoom', function (roomId) {
        console.log('Joining teacher: ' + socket.id + " to room " + roomId);

        teachers[socket.id] = roomId;

        rooms[roomId] = {
            id: roomId,
            teacherId: roomId,
            socketId: socket.id,
            offer: {},
            host_candidates: [],
            guest_candidates: []
        };
    });
    
    //Called when a caller send the RCP offer
    socket.on('offer', function (roomId, connectionId, offer) {

        if(!rooms[roomId])
        {
            console.warn(error);
            socket.emit("offerError", "Cannot send the offer.");
        }

        rooms[roomId].offer = offer;
        io.to(roomId).emit('offer', connectionId, offer);
    });

    //Called when a student answer the call
    socket.on('answer', function (roomId, connectionId, answer) {
        
        if(!rooms[roomId])
        {
            console.warn(error);
            socket.emit("answerError", "Cannot send the answer.");
        }

        io.to(rooms[roomId].socketId).emit("answer", connectionId, answer);
    });

    //Called when participants send their candidates
    socket.on('sendCandidate', function (roomId, connectionId, type, candidate) {
        
        if(!rooms[roomId])
        {
            console.warn(error);
            socket.emit("sendCandidateError", "Cannot send the candidate.");
        }

        var room = rooms[roomId];
        room[type + "_candidates"].push(candidate);

        if(type == "guest")
        {
            console.log("Forwarding guest candidates to host: " + connectionId);
            io.to(room.socketId).emit("candidateReceived", connectionId, candidate);
        }
        else 
        {
            console.log("Forwarding host candidates to guest: " + connectionId);
            io.to(connectionId).emit("candidateReceived", connectionId, candidate);
        }
    });
    
    //Called when one of participants disconnects
   /* socket.on('disconnect', function() { 
        var roomId = teachers[socket.id];
        if(roomId && rooms[roomId]) 
        {
            io.to(roomId).emit("ended");
            rooms.splice(rooms.indexOf(roomId), 1);
        }
    });*/
});