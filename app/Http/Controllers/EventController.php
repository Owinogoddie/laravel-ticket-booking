<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use App\Models\Event;

use Illuminate\Support\Facades\Storage;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $events = Event::all();
        return Inertia::render('Events/Index', ['events' => $events]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Events/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
   
    {
        Validator::make($request->all(), [
            'title' => ['required'],
            'address' => ['required'],
            'image' => ['required'],
            'start_date' => ['required'],
            'end_date' => ['required'],
            'start_time' => ['required'],
            'num_tickets' => ['required'],
            'description' => ['required'],
        ])->validate();

        $file = $request->file('image');

        // $fileName = time().'.'.$request->image->extension();  
        // $request->file->move(public_path('uploads'), $fileName);

        $fileName = time() . '.' . $file->getClientOriginalExtension();
    $destinationPath = public_path('uploads'); // Make sure the directory exists
    // $file->move($destinationPath, $fileName);
    $file->storeAs($destinationPath, $fileName);

    // $file->storeAs('public/uploads', $final_name);

        Event::create([
            'title' => $request->title,
            'image' => $fileName,
            'address' => $request->address,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'start_time' => $request->start_time,
            'num_tickets' => $request->num_tickets,
            'description' => $request->description,
            'user_id' => auth()->id(),
            'slug' => Str::slug($request->title)
        ]);

          
            return redirect()->route('events.index');
           
        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Event $event)
    // public function edit(Post $post)
    {
        return Inertia::render('Events/Edit', [
            'event' => $event
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        Validator::make($request->all(), [
            'title' => ['required'],
            'address' => ['required'],
            // 'image' => ['required'],
            'start_date' => ['required'],
            'end_date' => ['required'],
            'start_time' => ['required'],
            'num_tickets' => ['required'],
            'description' => ['required'],
        ])->validate();

        Event::find($id)->update($request->all());

          
            return redirect()->route('events.index');
           
        
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request,string $id)
    {
        // Storage::delete($event->image);
        // $event->delete();
        Event::find($id)->delete();
        return redirect()->route('events.index');
    }
}
