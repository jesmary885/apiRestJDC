<?php

use App\Mail\SendMailMailable;
use App\Models\EmailEntity;
use App\Models\Email;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;


function cont_recipients($element){

    $phpEntities=json_decode($element['formData'],false);
    $cont = count($phpEntities->entities);

    return cont;

    if($cont>0){
        if($request->hasfile('file')) $url = Storage::put('public/files', $request->file);
        else{
            $url = '';
            $request->file = '';
        } 
    
        //$email = Email::create($request->all());
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