<?php

namespace App\Http\Controllers;

use App\Models\Noticies;
use Illuminate\Http\Request;

class NoticiaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }
    public function destroy(int $id)
    {
        $noticia = Noticies::find($id);
        $noticia->delete();
        return response()->json([
            'message' => 'Noticia eliminada',
            'status' => 'OK'
        ]);
    }
    
}