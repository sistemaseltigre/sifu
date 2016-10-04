<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Contracts\Auth\Guard;
use Session;
class administrador
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    protected $auth;
    public function __construct(Guard $auth)
    {
        $this->auth=$auth;
    }
    public function handle($request, Closure $next)
    {
        switch ($this->auth->user()->rolid) {
            case '1':
                # code...
            break;
            
            case '2':
            return view('plantilla.profesor.index');
            break;

             default:
               return redirect('login');
                break;
        }
        return $next($request);
    }
}
