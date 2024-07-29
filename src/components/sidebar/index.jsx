import React, { useState } from 'react';
import Link from 'next/link';
import { CaretDown, CaretUp } from '@phosphor-icons/react';

const Sidebar = ({ isVisible, toggleSidebar }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div>
            <div className={`h-screen w-64 text-text bg-background bg-opacity-75 backdrop-blur-sm md:bg-opacity-100 md:backdrop-blur-none lg:border-r px-2 lg:px-0 border-secondary ${isVisible ? 'block' : 'hidden'} md:block md:relative`}>
                <div className="flex items-center gap-2 py-2 lg:py-5 lg:px-4 lg:border-b border-secondary">
                    <img src="/logo.png" alt="" width={35} height={35} />
                    <h1 className='text-2xl font-semibold'>NFT</h1>
                </div>
                <nav className="pt-2 lg:pt-10 lg:px-4 gap-3 flex flex-col">
                    <Link href="/dashboard" className="block py-3 px-4 rounded transition bg-secondary/50 duration-200 hover:bg-secondary">
                        Dashboard
                    </Link>
                    <Link href="/upload_nft" className="block py-3 px-4 rounded transition bg-secondary/50 duration-200 hover:bg-secondary">
                        Upload NFT
                    </Link>
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="w-full text-left py-3 px-4 rounded transition bg-secondary/50 duration-500 hover:bg-secondary focus:outline-none flex justify-between items-center"
                        >
                            Transaction
                            <span className='ml-2'>
                                {dropdownOpen ? <CaretUp size={20} /> : <CaretDown size={20} />}
                            </span>
                        </button>
                        {dropdownOpen && (
                            <div className="absolute left-0 w-full mt-2 gap-1 flex flex-col rounded shadow-lg z-10">
                                <Link href="/history_transaction" className="block py-2 px-4 rounded transition duration-200 bg-secondary/25 hover:bg-secondary/75">
                                    History Transaction
                                </Link>
                                <Link href="/detail_transaction" className="block py-2 px-4 rounded transition duration-200 bg-secondary/25 hover:bg-secondary/75">
                                    Detail Transaction
                                </Link>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;