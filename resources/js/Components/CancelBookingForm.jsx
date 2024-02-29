import React, { useState } from "react";
import { Head, useForm, Link } from "@inertiajs/react";

const CancelBookingForm = ({ auth, onClose,event,booked }) => {
    const isBooked=Boolean(booked)
    const [error, seterror] = useState("")
    const { data, setData, errors, post, progress } = useForm({
        
        event_id:event.id,
        booked:isBooked,
    });

    function handleSubmit(e) {
        e.preventDefault();
        // alert(JSON.stringify(data))
         post(route("events.book",event.id));
        onClose();
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
                

                <div className="flex flex-col items-center gap-3">
                    <h2 className="dark:text-gray-300">Are you sure you want to cancell your ticket now?</h2>
                    
                    <button
                        type="submit"
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                    >
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CancelBookingForm;
