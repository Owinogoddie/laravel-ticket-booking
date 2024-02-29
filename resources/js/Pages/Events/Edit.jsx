import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link} from '@inertiajs/react';

const Create = ({auth,event}) => {
    const { data, setData, errors, patch,progress  } = useForm({
        title: event.title,
        address: event.address,
        image: event.image,
        start_date: event.start_date,
        end_date: event.end_date,
        start_time: event.start_time,
        num_tickets: event.num_tickets,
        description: event.description,
    });
  
    function handleSubmit(e) {
        e.preventDefault();
        patch(route("events.update",event.id));
    }
  return (
    <AuthenticatedLayout
        user={auth.user}
        header={<div className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            <div className="flex items-center justify-between">
                <h2>Events</h2>
                <Link href={route('events.create')} className='hover:text-slate-200'>
                    New Event
                
                </Link>
            </div>
        </div>}
    >
 <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <form name="createForm" onSubmit={handleSubmit} 
            enctype="multipart/form-data"
                className="p-4 bg-white dark:bg-slate-800 rounded-md">
               
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="title"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input
                        label="Title"
                        name="title"
                        value={data.title}
                        type="text" id="title"
                        onChange={(e) =>
                            setData("title", e.target.value)
                        }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Laravel event"/>
                            
                            <div className="text-sm text-red-400">{errors.title}</div>
                        
                    </div>
                   
                        
                    <div>
                        <label for="address"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                        <input type="text" 
                        id="address" 
                        name="address"
                        value={data.address}
                        
                        onChange={(e) =>
                            setData("address", e.target.value)
                        }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Laravel event"/>
                       
                            <div className="text-sm text-red-400">{errors.address}</div>
                        
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            for="file_input">Upload file</label>
                        <input
                        id="file_input" type="file" name="image"
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            
                            // value={data.image}
                            onChange={(e) =>
                                setData("image", e.target.files[0])
                            }
                            />
                        
                            <div className="text-sm text-red-400">{ errors.image }</div>
                        
                    </div>
                    <div>
                        <label for="start_date"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date</label>
                        <input type="date" id="start_date" name="start_date"
                        value={data.start_date}
                        onChange={(e) =>
                            setData("start_date", e.target.value)
                        }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Laravel event"/>
                        
                            <div className="text-sm text-red-400">{ errors.start_date }</div>
                        
                    </div>
                    <div>
                        <label for="end_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End
                            Date</label>
                        <input type="date" id="end_date" name="end_date"
                        value={data.end_date}
                        onChange={(e) =>
                            setData("end_date", e.target.value)
                        }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Laravel event"/>
                        
                            <div className="text-sm text-red-400">{errors.end_date}</div>
                        
                    </div>
                    <div>
                        <label for="start_time"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start
                            Time</label>
                        <input type="time" id="start_time" name="start_time"
                        value={data.start_time}
                        onChange={(e) =>
                            setData("start_time", e.target.value)
                        }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Laravel event"/>
                        
                            <div className="text-sm text-red-400">{errors.start_time}</div>
                        
                    </div>
                    <div>
                        <label for="num_tickets"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number of Tickets</label>
                        <input type="number" id="num_tickets" name="num_tickets"
                        value={data.num_tickets}
                        onChange={(e) =>
                            setData("num_tickets", e.target.value)
                        }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="1"/>
                            <div className="text-sm text-red-400">{errors.num_tickets}</div>
                        
                    </div>
                    <div>
                        <label for="description"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <textarea
                                            type="text"
                                            label="body"
                                            name="body"
                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write your thoughts here..."
                                            errors={errors.description}
                                            value={data.description}
                                            onChange={(e) =>
                                                setData("description", e.target.value)
                                            }
                                        />
                        
                            <div className="text-sm text-red-400">{errors.description}</div>
                        
                    </div>
                </div>
               
                <div>
                    {progress && (
                                  <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" width={progress.percentage}> {progress.percentage}%</div>
                                  </div>
                                )}
                    <button type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button>
                </div>
            </form>
        </div>
    </div>
            
        </AuthenticatedLayout>
  )
}

export default Create