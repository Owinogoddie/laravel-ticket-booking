import BookingForm from "@/Components/BookingForm";
import CancelBookingForm from "@/Components/CancelBookingForm";
import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import React, { useState } from "react";

const UserTickets = ({ auth, bookings }) => {
    // alert(JSON.stringify(bookings))
 
    return (
        <>
     <MainLayout
                user={auth.user}
                // header={
                //     <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                //         Event
                //     </h2>
                // }
            >
                <Head title="Event Page" />

                <div className="py-12">
                <div className="max-w-7xl mx-auto p-6 lg:p-8">
                    <section class="bg-white dark:bg-gray-900">
                        <div class="container px-6 py-10 mx-auto">
                            <h2 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                                Booked Events
                            </h2>
                            <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                                {bookings.map((booking) => (
                                    <div class="lg:flex bg-slate-100 rounded-md">
                                        <img
                                            class="object-cover w-full h-56 rounded-lg lg:w-64"
                                            src={`/uploads/${booking.event.image}`}
                                            alt={booking.event.title}
                                        />
                                        <div class="flex flex-col justify-between py-6 lg:mx-6">
                                            <Link
                                                href={route('eventShow',booking.event.id)}
                                                class="text-xl font-semibold line-clamp-1 text-gray-800 hover:underline "
                                            >
                                                {booking.event.title}
                                                
                                            </Link> 

                                            <p className="text-md font-semibold text-gray-800 ">
                                               Ticket type: {booking.ticket_type}
                                            </p>
                                            <p className="text-md font-semibold text-gray-800">
                                            number of tickets:    {booking.num_tickets}
                                            </p>

                                            <span class="text-sm text-white dark:text-gray-300 bg-gray-800 rounded-md p-2">
                                                Starting:{booking.event.start_date}
                                            </span>

                                            <Link
                                                href={route('eventShow',booking.event.id)}
                                                class="text-xl font-semibold text-gray-800 hover:underline "
                                            >
                                                <PrimaryButton >
                                                    View Event
                                                </PrimaryButton>
                                                <DangerButton>Cancel</DangerButton>
                                                
                                            </Link>  
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
                </div>
            </MainLayout>
        </>
    );
};

export default UserTickets;
