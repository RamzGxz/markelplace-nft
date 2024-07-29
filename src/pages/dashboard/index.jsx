import React, { useState } from 'react';
import Sidebar from '@/components/sidebar';
import { List, MagnifyingGlass, Wallet, Bell } from '@phosphor-icons/react';
import { X, SketchLogo } from '@phosphor-icons/react/dist/ssr';

const Dashboard = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false);

    const toggleSidebar = () => {
        setSidebarToggle(!sidebarToggle);
    }

    return (
        <div>
            <div className="flex flex-col md:flex-row relative">
                <div className="hidden md:block">
                    <Sidebar isVisible={true} toggleSidebar={toggleSidebar} />
                </div>

                <div className="md:hidden flex items-center justify-between py-4">
                    <button
                        onClick={toggleSidebar}
                        className="p-2 bg-accent rounded-full text-text"
                    >
                        {sidebarToggle ? <X size={24} /> : <List size={24} />}
                    </button>
                    <div className="flex items-center gap-2">
                        <button className='p-2 bg-accent rounded-full'>
                            <Bell size={24} />
                        </button>
                        <button className='p-2 bg-accent rounded-full'>
                            <Wallet size={24} />
                        </button>
                        <button>
                            <img src="/avatar.svg" alt="avatar" className="w-8 h-8 rounded-full" />
                        </button>
                    </div>
                </div>
                {sidebarToggle && (
                    <div className="md:hidden absolute top-[64px] left-0 w-full z-20 mt-[1px]">
                        <Sidebar isVisible={true} toggleSidebar={toggleSidebar} />
                    </div>
                )}

                <div className="flex-1 lg:pt-5">
                    <div className="flex items-center justify-between lg:border-b border-secondary lg:pb-[14px]">
                        <div className="flex gap-5 ml-7">
                            <button
                                onClick={toggleSidebar}
                                className="hidden md:hidden p-2 bg-accent rounded-full text-text"
                            >
                                {sidebarToggle ? <X size={24} /> : <List size={24} />}
                            </button>
                            <div className="relative w-full md:w-3/5  hidden lg:block">
                                <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
                                    <MagnifyingGlass size={20} />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="p-2 pl-8 border bg-transparent border-secondary rounded-lg w-full"
                                />
                            </div>
                        </div>
                        <div className="hidden md:flex items-center gap-2 mr-4">
                            <button className='p-2 bg-accent rounded-full'>
                                <Bell size={24} />
                            </button>
                            <button className='p-2 bg-accent rounded-full'>
                                <Wallet size={24} />
                            </button>
                            <button>
                                <img src="/avatar.svg" alt="avatar" />
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 lg:ml-7 mt-5">
                        <div className="text-2xl lg:text-4xl font-bold">
                            Welcome, Montene!
                        </div>
                        <div className="mt-4 flex flex-col md:flex-row gap-5">
                            <div className="bg-secondary/15 rounded-2xl shadow-lg p-4 lg:w1/2">
                                <h1 className='text-text text-2xl font-bold mb-4'>Top Seller</h1>
                                <div className="flex justify-between gap-4">
                                    <div className="grid grid-cols-4">
                                        <div className="flex flex-col items-center text-center">
                                            <img src="avatar.svg" alt="" className='w-16' />
                                            <h1 className='text-base text-text font-medium'>Simon McHungry</h1>
                                            <p className='text-sm text-text/50'>@simon_hungry</p>
                                            <span className='mt-2 flex text-sm text-text/50 gap-0.5'><SketchLogo size={20} color='#764EBE' /> 3000 items</span>
                                        </div>
                                        <div className="flex flex-col items-center text-center">
                                            <img src="avatar.svg" alt="" className='w-16' />
                                            <h1 className='text-base text-text font-medium'>Simon McHungry</h1>
                                            <p className='text-sm text-text/50'>@simon_hungry</p>
                                            <span className='mt-2 flex text-sm text-text/50 gap-0.5'><SketchLogo size={20} color='#764EBE' /> 3000 items</span>
                                        </div>
                                        <div className="flex flex-col items-center text-center">
                                            <img src="avatar.svg" alt="" className='w-16' />
                                            <h1 className='text-base text-text font-medium'>Simon McHungry</h1>
                                            <p className='text-sm text-text/50'>@simon_hungry</p>
                                            <span className='mt-2 flex text-sm text-text/50 gap-0.5'><SketchLogo size={20} color='#764EBE' /> 3000 items</span>
                                        </div>
                                        <div className="flex flex-col items-center text-center">
                                            <img src="avatar.svg" alt="" className='w-16' />
                                            <h1 className='text-base text-text font-medium'>Simon McHungry</h1>
                                            <p className='text-sm text-text/50'>@simon_hungry</p>
                                            <span className='mt-2 flex text-sm text-text/50 gap-0.5'><SketchLogo size={20} color='#764EBE' /> 3000 items</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-secondary/15 rounded-2xl shadow-lg p-4 lg:w1/2">
                                <h1 className='text-text text-2xl font-bold mb-4'>Top Buyer</h1>
                                <div className="flex justify-between gap-4">
                                    <div className="grid grid-cols-4">
                                        <div className="flex flex-col items-center text-center">
                                            <img src="avatar.svg" alt="" className='w-16' />
                                            <h1 className='text-base text-text font-medium'>Simon McHungry</h1>
                                            <p className='text-sm text-text/50'>@simon_hungry</p>
                                            <span className='mt-2 flex text-sm text-text/50 gap-0.5'><SketchLogo size={20} color='#764EBE' /> 3000 items</span>
                                        </div>
                                        <div className="flex flex-col items-center text-center">
                                            <img src="avatar.svg" alt="" className='w-16' />
                                            <h1 className='text-base text-text font-medium'>Simon McHungry</h1>
                                            <p className='text-sm text-text/50'>@simon_hungry</p>
                                            <span className='mt-2 flex text-sm text-text/50 gap-0.5'><SketchLogo size={20} color='#764EBE' /> 3000 items</span>
                                        </div>
                                        <div className="flex flex-col items-center text-center">
                                            <img src="avatar.svg" alt="" className='w-16' />
                                            <h1 className='text-base text-text font-medium'>Simon McHungry</h1>
                                            <p className='text-sm text-text/50'>@simon_hungry</p>
                                            <span className='mt-2 flex text-sm text-text/50 gap-0.5'><SketchLogo size={20} color='#764EBE' /> 3000 items</span>
                                        </div>
                                        <div className="flex flex-col items-center text-center">
                                            <img src="avatar.svg" alt="" className='w-16' />
                                            <h1 className='text-base text-text font-medium'>Simon McHungry</h1>
                                            <p className='text-sm text-text/50'>@simon_hungry</p>
                                            <span className='mt-2 flex text-sm text-text/50 gap-0.5'><SketchLogo size={20} color='#764EBE' /> 3000 items</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;