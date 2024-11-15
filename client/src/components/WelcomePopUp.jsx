import { useState, useEffect } from "react";

const WelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isPopupShown = localStorage.getItem("isPopupShown");
    if (!isPopupShown) {
      setIsVisible(true);
      localStorage.setItem("isPopupShown", "true");
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">
            Welcome to The Format Group's Sample Site!
          </h2>
          <p className="mb-6">
            To access materials, please log in or sign up and then browse all
            our great content!
          </p>
          <button
            className="w-2/5 font-bold py-2 px-4 rounded shadow-md bg-[#bfd9d9] hover:bg-[#006666] hover:text-white"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default WelcomePopup;
