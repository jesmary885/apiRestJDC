<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Email extends Model
{
    use HasFactory;

    protected $guarded = ['id', 'created_at', 'updated_at'];

    //Relacion uno a muchos inversa
    public function user(){
        return $this->belongsTo(User::class);
    }

    //Relacion muchos a muchos
    public function entities(){
        return $this->belongsToMany(Entity::class);
    }


}
