<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('prueba', function(Request $request){
    return response() ->json([
        'message' => 'Hola mundo',
        'status' => 'OK'
    ]);
});

Route::get('allMembres', function(Request $request){
    $membres = \DB::table('membres')->get();
    return response() ->json($membres);
});