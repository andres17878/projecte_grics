<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\Admins;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register']]);
    }

    /* Login API */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(),
            [
                'email'=>'required|string|email',
                'password'=>'required|string'
            ]
        );

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $credentials = $request->only('email', 'password');

        $token = Auth::attempt($credentials);
        
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

    /* Register API */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(),
            [
                'email'=>'required|string|email|max:255|unique:admins',
                'password'=>'required|string|min:6'
            ]
        );

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $admin = Admins::create([
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        $token = $admin->createToken('authToken')->plainTextToken;

        return response()->json([
            'status' => 'success',
            'message'=>'User Registered Successfully',
            'user'=>$admin,
            'authorisation'=> [
                'token' => $token,
                'type' => 'bearer'
            ]
        ]);

    }

    /*User Detail API */
    public function userDetails()
    {
        return response()->json(auth()->user());
    }
}