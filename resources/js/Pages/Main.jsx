import PrimaryButton from "@/Components/PrimaryButton";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import React, { useState } from "react";
import SuccessButton from "@/Components/SucessButton";

const UserTickets = ({ auth, events }) => {
    return (
        <>
     <MainLayout
                user={auth.user}
            >
                <Head title="Event Page" />

                <div className="">
                <div className="max-w-7xl mx-auto p-2 lg:p-4">
                    <section class="bg-white dark:bg-gray-900">
                        <div class="container px-6 py-10 mx-auto">
                            <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                                Latest Events
                            </h1>

                            <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                                {events.map((event) => (
                                    <div class="lg:flex bg-slate-100 rounded-md">
                                        <img
                                            class="object-cover w-full h-56 rounded-lg lg:w-64"
                                            src={`/storage/app/public/uploads/${event.image}`}
                                            alt={event.title}
                                        />

                                        <div class="flex flex-col justify-between py-6 lg:mx-6">
                                            <Link
                                                href={route('eventShow',event.id)}
                                                class="text-xl font-semibold text-gray-800 hover:underline "
                                            >
                                                {event.title}
                                                
                                            </Link>

                                            <span class="text-sm text-white dark:text-gray-300 bg-gray-800 rounded-md p-2">
                                                Starting:{event.start_date}
                                            </span>

                                            <Link
                                                href={route('eventShow',event.id)}
                                                class="text-xl font-semibold flex gap-2 text-gray-800  "
                                            >
                                                <PrimaryButton >
                                                    View Event
                                                </PrimaryButton>
                                                {/* <SuccessButton className="text-green-400">Book</SuccessButton> */}
                                                
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
