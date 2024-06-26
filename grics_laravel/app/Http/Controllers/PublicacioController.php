<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Publicacions;

class PublicacioController extends Controller
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
        $acio = Publicacions::create($request->all());
        return response()->json([
            'message' => 'Publicació creada',
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
        $acio = Publicacions::findOrFail($id);
        $acio->update($request->all());
        return response()->json([
            'message' => 'Publicació actualitzada',
            'status' => 'OK'
        ]);
    }
    public function destroy(int $id)
    {
        $publicacio = Publicacions::find($id);
        $publicacio->delete();
        return response()->json([
            'message' => 'Publicació eliminada',
            'status' => 'OK'
        ]);

    }
    
}
