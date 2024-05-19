<?php

namespace App\Http\Controllers;

use App\Models\Membres;
use Illuminate\Http\Request;

class MembreController extends Controller
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
        $acio = Membres::create($request->all());
        return response()->json([
            'message' => 'Membre creat',
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
        $membre = Membres::find($id);
        $membre->update($request->all());
        return response()->json([
            'message' => 'Membre actualitzat',
            'status' => 'OK'
        ]);
    }
    public function destroy(int $id)
    {
        $membre = Membres::find($id);
        $membre->delete();
        return response()->json([
            'message' => 'Membre eliminat',
            'status' => 'OK'
        ]);
    }
    
}