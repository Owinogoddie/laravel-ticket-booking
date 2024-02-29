<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Event;
use App\Models\Attending;
use App\Models\User;

use Inertia\Inertia;

class UserBookingsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        // $bookings=Attending::where('user_id', auth()->id())->get();
        $bookings = Attending::with('event')
    ->where('user_id', auth()->id())
    ->get();

        return Inertia::render('UserTickets', ['bookings' => $bookings]);
    }
}
