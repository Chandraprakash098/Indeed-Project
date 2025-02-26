


import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import EventRequests from './components/EventRequests';
import EventDetails from './components/EventDetails';
import './App.css';

function App() {
  // State to track sidebar visibility on mobile
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  // Function to close sidebar (especially for navigation links)
  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false);
  };

  return (
    <Router>
      <div className="flex flex-col md:flex-row h-screen relative">
        {/* Sidebar component - Will automatically handle responsive behavior */}
        <Sidebar isOpen={isMobileSidebarOpen} onClose={closeMobileSidebar} />

        <div className="flex-1 flex flex-col bg-[#0f172a] text-white">
          {/* Header with profile and notification */}
          <header className="flex flex-col md:flex-row justify-end items-center p-4 border-b border-gray-800">
            <div className="flex items-center gap-4 w-full md:w-auto">
              {/* Notification bell icon */}
              <button className="p-2 hover:bg-gray-800 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </button>
              <div className="flex items-center gap-2 w-full justify-between md:justify-end">
                <div className="flex flex-col items-end">
                  <span className="text-sm font-semibold text-purple-400">Hi, Muhammad Asad</span>
                  <span className="text-xs text-gray-400">welcome back!</span>
                </div>
                <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center overflow-hidden border-2 border-purple-400">
                  <img src="/api/placeholder/40/40" alt="Profile" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </header>
          
          {/* Main content */}
          <main className="flex-1 p-4 md:p-6">
            <nav className="mb-4 flex flex-col md:flex-row">
              <Link to="/event-requests" className="text-purple-400 hover:text-purple-300 mb-2 md:mb-0 md:mr-4">Event Requests</Link>
              <Link to="/event-details" className="text-purple-400 hover:text-purple-300">Event Details</Link>
            </nav>
            <Routes>
              <Route path="/event-requests" element={<EventRequests />} />
              <Route path="/event-details" element={<EventDetails />} />
              <Route path="/" element={<EventRequests />} /> {/* Default route */}
            </Routes>
          </main>
        </div>

        {/* Mobile Menu Button (for Sidebar toggle) */}
        <button 
          onClick={toggleMobileSidebar}
          className="md:hidden p-3 absolute top-4 left-4 bg-[#241e3a] rounded-full z-30"
        >
          <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </Router>
  );
}

export default App;