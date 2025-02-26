


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen, onClose }) {
  const [expandedMenu, setExpandedMenu] = useState({
    events: true,
    users: true
  });

  const toggleMenu = (menu) => {
    setExpandedMenu(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  return (
    <div className={`bg-[#241e3a] text-white flex flex-col h-full fixed md:static top-0 left-0 w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 z-40`}>
      {/* Close button for mobile */}
      <button 
        className="md:hidden p-3 absolute top-4 right-4 bg-[#241e3a] rounded-full z-50"
        onClick={onClose}
      >
        <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      {/* Logo */}
      <div className="flex items-center justify-center mb-8 p-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-xl font-bold">
          ₿
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-grow">
        <ul className="space-y-2 px-4">
          {/* Events */}
          <li>
            <div 
              className="flex items-center justify-between py-2 cursor-pointer"
              onClick={() => toggleMenu('events')}
            >
              <span className="font-medium text-purple-300">Events</span>
              <span className="text-gray-400">{expandedMenu.events ? '▼' : '▶'}</span>
            </div>
            {expandedMenu.events && (
              <ul className="ml-4 border-l-2 border-purple-800 pl-3 space-y-1">
                <li className="py-1">
                  <Link to="/event-requests" className="text-gray-300 hover:text-purple-300 flex items-center" onClick={onClose}>
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    <span>New Requests</span>
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="#" className="text-gray-300 hover:text-purple-300 flex items-center" onClick={onClose}>
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    <span>Estimate</span>
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="#" className="text-gray-300 hover:text-purple-300 flex items-center" onClose={onClose}>
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    <span>Events</span>
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="#" className="text-gray-300 hover:text-purple-300 flex items-center" onClick={onClose}>
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    <span>Partial Requests</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Other menu items */}
          <li className="py-2">
            <Link to="#" className="text-white hover:text-purple-300" onClick={onClose}>Positions</Link>
          </li>
          <li className="py-2">
            <Link to="#" className="text-white hover:text-purple-300" onClick={onClose}>Contractors</Link>
          </li>

          {/* Users */}
          <li>
            <div 
              className="flex items-center justify-between py-2 cursor-pointer"
              onClick={() => toggleMenu('users')}
            >
              <span className="font-medium text-white">Users</span>
              <span className="text-gray-400">{expandedMenu.users ? '▼' : '▶'}</span>
            </div>
            {expandedMenu.users && (
              <ul className="ml-4 border-l-2 border-purple-800 pl-3 space-y-1">
                <li className="py-1">
                  <Link to="#" className="text-gray-300 hover:text-purple-300 flex items-center" onClick={onClose}>
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    <span>Admins</span>
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="#" className="text-gray-300 hover:text-purple-300 flex items-center" onClick={onClose}>
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    <span>Clients</span>
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="#" className="text-gray-300 hover:text-purple-300 flex items-center" onClick={onClose}>
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    <span>Coordinators</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="py-2">
            <Link to="#" className="text-white hover:text-purple-300" onClick={onClose}>Profile</Link>
          </li>
        </ul>
      </nav>

      {/* Logout button */}
      <div className="mt-auto mb-2 px-4">
        <button className="w-full bg-[#22233b] text-white py-2 rounded-md hover:bg-[#2d2e50] transition-colors flex items-center justify-center" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;