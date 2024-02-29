<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use App\Models\Attending;
use App\Notifications\TicketBooked;

class BookSystemController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    

    {
        Validator::make($request->all(), [
            // 'ticket_type' => ['required'],
            // 'num_tickets' => ['required'],
            'event_id' => ['required']
        ])->validate();

        $isBooked=$request->booked;
        if($isBooked){
            Attending::where('user_id', auth()->id())->delete();
        }
        else{
            $ticket=Attending::create([
                'ticket_type' => $request->ticket_type,
                'num_tickets' => $request->num_tickets,
                'event_id' => $request->event_id,
                'user_id' => auth()->id(),
            ]);
    
            // Send the notification to the user ...
            $request->user()->notify(new TicketBooked($ticket));
     
        }
       
          
            // return redirect()->route('eventShow,{$request->event_id}');
        

    }
    }

