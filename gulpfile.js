var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
   mix.styles([
      'bootstrap.min.css',
      'font-awesome.min.css',
      'nprogress.css',
      'iCheckBlue.css',
      'iCheckGreen.css',
      'jquery.mCustomScrollbar.min.css',
      'custom.min.css',
      'fullcalendar.min.css',
      'bootstrap-datetimepicker.min.css',
      'jAlert-v3.css',
      'datatables.bootstrap.min.css',
      'chosen.css',
      'pace.css'
    ],'public/css');

  mix.scripts([
      'jquery.min.js',
      'bootstrap.min.js',
      'fastclick.js',
      'nprogress.js',
      'jquery.mCustomScrollbar.concat.min.js',
      'jquery.smartWizard.js',
      'icheck.min.js',
      'custom.min.js',
      'jquery.validate.min.js',       
      'moment.min.js',        
      'jquery.datatables.min.js',
      'datatables.bootstrap.min.js',   
      'fullcalendar.min.js',
      'bootstrap-datetimepicker.min.js',
      'jAlert-v3.js',
      'jAlert-functions.js',
      'chart.min.js',
      'chosen.jquery.js',
      'pace.min.js'
    ],'public/js/all.js');

   mix.version(["public/css/all.css", "public/js/all.js"]);
});
