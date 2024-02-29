<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class TicketBooked extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    // You can pass any data that you need for the email content
public $ticket;
public function __construct($ticket)
{
$this->ticket = $ticket;
}

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
    ->greeting('Hello, ' . $notifiable->name . '!')
    ->subject('Your ticket has been booked')
    ->line('You have successfully booked a ticket for [' . $this->ticket->event->title . '](' . url('/ev/' . $this->ticket->event->id) . ') on ' . date('F j, Y', strtotime($this->ticket->event->start_date)) . '.')
    ->action('View your tickets', url('/tickets/' . $this->ticket->user_id))
    ->line('Thank you for using our service!');

    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
