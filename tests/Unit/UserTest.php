<?php

namespace Tests\Unit;

//use PHPUnit\Framework\TestCase;
use Tests\TestCase;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Database\Eloquent\Collection;

class UserTest extends TestCase
{
    
    public function test_a_user_has_many_emails()
    {
        $user = new User;

        $this->assertInstanceOf(Collection::class, $user->emails);
    }

  
}
