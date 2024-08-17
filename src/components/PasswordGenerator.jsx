import React from "react";
import ReactSwitch from "react-switch";

const PasswordGenerator = () => {
  return (
    <div>
      <div>
        <label htmlFor="passwordLength">Password Length: </label>
        <input
          className="w-12 bg-purple-700 pl-2"
          type="number"
          name="passwordLength"
          id="passwordLength"
        />
      </div>
      <div>
        <label>Include UpperCase: </label>
        <ReactSwitch height={20} width={40} handleDiameter={18} />
      </div>
      <div>
        <label>Include Numbers: </label>
        <ReactSwitch height={20} width={40} handleDiameter={18} />
      </div>
      <div>
        <label>Include Special Characters: </label>
        <ReactSwitch height={20} width={40} handleDiameter={18} />
      </div>
      <button>Generate Password</button>
    </div>
  );
};

export default PasswordGenerator;
