


// import React from 'react';

// function EventRequests() {
//   // Generate dummy data with 14 rows to match the screenshot
//   const requests = Array.from({ length: 14 }, (_, i) => ({
//     id: i + 1,
//     name: 'Filled Name',
//     start: 'Jan 12, 2024',
//     end: 'Jan 14, 2024',
//     client: 'Muhammad Asad',
//     contact: '+1 234 566 7890',
//     venue: 'Lorem ipsum Dolor Sit Amet',
//   }));

//   return (
//     <div className="bg-gradient-to-br from-[#1e1e36] to-[#2d2b63] min-h-screen p-6">
//       <div className="max-w-full">
//         {/* Header with search and add button */}
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-bold text-white">Event Requests</h2>
//           <div className="flex items-center">
//             <div className="relative mr-2">
//               <input
//                 type="text"
//                 placeholder="Search here"
//                 className="w-64 p-2 pl-10 bg-[#1a1a2e] text-white rounded-md border border-gray-700 focus:outline-none"
//               />
//               <div className="absolute left-3 top-2.5">
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </div>
//             </div>
//             <button className="bg-pink-600 text-white w-8 h-8 rounded-md flex items-center justify-center hover:bg-pink-700">
//               +
//             </button>
//           </div>
//         </div>
        
//         {/* Table */}
//         <div className="overflow-x-auto">
//           <table className="w-full text-white">
//             {/* Table Header */}
//             <thead>
//               <tr className="bg-pink-600 bg-opacity-70">
//                 <th className="py-3 px-4 text-left font-medium relative">
//                   Event Name
//                   <span className="absolute right-2 top-3.5 bg-white rounded-full w-4 h-4 flex items-center justify-center text-pink-600 text-xs">↓</span>
//                 </th>
//                 <th className="py-3 px-4 text-left font-medium">Event Start</th>
//                 <th className="py-3 px-4 text-left font-medium relative">
//                   Event End
//                   <span className="absolute right-2 top-3.5 bg-white rounded-full w-4 h-4 flex items-center justify-center text-pink-600 text-xs">↓</span>
//                 </th>
//                 <th className="py-3 px-4 text-left font-medium relative">
//                   Client Name
//                   <span className="absolute right-2 top-3.5 bg-white rounded-full w-4 h-4 flex items-center justify-center text-pink-600 text-xs">↓</span>
//                 </th>
//                 <th className="py-3 px-4 text-left font-medium">Contact Info</th>
//                 <th className="py-3 px-4 text-left font-medium">Venue</th>
//               </tr>
//             </thead>
            
//             {/* Table Body */}
//             <tbody>
//               {requests.map((request, index) => (
//                 <tr 
//                   key={index} 
//                   className={`border-b border-gray-700 ${index % 2 === 0 ? 'bg-[#252547]' : 'bg-[#1e1e36]'} hover:bg-[#332f6a]`}
//                 >
//                   <td className="py-3 px-4 flex items-center">
//                     <button className="mr-2 text-white opacity-70">
//                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="currentColor" strokeWidth="2"/>
//                         <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2"/>
//                       </svg>
//                     </button>
//                     {request.name}
//                   </td>
//                   <td className="py-3 px-4">{request.start}</td>
//                   <td className="py-3 px-4">{request.end}</td>
//                   <td className="py-3 px-4">{request.client}</td>
//                   <td className="py-3 px-4">{request.contact}</td>
//                   <td className="py-3 px-4">{request.venue}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
          
//           {/* Pagination */}
//           <div className="flex justify-center mt-4 text-white">
//             <button className="mx-1 px-2 py-1">←</button>
//             <button className="mx-1 px-2 py-1">1</button>
//             <button className="mx-1 px-2 py-1">2</button>
//             <button className="mx-1 px-2 py-1">3</button>
//             <button className="mx-1 px-2 py-1">4</button>
//             <button className="mx-1 px-2 py-1">→</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EventRequests;




import React from 'react';

function EventRequests() {
  const requests = Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    name: 'Filled Name',
    start: 'Jan 12, 2024',
    end: 'Jan 14, 2024',
    client: 'Muhammad Asad',
    contact: '+1 234 566 7890',
    venue: 'Lorem ipsum Dolor Sit Amet',
  }));

  return (
    <div className="bg-gradient-to-br from-[#1e1e36] to-[#2d2b63] min-h-screen p-4">
      <div className="max-w-full">
        {/* Header with search and add button */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white mb-2 md:mb-0">Event Requests</h2>
          <div className="flex items-center">
            <div className="relative mr-2 w-full md:w-64">
              <input
                type="text"
                placeholder="Search here"
                className="w-full p-2 pl-10 bg-[#1a1a2e] text-white rounded-md border border-gray-700 focus:outline-none"
              />
              <div className="absolute left-3 top-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <button className="bg-pink-600 text-white w-8 h-8 rounded-md flex items-center justify-center hover:bg-pink-700">
              +
            </button>
          </div>
        </div>
        
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-white">
            <thead>
              <tr className="bg-pink-600 bg-opacity-70">
                <th className="py-3 px-4 text-left font-medium relative">
                  Event Name
                  <span className="absolute right-2 top-3.5 bg-white rounded-full w-4 h-4 flex items-center justify-center text-pink-600 text-xs">↓</span>
                </th>
                <th className="py-3 px-4 text-left font-medium">Event Start</th>
                <th className="py-3 px-4 text-left font-medium relative">
                  Event End
                  <span className="absolute right-2 top-3.5 bg-white rounded-full w-4 h-4 flex items-center justify-center text-pink-600 text-xs">↓</span>
                </th>
                <th className="py-3 px-4 text-left font-medium relative">
                  Client Name
                  <span className="absolute right-2 top-3.5 bg-white rounded-full w-4 h-4 flex items-center justify-center text-pink-600 text-xs">↓</span>
                </th>
                <th className="py-3 px-4 text-left font-medium">Contact Info</th>
                <th className="py-3 px-4 text-left font-medium">Venue</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-gray-700 ${index % 2 === 0 ? 'bg-[#252547]' : 'bg-[#1e1e36]'} hover:bg-[#332f6a]`}
                >
                  <td className="py-3 px-4 flex items-center">
                    <button className="mr-2 text-white opacity-70">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="currentColor" strokeWidth="2"/>
                        <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </button>
                    {request.name}
                  </td>
                  <td className="py-3 px-4">{request.start}</td>
                  <td className="py-3 px-4">{request.end}</td>
                  <td className="py-3 px-4">{request.client}</td>
                  <td className="py-3 px-4">{request.contact}</td>
                  <td className="py-3 px-4">{request.venue}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Pagination */}
          <div className="flex justify-center mt-4 text-white">
            <button className="mx-1 px-2 py-1">←</button>
            <button className="mx-1 px-2 py-1">1</button>
            <button className="mx-1 px-2 py-1">2</button>
            <button className="mx-1 px-2 py-1">3</button>
            <button className="mx-1 px-2 py-1">4</button>
            <button className="mx-1 px-2 py-1">→</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventRequests;