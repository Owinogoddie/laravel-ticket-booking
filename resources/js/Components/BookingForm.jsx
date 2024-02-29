import React, { useEffect, useState } from "react";
import { Head, useForm, Link } from "@inertiajs/react";
import Alert from "./Alert";

const BookingForm = ({ auth, onClose,event,booked,isSubmitting, setIsSubmitting,sendStatus }) => {
    const isBooked=Boolean(booked)
    const [error, seterror] = useState("")
    const { data, setData, errors, post, progress,processing } = useForm({
        ticket_type: 'regular',
        num_tickets: 1,
        event_id:event.id,
        booked:isBooked,
    });

    useEffect(() => {
      if(processing){
        sendStatus(true)
      }
      else{
        sendStatus(false)
      }
    }, [processing,sendStatus])
    

    async function handleSubmit(e) {
        e.preventDefault();
        sendStatus(true); // Indicate that submission has started
      
        try {
          // Assuming 'post' returns a Promise
          post(route("events.book", event.id));
          onClose(); // Close the modal or perform other actions on success
        } catch (error) {
          console.error(error); // Handle errors appropriately
        } finally {
          sendStatus(false); // Indicate that submission has ended
        }
      }
    return (
        <div className=" mx-auto sm:px-6 lg:px-8">
            <form
                name="createForm"
                onSubmit={handleSubmit}
                enctype="multipart/form-data"
                className="p-4 bg-white dark:bg-slate-800 rounded-md"
            >

                <input type="hidden" name="event_id" value={data.id} />
                <input type="hidden" name="booked" value={data.booked} />
                <Alert/>
                <p className="text-lg text-green-300">Once you book, you will receive an email confirmation in your email</p>
                <br />
                <div className="grid gap-6 mb-6 md:grid-cols-1">
                    

                    <div>
                        <label
                            for="ticketType"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Ticket Type
                        </label>
                        <select name="selectedFruit" value="" onChange=""
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        
                        >
                    <option value="regular">Regular</option>
                    <option value="vip">VIP</option>
                </select>
                          
                        <div className="text-sm text-red-400">
                            {errors.ticket_type}
                        </div>
                    </div>
                   
                    <div>
                        <label
                            for="num_tickets"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Number of Tickets
                        </label>
                        <input
                            type="number"
                            max={5}
                            min={1}
                            id="num_tickets"
                            name="num_tickets"
                            value={data.num_tickets}
                            onChange={(e) => {
                                const newValue = e.target.value;
                                if (newValue > 5) {
                                    // Show an error message (you can customize this)
                                    seterror("Number of tickets must be 5 or less");
                                } else {
                                    // Update the state with the valid value
                                    seterror("")
                                    setData("num_tickets", newValue);
                                }
                            }}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="1"
                        />
                        <div className="text-sm text-red-400">
                            {errors.num_tickets}
                            {error}
                        </div>
                    </div>
                </div>

                <div>
                    {progress && (
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                            <div
                                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                width={progress.percentage}
                            >
                                {" "}
                                {progress.percentage}%
                            </div>
                        </div>
                    )}
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Book Ticket
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookingForm;
