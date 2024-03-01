import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

const Index = ({ auth, events }) => {
    function destroy(id) {
        alert(id)
        if (confirm("Are you sure you want to delete this event?")) {
            Inertia.delete(route("events.destroy", id));
        }
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
         
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                    href={route("events.create")}
                                >
                                    Create Event
                                </Link>
                            </div>

                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead class="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Title
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Start Date
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            End Date
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {events.map((event) => (
                                        <tr>
                                            <td class="px-6 py-4">
                                                {event.title}
                                            </td>
                                            <td class="px-6 py-4">
                                                {event.start_date}
                                            </td>
                                            <td class="px-6 py-4">
                                                {event.end_date}
                                            </td>
                                            <td class="px-6 py-4">
                                                <div class="flex space-x-2">
                                                    <Link
                                                        tabIndex="1"
                                                        className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                                        href={route(
                                                            "events.edit",
                                                            event.id
                                                        )}
                                                    >
                                                        Edit
                                                    </Link>
                                                    <Link className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"                                                   
                                                    
                                                    href={route("events.destroy",event.id)}
                                                    method="delete"
                                                    >DEL</Link>
                                                    {/* <button
                                                        onClick={()=>destroy(event.id)}
                                                        id={event.id}
                                                        tabIndex="-1"
                                                        type="button"
                                                        className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"
                                                    >
                                                        Delete
                                                    </button> */}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    {events.length === 0 && (
                                        <tr>
                                            <td
                                                colspan="4"
                                                class="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
                                            >
                                                No events found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
