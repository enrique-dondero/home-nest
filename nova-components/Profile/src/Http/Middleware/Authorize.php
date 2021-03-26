<?php

namespace Acme\Profile\Http\Middleware;

use Acme\Profile\Profile;

class Authorize
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return \Illuminate\Http\Response
     */
    public function handle($request, $next)
    {
        return resolve(Profile::class)->authorize($request) ? $next($request) : abort(403);
    }
}
