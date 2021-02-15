<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::resource('posts', 'PostController');

Route::get('test', 'PostController@test');

Route::post('submit', 'PostController@submit');


// Route::resources([
//   'photos' => PhotoController::class,
//   'posts' => PostController::class,
// ]);

// Route::prefix('/parent_route')->group( function() {
//   Route::post('/child_route', 'NameofController@controller_function');
// });