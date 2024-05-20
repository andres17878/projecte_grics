<?php

namespace App\Http\Controllers;

use App\Models\Linies;
use Illuminate\Http\Request;

class LiniaController extends Controller
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
        $acio = Linies::create($request->all());
        return response()->json([
            'message' => 'Línia creada',
            'status' => 'OK'
        ]);
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
        $acio = Linies::findOrFail($id);
        $acio->update($request->all());
        return response()->json([
            'message' => 'Publicació actualitzada',
            'status' => 'OK'
        ]);
    }
    public function destroy(int $id)
    {
        $linia = Linies::find($id);
        $linia->delete();
        return response()->json([
            'message' => 'Linia eliminada',
            'status' => 'OK'
        ]);
    }
    
}