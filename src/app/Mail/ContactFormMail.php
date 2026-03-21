<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactFormMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public array $formData) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            replyTo: [$this->formData['email']],
            subject: '[Contact] ' . $this->formData['subject'],
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.contact',
            with: [
                'senderName'  => $this->formData['name'],
                'senderEmail' => $this->formData['email'],
                'subject'     => $this->formData['subject'],
                'messageBody' => $this->formData['message'],
            ],
        );
    }
}