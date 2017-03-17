<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //$this->app['request']->server->set('HTTPS', true);//
<<<<<<< HEAD
       //$this->app['request']->server->set('HTTPS', $this->app->environment() != 'local');
=======
       $this->app['request']->server->set('HTTPS', $this->app->environment() != 'local');
>>>>>>> 604c25a6958c9fc0c51ad5c8124b56ee8101028a
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
