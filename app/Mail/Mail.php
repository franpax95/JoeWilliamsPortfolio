<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Mail extends Mailable
{
    use Queueable, SerializesModels;
    public $name;
    public $subject;
    public $email;
    public $messageBody;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name,$email,$messageBody,$subject)
    {
        $this->name         = $name;
        $this->email        = $email;
        $this->messageBody  = $messageBody;
        $this->subject      = $subject;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view("correos/bienvenida")
            ->from($this->email)
            ->subject($this->subject);
    }
}