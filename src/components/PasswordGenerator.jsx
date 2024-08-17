import React from "react";
import ReactSwitch from "react-switch";

const PasswordGenerator = () => {
  return (
    <div className="pt-8 text-white font-bold">
      <div className="flex flex-col items-center">
        <div className="bg-purple-800 w-[350px] shadow-2xl hover: shadow-blue-900 rounded-md p-3">
          <div className="mb-4 flex items-center justify-between">
            <label htmlFor="passwordLength">Password Length: </label>
            <input
              className="w-12 bg-purple-700 pl-2"
              type="number"
              name="passwordLength"
              id="passwordLength"
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label>Include UpperCase: </label>
            <ReactSwitch height={20} width={40} handleDiameter={18} />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label>Include Numbers: </label>
            <ReactSwitch height={20} width={40} handleDiameter={18} />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label>Include Special Characters: </label>
            <ReactSwitch height={20} width={40} handleDiameter={18} />
          </div>
          <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold rounded-md p-3">Generate Password</button>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
