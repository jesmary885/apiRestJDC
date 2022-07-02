<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Email;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Crypt;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();

        return response()->json($users);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email', 'unique:users'],
            'password' =>['required', 'min:6', 'confirmed']
        ]);
        
        $user= User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'password_cifrada' => Crypt::encryptString($request->password)
        ]);

        return response()->json([
        'user' => $user
        ]);

    }

    public function show(User $user)
    {
        $user = [
            'name'=>$user->name,
            'email'=>$user->email,
            'password'=>Crypt::decryptString($user->password_cifrada)
        ];
        
        return response()->json($user);
    }

    public function update(Request $request, User $user)
    {
        $request->validate([
            'name' =>'required',
            'email' =>'required|email|unique:users,email,' .$user->id,
            'password' =>'required|min:6|confirmed',
        ]);

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'password_cifrada' => Crypt::encryptString($request->password)]);

        return response()->json([
            'user' => $request
        ]);
    }

    public function destroy(User $user)
    {
        $emails = Email::where('user_id',$user->id)->first();

        if($emails){
            return response()->json([
                'message' => '¡El usuario es remitente en un email, no puede ser eliminado!'
            ]);
        }else{
            $user->delete();
            return response()->json([
                'message' => '¡El usuario ha sido eliminado!'
            ]);
        }
    }
}
