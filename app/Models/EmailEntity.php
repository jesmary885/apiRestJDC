<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmailEntity extends Model
{
    use HasFactory;

    protected $table = "email_entity";

    protected $guarded = ['id', 'created_at', 'updated_at'];

    //Relacion uno a muchos inversa

    public function entity(){
        return $this->belongsTo(Entity::class);
    }

    public function email(){
        return $this->belongsTo(Email::class);
    }
}
