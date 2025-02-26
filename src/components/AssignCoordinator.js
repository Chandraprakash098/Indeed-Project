import React from 'react';

function AssignCoordinator() {
  return (
    <div className="bg-[#16213e] rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-4">Event Name (Venue Here)</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Coordinator"
          className="w-full p-2 bg-[#1a1a2e] text-white rounded mb-2"
        />
        <button className="bg-purple-600 text-white py-2 px-4 rounded">Add New Coordinator</button>
      </div>
      <div className="space-y-4">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className="bg-[#1a1a2e] p-4 rounded">
            <p>Start: 12-12-2023 | Ends: 15-12-2023</p>
            <p>Venue Address: Some Location 12, Name Here, City, State</p>
          </div>
        ))}
      </div>
      <div className="mt-4 space-y-4">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="bg-[#1a1a2e] p-4 rounded">
            <p>Meeting Room {i + 1} + 12 Positions</p>
            <p>Start from Jan 12, 2023 - Ends at Jan 15, 2023</p>
          </div>
        ))}
      </div>
      <button className="bg-purple-600 text-white py-2 px-4 rounded mt-4">Assign Contractor</button>
    </div>
  );
}

export default AssignCoordinator;