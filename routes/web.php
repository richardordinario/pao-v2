<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', 'AuthController@index');

Route::group(['prefix' => 'teacher'], function () {
    Route::post('/login', 'TeacherAuth\LoginController@login');
    Route::post('/logout', 'TeacherAuth\LoginController@logout')->name('logout');
    Route::get('/register', 'TeacherAuth\RegisterController@showRegistrationForm')->name('register');
    Route::post('/register', 'TeacherAuth\RegisterController@register');
});

Route::group(['prefix' => 'admin'], function () {
    Route::get('/login', 'AdminAuth\LoginController@showLoginForm')->name('login');
    Route::post('/login', 'AdminAuth\LoginController@login');
    Route::post('/logout', 'AdminAuth\LoginController@logout')->name('logout');

    Route::get('/register', 'AdminAuth\RegisterController@showRegistrationForm')->name('register');
    Route::post('/register', 'AdminAuth\RegisterController@register');
});

Route::group(['prefix'=>'teacher', 'middleware' => ['teacher']], function() {
    // Route::get('/dashboard','Teacher\DashboardController@index');
});

Route::group(['prefix'=>'admin', 'middleware' => ['admin']], function() {

});

Route::get('{any}', function () {
    return view('home');
})->where('any', '.*');

// Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');

// Route::group(['prefix' => 'teacher'], function () {
//   Route::get('/login', 'TeacherAuth\LoginController@showLoginForm')->name('login');
//   Route::post('/login', 'TeacherAuth\LoginController@login');
//   Route::post('/logout', 'TeacherAuth\LoginController@logout')->name('logout');

//   Route::get('/register', 'TeacherAuth\RegisterController@showRegistrationForm')->name('register');
//   Route::post('/register', 'TeacherAuth\RegisterController@register');

//   Route::post('/password/email', 'TeacherAuth\ForgotPasswordController@sendResetLinkEmail')->name('password.request');
//   Route::post('/password/reset', 'TeacherAuth\ResetPasswordController@reset')->name('password.email');
//   Route::get('/password/reset', 'TeacherAuth\ForgotPasswordController@showLinkRequestForm')->name('password.reset');
//   Route::get('/password/reset/{token}', 'TeacherAuth\ResetPasswordController@showResetForm');
// });

// Route::group(['prefix' => 'admin'], function () {
//     Route::get('/login', 'AdminAuth\LoginController@showLoginForm')->name('login');
//     Route::post('/login', 'AdminAuth\LoginController@login');
//     Route::post('/logout', 'AdminAuth\LoginController@logout')->name('logout');

//     Route::get('/register', 'AdminAuth\RegisterController@showRegistrationForm')->name('register');
//     Route::post('/register', 'AdminAuth\RegisterController@register');

//     Route::post('/password/email', 'AdminAuth\ForgotPasswordController@sendResetLinkEmail')->name('password.request');
//     Route::post('/password/reset', 'AdminAuth\ResetPasswordController@reset')->name('password.email');
//     Route::get('/password/reset', 'AdminAuth\ForgotPasswordController@showLinkRequestForm')->name('password.reset');
//     Route::get('/password/reset/{token}', 'AdminAuth\ResetPasswordController@showResetForm');
// });


