<?php

namespace App\Http\Responses;

use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;

class LoginResponse implements LoginResponseContract
{
    /**
     * @param  $request
     * @return mixed
     */
    public function toResponse($request)
    {
        // dd($request->user()->hasRole('ADMIN'));

        if ($request->user()->hasRole('ADMIN')) {
            return redirect()->to('/admin');
        } else if ($request->user()->hasRole('USER')) {
            return redirect()->to('/');
        }

        // $home = auth()->user()->isAdmin() ? '/admin' : '/dashboard';

        // return redirect()->intended($home);
    }
}
