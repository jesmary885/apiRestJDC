<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Entity;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;

class EntityTest extends TestCase
{
    public function testStore()
    {
       $this->post('entities',[
        'name' => 'Maria',
        'email' => 'Maria@info.com',
        'type' => '1',
        'direction' => 'Calle falsa',
        'phone' => '55555555'
       ]);

       $this->assertDatabaseHas('entities', [
        'name' => 'Maria',
        'email' => 'Maria@info.com',
        'type' => '1',
        'direction' => 'Calle falsa',
        'phone' => '55555555'
       ]);
    }
}
