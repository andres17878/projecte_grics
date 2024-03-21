<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
