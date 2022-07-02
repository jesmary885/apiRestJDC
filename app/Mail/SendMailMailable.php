<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendMailMailable extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     * 
     * 
     */

    public $subject; 
    public $contacto;

    public function __construct($contacto)
    {
        $this->contacto = $contacto;
        $this->subject = $contacto['title'];
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {

        if($this->contacto['file'] == null){
            return $this->view('Email.sendMail')->with('contacto',$this->contacto);
        }
        else{
            return $this->view('Email.sendMail')
             ->attach($this->contacto['file']->getRealPath(),[
            'as'=>$this->contacto['file']->getClientOriginalName()
            ]);
        }
    }
}
