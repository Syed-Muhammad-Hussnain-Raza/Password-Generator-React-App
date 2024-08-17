import React, { useState } from "react";
import ReactSwitch from "react-switch";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialCharacter, setIncludeSpecialCharacter] = useState(true);

  const generatePassword = () => {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    const specialCharacters = "!@#$%^&*()-_{}'?/>.<,;`~|[]₱$﷼";

    let validChars = lowerCaseChars;

    if (includeUpperCase) {
      validChars += upperCaseChars;
    }

    if (includeNumbers) {
      validChars += numbers;
    }

    if (includeSpecialCharacter) {
      validChars += specialCharacters;
    }

    let generatePassword = "";

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatePassword += validChars.charAt(randomIndex);
    }
    setPassword(generatePassword);
  };

  return (
    <div className="pt-8 text-white font-bold">
      <div className="flex flex-col items-center">
        <div className="bg-purple-800 w-[350px] shadow-2xl hover: shadow-blue-900 rounded-md p-3">
          <div className="mb-4 flex items-center justify-between">
            <label htmlFor="passwordLength">Password Length: </label>
            <input
              value={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
              className="w-12 bg-purple-700 pl-2"
              type="number"
              name="passwordLength"
              id="passwordLength"
              min="4"
              max="64"
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label>Include UpperCase: </label>
            <ReactSwitch
              checked={includeUpperCase}
              onChange={() => setIncludeUpperCase(!includeUpperCase)}
              height={20}
              width={40}
              handleDiameter={18}
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label>Include Numbers: </label>
            <ReactSwitch
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              height={20}
              width={40}
              handleDiameter={18}
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label>Include Special Characters: </label>
            <ReactSwitch
              checked={includeSpecialCharacter}
              onChange={() =>
                setIncludeSpecialCharacter(!includeSpecialCharacter)
              }
              height={20}
              width={40}
              handleDiameter={18}
            />
          </div>
          <button
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold rounded-md p-3"
            onClick={generatePassword}
          >
            Generate Password
          </button>
        </div>
        <h2>{password}</h2>
      </div>
    </div>
  );
};

export default PasswordGenerator;
