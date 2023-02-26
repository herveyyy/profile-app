import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

Modal.setAppElement("#root");

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  function handleLogin() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      borderRadius: "10px",
      padding: "2rem",
      maxWidth: "500px",
      width: "100%",
      maxHeight: "80vh",
      overflow: "auto",
    },
  };

  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-orange-700">
      <div className="flex items-center">
        <Link
          to="/"
          className="text-4xl text-gray-900 font-semibold uppercase font-mono"
        >
          Profile App
        </Link>
      </div>
      <div className="flex items-center">
        <Link
          to="/"
          className="text-lg font-bold text-gray-500 uppercase hover:text-gray-800 mx-6 font-mono"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-lg font-bold text-gray-500 uppercase hover:text-gray-800 mx-6 font-mono"
        >
          About
        </Link>
        <Link
          to="/profile"
          className="text-lg font-bold text-gray-500 uppercase hover:text-gray-800 mx-6 font-mono"
        >
          Profile
        </Link>
        <button
          onClick={handleLogin}
          className="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 mx-2 rounded uppercase font-mono"
        >
          Login
        </button>
      </div>

      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="Login Modal"
      >
        <div className="flex flex-col items-center justify-center">
         <p className="font-mono mb-3">Profile App</p>
          <h1 className="text-xl font-bold mb-4">Sign In</h1>

          <button
            className="bg-white hover:bg-gray-100 py-3 px-4 rounded-full flex items-center justify-center"
            onClick={handleCloseModal}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google logo"
              className="w-6 h-6 mr-2"
            />
            <span className="font-medium">Sign in with Google</span>
          </button>
          <button
            className="bg-white hover:bg-gray-100 py-3 px-4 rounded-full flex items-center justify-center"
            onClick={handleCloseModal}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1024px-Facebook_f_logo_%282021%29.svg.png"
              alt="Google logo"
              className="w-6 h-6 mr-2"
            />
            <span className="font-medium">Sign in with Facebook</span>
          </button>
        </div>
      </Modal>
    </nav>
  );
}

export default Navbar;
