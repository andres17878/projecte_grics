<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admins;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register']]);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email'=> 'required|email',
            'password'=> 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $credentials = $request->only('email','password');

        $token = Auth::guard('admins')->attempt($credentials);

        if(!$token){
            return response()->json([
                'status'=>'error',
                'message'=>'unauthorized'
            ], 401);
        }

        $user = Auth::user();
        return response()->json([
            'status'=> 'success',
            'user'=> $user,
            'authorisation'=> [
                'token' => $token,
                'type' => 'bearer'
            ]
        ]);
    

    }

    public function userDetails()
    {
        return response()->json(auth()->user());
    }

}
