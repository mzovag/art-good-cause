import React, { useState } from "react";
import { XMarkIcon } from '@heroicons/react/24/outline'

const Modal = ({ buttonText = 'Share with others', children }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-transparent text-black hover:bg-gray-100 active:bg-gray-300 font-bold px-6 py-3 rounded-lg border-2 outline-none focus:outline-none mr-4"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {buttonText}
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center bg-gray-300 items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto w-8/12">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                 <button className="bg-transparent absolute right-3 top-3 border-0 text-black" onClick={() => setShowModal(false)} >
                    <span className="text-black opacity-7 h-6 w-6 text-base block bg-gray-400 py-0 rounded-full">
                      <XMarkIcon className="h-6 w-6 text-gray-800" />
                    </span>
                  </button>  
                  {children}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;