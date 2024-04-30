<?php

use App\Http\Controllers\PublicacioController;
use App\Http\Middleware\Authenticate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MembreController;
use App\Http\Controllers\LiniaController;
use App\Http\Controllers\NoticiaController;
use App\Http\Controllers\ProjecteController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('prueba', function(Request $request){
    return response() ->json([
        'message' => 'Hola mundo',
        'status' => 'OK'
    ]);
});


// Routes per a la taula membres i publicacions

Route::get('allMembres', function(Request $request){
    $membres = \DB::table('membres')->get();
    return response() ->json($membres);
});

Route::get('allPublicacions', function(Request $request){
    $publicacions = \DB::table('publicacions')->get();
    return response() ->json($publicacions);
});


Route::get('publicacio/{id}', function(Request $request, $id){
    $publicacio = \DB::table('publicacions')->where('id', $id)->first();
    return response() ->json($publicacio);
});

Route::get('countPublicacions', function(Request $request){
    $count = \DB::table('publicacions')->count();
    return response() ->json($count);
});

Route::get('allPublicacionsByMember/{id}', function(Request $request, $id){
    $publicacions = \DB::table('membres_publicacions')
    ->join('publicacions', 'membres_publicacions.publicacio_id', '=', 'publicacions.id')
    ->where('membres_publicacions.membre_id', $id)
    ->get();
    return response() ->json($publicacions);
});


// Routes per a la taula linies

Route::get('allLinies', function(Request $request){
    $linies = \DB::table('linies')->get();
    return response() ->json($linies);
});

Route::get('linies/{id}', function(Request $request, $id){
    $linies = \DB::table('linies')->where('id', $id)->first();
    return response() ->json($linies);
});

Route::get('countLinies', function(Request $request){
    $count = \DB::table('linies')->count();
    return response() ->json($count);
});

Route::get('projectes/{id}', function(Request $request, $id){
    $projectes = \DB::table('projectes')->where('id', $id)->first();
    return response() ->json($projectes);
});


// Routes per a la taula noticies

Route::get('allNoticies', function(Request $request){
    $noticies = \DB::table('noticies')->get();
    return response() ->json($noticies);
});

Route::get('noticies/{id}', function(Request $request, $id){
    $noticies = \DB::table('noticies')->where('id', $id)->first();
    return response() ->json($noticies);
});

Route::get('countNoticies', function(Request $request){
    $count = \DB::table('noticies')->count();
    return response() ->json($count);
});

// Routes per a la taula projectes
Route::get('allProjectes', function(Request $request){
    $projectes = \DB::table('projectes')->get();
    return response() ->json($projectes);
});


// Login

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();

});

Route::middleware(Authenticate::class)->group(function(){
    Route::delete('Publicacions/{id}', [PublicacioController::class, 'destroy']);
    Route::delete('Membres/{id}', [MembreController::class, 'destroy']);
    Route::delete('Línies/{id}', [LiniaController::class, 'destroy']);
    Route::delete('Actualitat/{id}', [NoticiaController::class, 'destroy']);
    Route::delete('Projectes/{id}', [ProjecteController::class, 'destroy']);
});

Route::controller(AuthController::class)->group(function(){
    Route::post('register','register');
    Route::post('login','login');
    Route::get('userdetail','userDetails');
});







