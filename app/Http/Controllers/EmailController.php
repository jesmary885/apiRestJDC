<?php

namespace App\Http\Controllers;

use App\Mail\SendMailMailable;
use App\Models\Email;
use App\Models\EmailEntity;
use App\Models\Entity;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class EmailController extends Controller
{

    public function index()
    {
        $users = User::all();
        $emails = Email::with('user')
                        ->get();

         return response()->json([
            'emails' => $emails,
            'users' => $users
        ]);
    }

    public function store(Request $request)
    {
        $users= User::all();

        if($request->q){
            $recipients = Entity::where('name', 'LIKE', '%' . $request->q . '%')
                            ->get();
            return response()->json([
                'ent' => $recipients,
                'users' => $users,
            ]);
        }

        if($request->send){
            $to = [];
            $phpEntities=json_decode($request['formData'],false);
            $cont = count($phpEntities->entities);

            if($cont>0){
                if($request->hasfile('file')) $url = Storage::put('public/files', $request->file);
                else{
                    $url = '';
                    $request->file = '';
                } 

                $email = Email::create([
                        'title' => $request->title,
                        'content' => $request->content,
                        'user_id' => $request->user_id ,
                        'file' => $url
                ]); //save emails_table
    
                $mailContent = new SendMailMailable([
                        'title' => $request->title,
                        'content' => $request->content,
                        'file' => $request->file
                ]);
    
                for($i=0; $i< $cont; $i++){
                    $email->entities()->attach([$phpEntities->entities[$i]->id]); //save email_entity_table
                    array_push($to,$phpEntities->entities[$i]->email);
                }
    
                Mail::to($to)->send($mailContent); //send mail
            }
            else{
                return response()->json([
                    'message' => 'Debe ingresar algún destinatario'
                ]);
            }
        }

        return response()->json([
            'users' => $users,
        ]);
    }

    public function show(Email $email)
    {
       $email = Email::with('user')->where('id',$email->id)->first();

        $entities = EmailEntity::with('entity')->where('email_id',$email->id)  ->get();

        return response()->json(['email' => $email,
                                'entities' => $entities]);
    }


    public function destroy(Email $email)
    {
        $email->delete();
        return response()->json([
            'message' => '¡La entidad ha sido eliminada!'
        ]);
    }
}
