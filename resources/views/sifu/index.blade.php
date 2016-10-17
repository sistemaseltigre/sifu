    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>SIFU</title>

        <!-- Bootstrap -->
        <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/bootstrap.min.css') }} ">
        
        <!-- Main Style -->
        <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/main.css') }} ">

        <!-- Responsive Style -->
        <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/responsive.css') }} ">

        <!--Icon Fonts-->
        <link rel="stylesheet" media="screen" href="{{ asset('assets/fonts/font-awesome/font-awesome.min.css') }} " />


        <!-- Extras -->
        <link rel="stylesheet" type="text/css" href="{{ asset('assets/extras/animate.css') }} ">
        <link rel="stylesheet" type="text/css" href="{{ asset('assets/extras/lightbox.css') }} ">

        <!-- jQuery Load -->
        <script src="{{ asset('assets/js/jquery-min.js') }}"></script>
        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        
    </head>
    <?php if (@$send_res==1) {
        echo 'AQUIIIII'.@$send_res;
    } ?>
    <body data-spy="scroll" data-offset="20" data-target="#navbar">
        <!-- Nav Menu Section -->
        <div class="logo-menu">
            <nav class="navbar navbar-default navbar-fixed-top" role="navigation" data-spy="affix" data-offset-top="50">
              <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header col-md-3">
                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#home"><i><img src="https://www.sifusp.com/img/logo.png" height="100%" width="10%"></i>
                 SIFU</a>
             </div>

             <div class="collapse navbar-collapse" id="navbar">
                <ul class="nav navbar-nav col-md-9 pull-right">
                    <li class="active"><a href="#hero-area"><i class="fa fa-home"></i> Inicio</a></li>
                    <li><a href="#services"><i class="fa fa-cogs"></i> Servicios</a></li>                            
                    <li><a href="#sale"><span class="glyphicon glyphicon-plane"></span> Planes</a></li>
                    <li><a href="#about"><i class="fa fa-info"></i> Sobre Nosotros</a></li>
                    <li><a href="#contact"><i class="fa fa-envelope"></i> Contacto</a></li>
                    <li><a href="{{ asset('/login') }}" target="blank_"><i class="glyphicon glyphicon-user"></i> Iniciar sesion</a></li>
                </ul>
            </div>
        </div>
    </nav>
</div>
<!-- Nav Menu Section End -->

<!-- Hero Area Section -->

<section id="hero-area">
    <div class="container">
        <div class="row">
            <div class="col-md-12" style=" text-align: justify;text-justify: inter-word;">
                <h1 class="title">SIFU</h1>
                <h2 class="subtitle">Llevar el control de tu colegio nunca fue tan fácil.</h2>

                <img class="col-md-6 col-sm-6 col-xs-12 animated fadeInLeft" src="assets/img/hero/macbook.gif" alt="">

                <div class="col-md-6 col-sm-6 col-xs-12 animated fadeInRight delay-0-5">
                    
                    <ul>            
                        SIFU es una plataforma digital contenida en la nube, con una interface muy sencilla y amigable que te permite administrar tu colegio en diferentes niveles.           
                        <ul >
                            <li type="disc">Lleva el control general de tu institución: Crea grados, secciones, asignaturas, horarios, modelos de pago, múltiples reportes, entre otras cosas.</li>
                            <li type="disc">Lleva el control de tus alumnos: pagos, horarios, calificaciones, secciones, permite mensajes alumno-alumno y alumno-profesor.</li>
                            <li type="disc">Lleva el control de tus profesores: secciones, horarios, asignaturas que imparten, calificaciones.</li>
                        </ul>
                        <br><a href="{{ asset('/colegio/registro') }}" target="blank_" class="btn btn-common btn-lg ">Pruébalo ahora</a><br><i><font>* Obtén una cuenta demo por 30 días. </font></i>
                    </ul>
                </div>

            </div>

        </div>
    </div>
</section>

<!-- Hero Area Section End-->



<!-- Service Section -->

