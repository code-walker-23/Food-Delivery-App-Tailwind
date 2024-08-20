import React from 'react';

const AddonsModal = ({ selectedAddons, handleCloseAddons }) => {
  return (
    <div className="addons-modal-overlay fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="addons-modal bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg relative overflow-hidden">
        <button
          className="close-addons-button absolute top-2 right-2 text-gray-600 text-2xl"
          onClick={handleCloseAddons}
        >
          ✖
        </button>
        <h5 className="text-2xl font-bold text-gray-800 mb-4">Add-ons:</h5>
        <div className="addon-scroll-container h-80 overflow-y-auto pr-4">
          {selectedAddons.map((addon, addonIndex) => (
            <div key={addonIndex} className="addon-group mb-4">
              <h6 className="text-xl font-semibold text-gray-700 mb-2">
                {addon.groupName}
              </h6>
              <ul className="addon-choices list-disc pl-5">
                {addon.choices.map((choice, choiceIndex) => (
                  <li key={choiceIndex} className="text-gray-600">
                    {choice.name}
                    {isNaN(choice.price)
                      ? " - Not Available"
                      : " - ₹" + choice.price / 100}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <button className="scroll-up-button absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full p-2">
          ▲
        </button>
        <button className="scroll-down-button absolute bottom-1/2 right-2 transform translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full p-2">
          ▼
        </button>
      </div>
    </div>
  );
};

export default AddonsModal;
