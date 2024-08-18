import React from 'react';
import './Navigation.css'; // Ensure this file is still included if you use any custom styles

function Navigation() {
  return (
    <div className='bg-gradient-to-t from-blue-700 to-blue-800 w-20 h-screen flex flex-col items-center p-4 shadow-lg'>
      <div className='relative mb-8'>
        <button className='bg-gray-700 rounded-xl border border-blue-400 text-yellow-400 p-2 flex items-center justify-center transition-colors duration-300 hover:bg-blue-400 hover:text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <span className='tooltip-text absolute left-24 top-1/2 transform -translate-y-1/2 text-gray-700 border border-gray-700 bg-transparent px-2 py-1 rounded-md opacity-0 transition-opacity duration-300'>Menu</span>
      </div>
      <div className='relative'>
        <button className='bg-gray-700 rounded-xl border border-blue-400 text-yellow-400 p-2 flex items-center justify-center transition-colors duration-300 hover:bg-blue-400 hover:text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
        <span className='tooltip-text absolute left-24 top-1/2 transform -translate-y-1/2 text-gray-700 border border-gray-700 bg-transparent px-2 py-1 rounded-md opacity-0 transition-opacity duration-300'>New Chat</span>
      </div>
    </div>
  );
}

export default Navigation;