<section id="services">
    <div class="container text-center">
        <div class="row">
            <h1 class="title">Servicios</h1>
            <h2 class="subtitle">Todos los servicios que necesitas en un solo lugar.</h2>

            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div class="service-item">
                    <img src="{{ asset('assets/img/services/reloj.png') }}" alt="" width="160px">
                    <h3>Horarios</h3>
                    <p align="justify">Ahorra tiempo, automatiza el sistemas de horarios de tu institución, SIFU se encarga por ti de hacer rendir al máximo cada recurso.</p>
                </div>
            </div>


            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div class="service-item">
                    <img src="{{ asset('assets/img/services/admi.jpg') }} " alt="" width="222px">
                    <h3>Administración</h3>
                    <p align="justify">SIFU se encarga de llevar el control de pagos de tus estudiantes, también genera diferentes modelos de pagos y en futuras versiones permitirá que se realice el pago de la mensualidad a través de la aplicación.</p>
                </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div class="service-item">
                    <img src="{{ asset('assets/img/services/profe.png') }} " alt="" width="94px">
                    <h3>Profesores</h3>
                    <p align="justify">SIFU permite que los profesores accedan en cualquier lugar a su lista de secciones y alumnos, también permite cargar y visualizar calificaciones en tiempo real y almacenarlas en la nube, manteniendo siempre segura tu información.</p>
                </div>
            </div>

        </div>
    </div>
</section>
<!-- Service Section End -->




<!-- Sale Section-->
<section id="sale">
    <div class="container">
        <div class="row">

            <h1 class="title">Planes</h1>
            <h2 class="subtitle">Disfruta de una excelente plataforma</h2>

            <div class="wow fadeInDown ">
               <div class="col-md-3 col-md-3 col-sm-3 col-xs-12 col-md-offset-1 precio1 ">
                <div class="precio1-des">
                 
                    <span class="precio-total">Mensual</span>
                    <div class="contenedor-price">
                        <p class="body-price1"><span class="precio-total"><font color="black">$70.000</font></span></p>
                        <p class="body-price1"><img src="{{ asset('assets/img/flags/Colombia-icon.png') }} " height="10%" width="10%"> Pesos al mes</p>            
                        <p class="body-price1"></p>                   
                    </div>

                    <div class="footer-price1">
                        <a href="#"><strong>Comprar Plan</strong> </a><br>

                    </div>


                </div>
            </div>

            <div class="col-md-3 col-md-3 col-sm-3 col-xs-12 col-md-offset-1 precio1 ">
                <div class="precio1-des">
                 
                    <span class="precio-total">Mensual</span>
                    <div class="contenedor-price">
                        <p class="body-price1"><span class="precio-total"><font color="black">15.000Bs</font></span></p>
                        <p class="body-price1"><img src="{{ asset('assets/img/flags/Venezuela-icon.png') }} " height="10%" width="10%"> Bolivares al mes</p>            
                        <p class="body-price1"></p>                   
                    </div>

                    <div class="footer-price1">
                        <a href="#"><strong>Comprar Plan</strong> </a><br>

                    </div>


                </div>
            </div>

            <div class="col-md-3 col-md-3 col-sm-3 col-xs-12 col-md-offset-1 precio1 ">
                <div class="precio1-des">
                 
                    <span class="precio-total">Mensual</span>
                    <div class="contenedor-price">
                        <p class="body-price1"><span class="precio-total"><font color="black">28.9$</font></span></p>
                        <p class="body-price1"><img src="{{ asset('assets/img/flags/globe-icon.png') }} " height="10%" width="10%"> Dolares al mes</p>            
                        <p class="body-price1"></p>                   
                    </div>

                    <div class="footer-price1">
                        <a href="#"><strong>Comprar Plan</strong> </a><br>

                    </div>


                </div>
            </div>



        </div>
    </div>
</div>
</section>

<!-- Sale Section End-->



<!-- About Section -->

<section id="about">
    <div class="container">
        <div class="row">
            <h1 class="title">SOBRE SIFU</h1>
            <h2 class="subtitle">Todo el control de tu colegio en un solo sitio</h2>

            <div class="col-md-8 col-sm-12">
                <p align="justify">
                    SIFU es una plataforma diseñada por jóvenes emprendedores para ofrecerte un manejo sencillo y óptimo de tu colegio o institución. Te permite manejar y almacenar tu información sin riesgo de perderla, en la nube.
                </p>
            </div>

            <img class="col-md-4 col-md-4 col-sm-12 col-xs-12" src="{{ asset('assets/img/about/graph.png') }}" alt="">

        </div>
    </div>
