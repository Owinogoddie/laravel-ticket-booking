<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string ...$guards): Response
    {
        $guards = empty($guards) ? [null] : $guards;

       
    foreach ($guards as $guard) {
        if (Auth::guard($guard)->check()) {
            return redirect(Auth::user()->getRedirectRoute());
            // Get the user's role
            // $role = Auth::user()->role;

            // // Redirect to different views based on the role
            // switch ($role) {
            //     case 'admin':
            //         return redirect('/events');
            //         break;
            //     case 'user':
            //         return redirect('/');
            //         break;
            //     default:
            //         return redirect('/');
            //         break;
            // }
        }
    }


        return $next($request);
    }
}
