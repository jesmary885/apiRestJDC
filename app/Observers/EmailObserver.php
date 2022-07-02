<?php

namespace App\Observers;

use App\Models\Email;
use Illuminate\Support\Facades\Storage;

class EmailObserver
{
 
    public function deleting(Email $email)
    {
        if($email->file){
            Storage::delete($email->file);
        }
    }

}
