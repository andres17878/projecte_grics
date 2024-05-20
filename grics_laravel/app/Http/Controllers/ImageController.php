<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'file' => 'required|mimes:pdf,xls,csv,jpeg,png,jpg,gif,svg|max:2048'
        ]);

        // Usar 'file' en lugar de 'image'
        $imageName = $request->file->getClientOriginalName();
        $request->file->move(public_path('images'), $imageName);

        return response()->json(['success' => 'You have successfully uploaded the image.']);
    }
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
        
    }
    
}