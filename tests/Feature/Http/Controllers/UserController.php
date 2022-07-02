<?php

namespace Tests\Feature\Http\Controllers;

use Illuminate\Foundation\Testing\RefreshDatabase;

use Tests\TestCase;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

use App\Models\User;

class UserController extends TestCase
{
  
    public function testStore()
    {
       $this->post('users',[
        'name' => 'Maria',
        'email' => 'Maria@info.com',
        'password' => bcrypt('12345678')
       ]);

       $this->assertDatabaseHas('users', [
        'name' => 'Maria',
        'email' => 'Maria@info.com',
        'password' => bcrypt('12345678')
       ]);
    }
}
