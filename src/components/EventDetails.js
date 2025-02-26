


import React from 'react';

function EventDetails() {
  return (
    <div className="bg-gradient-to-br from-[#1e1e36] to-[#2d2b63] text-white min-h-screen p-4">
      <div className="max-w-full">
        {/* Back button and title */}
        <div className="flex items-center mb-4">
          <button className="text-white mr-2">←</button>
          <h2 className="text-2xl font-bold">Event Name <span className="font-normal text-lg">(Venue Details)</span></h2>
        </div>

        {/* Navigation tabs */}
        <div className="flex overflow-x-auto border-b border-gray-700 mb-6">
          <button className="px-4 py-2 bg-[#272639] text-white mr-1 rounded-t-md whitespace-nowrap">Event Details</button>
          <button className="px-4 py-2 bg-[#9c3797] text-white mr-1 rounded-t-md whitespace-nowrap">Assign Coordinator/Coordinator</button>
          <button className="px-4 py-2 bg-[#272639] text-white mr-1 rounded-t-md whitespace-nowrap">Session Management</button>
          <button className="px-4 py-2 bg-[#272639] text-white mr-1 rounded-t-md whitespace-nowrap">Generate SOW</button>
        </div>

        {/* Main content grid */}
        <div className="flex flex-col md:flex-row mb-6">
          {/* Left column */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0 pr-0 md:pr-4">
            <h3 className="text-xl mb-4">Assign Coordinator</h3>
            <div className="relative mb-4">
              <div className="flex items-center border border-gray-600 rounded p-2 bg-transparent">
                <input 
                  type="text" 
                  placeholder="Search Coordinator" 
                  className="bg-transparent flex-grow outline-none w-full"
                />
                <button className="text-gray-400">▼</button>
              </div>
            </div>
            <button className="text-sm text-pink-400 hover:text-pink-300">Add New Coordinator</button>
          </div>
          
          {/* Right column */}
          <div className="w-full md:w-1/2">
            <div className="mb-4">
              <h3 className="text-xl mb-2">Event Name <span className="font-normal">(Venue Here)</span></h3>
              <div className="border border-gray-600 rounded p-2 mb-2 flex flex-col md:flex-row justify-between">
                <div>Start: 12-12-2023</div>
                <div>Ends: 15-12-2023</div>
              </div>
              <div className="border border-gray-600 rounded p-2">
                Venue Address: Some Location 12, Name Here, City, State
              </div>
            </div>
          </div>
        </div>

        {/* Assign Contractor and Positions in a side-by-side layout */}
        <div className="flex flex-col md:flex-row">
          {/* Assign Contractor - Left side */}
          <div className="w-full md:w-2/5 mb-6 md:mb-0 pr-0 md:pr-4">
            <h3 className="text-xl mb-4">Assign Contractor</h3>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((roomNum) => (
                <div 
                  key={roomNum}
                  className={`p-4 rounded-md ${roomNum === 1 ? 'bg-[#b73a97]' : 'bg-[#272639]'}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-medium">Meeting Room {roomNum}</div>
                    <div className="text-sm text-pink-400">✦ 12 Positions</div>
                  </div>
                  <div className="text-sm text-gray-300">Start from 12 Jan, 2023 - Ends at 15 Jan, 2023</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Positions Table - Right side */}
          <div className="w-full md:w-3/5">
            <h3 className="text-xl mb-4">Positions</h3>
            <div className="bg-black rounded-md overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-800">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Position</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Info</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Quantity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {[...Array(7)].map((_, index) => (
                    <tr key={index} className="hover:bg-gray-900">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">Camera I (Video)</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">9 am - 7 pm</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">LP default</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">20</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex justify-between items-center border border-gray-600 rounded p-2">
                          <span className="text-gray-400">Select Contractor</span>
                          <span>▼</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {/* Pagination */}
              <div className="flex justify-center items-center p-4 border-t border-gray-800">
                <button className="mx-1 px-2 py-1">←</button>
                <button className="mx-1 px-2 py-1">○</button>
                <button className="mx-1 px-2 py-1 bg-pink-600 rounded-full w-6 h-6 flex items-center justify-center">2</button>
                <button className="mx-1 px-2 py-1">→</button>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-center my-6">
          <button className="px-10 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-md font-medium hover:from-pink-600 hover:to-purple-700 transition-all">
            Save Edits
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
