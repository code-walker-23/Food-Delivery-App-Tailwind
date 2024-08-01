// // Accordion.js
// import React from 'react';

// const Accordion = ({ title, isOpen, onToggle, children }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md mb-4">
//       <button
//         className="w-full flex justify-between items-center p-4 text-lg font-semibold text-gray-800 bg-gray-100 rounded-t-lg focus:outline-none hover:bg-gray-200"
//         onClick={onToggle}
//       >
//         {title}
//         <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
//       </button>
//       <div className={`transition-max-height duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Accordion;/*  */
