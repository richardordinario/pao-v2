<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function index(Request $request)
    {
        if($request->path() !== 'login') {
            if(Auth::check()) {
                return view('home');
            }
            if(Auth::guard('admin')->check()) {
                return view('home');
            }
            if(Auth::guard('teacher')->check()) {
                return view('home');
            }
            return redirect('/404');
        }
        return view('home');
    }
    public function showlogin() {
        return view('auth.login');
    }
    public function register() {
        return view('auth.register');
    }
   
}
