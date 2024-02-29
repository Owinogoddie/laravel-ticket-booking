<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Event;
use App\Models\User;

use Inertia\Inertia;

class EventShowController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(string $id)
    {
        $event = Event::findOrFail($id);
        $userid=$event->user_id;

        $booked=$event->attendings()->where('user_id',auth()->id())->first();
        $user=User::findOrFail($userid);

        return Inertia::render('EventsShow', ['event' => $event,'creator'=>$user,'booked'=>$booked]);
    }
}
