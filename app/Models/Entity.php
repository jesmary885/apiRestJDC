<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Entity extends Model
{
    use HasFactory;

    protected $guarded = ['id', 'created_at', 'updated_at'];

    const PERSONA = 1;
    const EMPRESA = 2;
    
    //Relacion muchos a muchos con Emails
    public function emails(){
        return $this->belongsToMany(Email::class);
    }

    


}
