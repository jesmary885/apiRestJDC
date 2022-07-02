<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Entity;


class EntitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Entity::create([
            'name'=>'Jillmery Carneiro',
            'email'=>'jesmary885@hotmail.com',
            'phone'=> 58994455,
            'direction' => 'El tigreuu',
            'type' => '1'
        ]);

        Entity::create([
            'name'=>'Jeremy Rojas',
            'email'=>'erikrojas714@gmail.com',
            'phone'=> 58994455,
            'direction' => 'El tigreuu',
            'type' => '1'
        ]);
    }
}
