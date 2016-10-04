<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Contracts\Auth\Guard;
use Session;
use Auth;
class rol
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
    public function handle($request, Closure $next, $rol)
    {
        // Get the required roles from the route
        $roles = $this->getRequiredRoleForRoute($request->route());

        // Check if a role is required for the route, and
        // if so, ensure that the user has that role.
        //echo dd($request->route());
        if($rol=='admin')
        {
            if($this->auth->user()->rolid==1)
            {
                return $next($request);
            }
        }
        else
            if($rol=='profesor')
            {
                if($this->auth->user()->rolid==2)
                {
                    return $next($request);
                }
            }
            else
                if($rol=='todos')
                {
                    if(!Auth::check())
                    {
                        return redirect('/login');
                    }
                    return $next($request);

                }

                return redirect('permisos');
            }
            private function getRequiredRoleForRoute($route)
            {
                $actions = $route->getAction();
                return isset($actions['roles']) ? $actions['roles'] : null;
            }

        }
