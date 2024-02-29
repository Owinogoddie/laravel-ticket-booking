import BookingForm from "@/Components/BookingForm";
import CancelBookingForm from "@/Components/CancelBookingForm";
import Loader from "@/Components/Loader";
import Modal from "@/Components/Modal";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";

const EventsShow = ({ auth, event, creator:user,booked }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

    const [processing, setProcessing] = useState(false);

    const handleProcessingChange = (newProcessing) => {
      setProcessing(newProcessing);
    };

    function handleStatus(status) {
        setIsSubmitting(status);
      }

    const handleOpenModal = () => {
        if(booked){
            setIsCancelModalOpen(true)
        }
        else{

            setIsModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
   

    const handleCloseCancelModal = () => {
        setIsCancelModalOpen(false);
    };

    // alert(isSubmitting)
    return (
        
        <>
       
        <Modal show={isModalOpen} onClose={handleCloseModal}>
            <BookingForm onClose={handleCloseModal} event={event} booked={booked} sendStatus={handleStatus} isSubmitting={isSubmitting} setIsSubmitting={setIsSubmitting} onProcessingChange={handleProcessingChange}/>
        </Modal>

        {
            booked &&(
                <Modal show={isCancelModalOpen} onClose={handleCloseCancelModal}>
            <CancelBookingForm onClose={handleCloseCancelModal} event={event} booked={booked}/>
        </Modal>
            )
        }
            <MainLayout
                user={auth.user}
               
            >
                <Head title="Event Page" />

                {/* {

            isSubmitting ?(
                <div className="fixed inset-0 bg-slate-500/80 z-[999] flex items-center justify-center">
    <Loader />
</div>
            ):""
        } */}

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                                <div>
                                    <div className="m-2 p-2 flex justify-between">
                                        <h3 className="mb-4 text-2xl font-bold text-indigo-700 line-clamp-1">
                                            {event.title} 
                                            {Boolean(isSubmitting)}
                                        </h3>
                                        <div className="flex space-x-2">
                                            From:
                                            <span className="mx-2">
                                                {event.start_date}
                                            </span>{" "}
                                            |{" "}
                                            <span className="mx-2">
                                                {event.end_date}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mb-16 flex flex-wrap">
                                        <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
                                            <div className="flex flex-col">
                                                <div
                                                    className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                                                    data-te-ripple-init
                                                    data-te-ripple-color="light"
                                                >
                                                    <img
                                                        className="object-cover w-full h-64 rounded-lg lg:w-64"
                                                        src={`/uploads/${event.image}`}
                                                        alt={event.title}
                                                    />
                                                    <a href="#!">
                                                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                                                    </a>
                                                </div>
                                                {/* @auth */}
                                                <div className="flex space-x-2 p-4">
                                                    <button
                                                        type="button"
                                                        onClick={handleOpenModal}
                                                        className={                                                        
                                                        `text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center
                                                        
                                                          
                                                         ${booked ? 'bg-red-500': 'dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-slate-400 hover:bg-slate-500'}
                                                         ` 
                                                        }
                                                    >
                                                    {
                                                    booked? 'Cancell':'Book Now'
                                                    }
                                                        
                                                        <svg
                                                            className="w-3.5 h-3.5 ml-2"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 14 10"
                                                        >
                                                            <path
                                                                stroke="currentColor"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M1 5h12m0 0L9 1m4 4L9 9"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                                {/* @endauth */}
                                                <div className="flex flex-col p-4">
                                                    <span className="text-indigo-600 font-semibold">
                                                        Host Info
                                                    </span>
                                                    <div className="flex space-x-4 mt-6 bg-slate-200 p-2 rounded-md text-black text-sm">
                                                        <span>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke-width="1.5"
                                                                stroke="currentColor"
                                                                className="w-12 h-12"
                                                            >
                                                                <path
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <div className="flex flex-col">
                                                            

                                                            <span className="text-xl">
                                                                {user.name}
                                                            </span>
                                                            <span className="text-xl">
                                                                {user.email}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=" p-6 w-full md:w-1/2 shrink-0 grow-0 lg:w-6/12 md:h-[250px] lg:pl-6 bg-slate-200 text-slate-900 !important rounded-md ">
                                            <p className="text-lg text-yellow-600 dark:text-gray-900">
                                                Starting time:{" "}
                                                <time>{event.start_time}</time>
                                            </p>
                                            <p className="mb-6 mt-4 text-sm line-clamp-2">
                                                {event.description}
                                            </p>
                                            <div className="flex justify-en">
                                                <div className="flex flex-col">
                                                    <div className="mb-4 flex items-center text-sm font-medium">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke-width="1.5"
                                                            stroke="currentColor"
                                                            className="w-6 h-6 mr-2 text-indigo-500"
                                                        >
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                                            />
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                                            />
                                                        </svg>
                                                        <div className="text-yellow-700">
                                                        {event.address}
                                                    </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default EventsShow;