</section>
<!-- About Section End -->



<!-- Conatct Section -->
<section id="contact">
    <div class="container text-center">
        <div class="row">
            <h1 class="title">Contáctanos</h1>

            <h2 class="subtitle">Para más información</h2>


            <form role="form" class="contact-form" method="post" action="{{ asset('/colegio/registro/send_contact') }}">
                {{ csrf_field() }}
                <div class="col-md-6 wow fadeInLeft" data-wow-delay=".5s">
                    <div class="form-group">
                        
                        
                        <label>Nombre</label>
                        <input type="text" class="form-control name" placeholder="Nombre" name="name" id="nombre">
                        
                        
                    </div>
                    <div class="form-group">
                        <div class="controls">
                           <label>Correo</label>
                           <input type="email" class="form-control email" placeholder="Email" name="email">
                       </div>
                   </div>
                   <div class="form-group">
                    <div class="controls">
                       <label>Asunto</label>
                       <input type="text" class="form-control requiredField" placeholder="Asunto" name="subject">
                   </div>
               </div>

               <div class="form-group">

                <div class="controls">
                   <label>Mensaje</label>
                   <textarea rows="7" class="form-control" placeholder="Mensaje" name="mensaje"></textarea>
               </div>
           </div>
           <button type="submit" class="btn btn-lg btn-common">Enviar</button><div id="success" style="color:#34495e;"></div>

       </div>
   </form>

   <div class="col-md-6 wow fadeInRight">
    <div class="social-links">
        <a class="social" href="https://facebook.com/sifusp" target="_blank"><i class="fa fa-facebook fa-2x"></i></a>
        <a class="social" href="https://twitter.com/sifusp" target="_blank"><i class="fa fa-twitter fa-2x"></i></a>
        <a class="social" href="https://plus.google.com/105979885244281543631" target="_blank"><i class="fa fa-google-plus fa-2x"></i></a>
    </div>
    <div class="contact-info">
        <p><i class="fa fa-map-marker"></i> Colombia, Bogotá</p>
        <p><i class="fa fa-envelope"></i> info@simplepanas.com</p>
    </div>

    <p>
       <a href="http://www.simplepanas.com">-SimplePanas-</a><br>
   </p>
   
</div>

</div>
</div>
</section>

<!-- Conatct Section End-->

<!-- Client Section -->
<section id="clients">
    <div class="container">
        <div class="row">

            <div class="wow fadeInDown  ">
                <img class="col-md-3 col-md-3 col-sm-3 col-xs-6 col-md-offset-2 " src="{{ asset('assets/img/clients/aws.png') }} " alt="client-1">

                <img class="col-md-3 col-md-3 col-sm-3 col-xs-12 certificado" src="{{ asset('assets/img/clients/certificado.gif') }}" alt="client-2">

                <img class="col-md-3 col-md-3 col-sm-3 col-xs-7 sp" src="{{ asset('assets/img/clients/spgris.gif') }} " alt="client-3">


            </div>
        </div>
    </div>
</section>
<!-- Client Section End -->

<div id="copyright">
    <div class="container">
        <div class="col-md-10"><p>© Editado por <a href="http://www.simplepanas.com">Simple Panas</a></p></div>
        <div class="col-md-2">
            <span class="to-top pull-right"><a href="#hero-area"><i class="fa fa-angle-up fa-2x"></i></a></span>
        </div>
    </div>
</div>
<!-- Copyright Section End-->

<!-- Bootstrap JS -->
<script src="{{ asset('assets/js/bootstrap.min.js') }} "></script>

<!-- Smooth Scroll -->
<!-- Smooth Scroll -->
<script src="{{ asset('assets/js/smooth-scroll.js') }} "></script>
<script src="{{ asset('assets/js/lightbox.min.js') }}"></script>

<!-- All JS plugin Triggers -->
<script src="{{ asset('assets/js/main.js') }} "></script>


<span id="siteseal"><script async type="text/javascript" src="https://seal.godaddy.com/getSeal?sealID=0t5Hj5YIWwOmKjwsNqQFTnztTknBIybW6QBYfXzKoQRrTtYOqslW5LTWyJVf"></script></span>
</body>
</html>