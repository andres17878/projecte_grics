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
        $linia = Linies::find($id);
        $linia->delete();
        return response()->json([
            'message' => 'Linia eliminada',
            'status' => 'OK'
        ]);
    }
    
}