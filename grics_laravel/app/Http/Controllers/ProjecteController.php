<?php

namespace App\Http\Controllers;

use App\Models\Projectes;
use Illuminate\Http\Request;

class ProjecteController extends Controller
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
        $acio = Projectes::create($request->all());
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
        $acio = Projectes::findOrFail($id);
        $acio->update($request->all());
        return response()->json([
            'message' => 'Projecte actualitzat',
            'status' => 'OK'
        ]);
    }
    public function destroy(int $id)
    {
        $projecte = Projectes::find($id);
        $projecte->delete();
        return response()->json([
            'message' => 'Projecte eliminat',
            'status' => 'OK'
        ]);
    }
    
}