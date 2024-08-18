import React, { useState } from "react";
import ReactSwitch from "react-switch";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialCharacter, setIncludeSpecialCharacter] = useState(true);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [copySuccess, setCopySuccess] = useState("");

  const handlePasswordLengthChange = (e) => {
    setPasswordLength(e.target.value);
  };

  const handleFocus = () => {
    setPasswordLength(""); // Clear the input field on focus
  };

  const handleBlur = () => {
    if (passwordLength === "" || passwordLength < 4 || passwordLength > 64) {
      if (passwordLength < 4 || passwordLength > 64) {
        alert("Password length must be between 4 and 64.");
      }
      setPasswordLength(8);
    }
  };

  const determineStrength = (length, upper, numbers, special) => {
    let strength = "Weak";
    if (length >= 12 && upper && numbers && special) strength = "Strong";
    else if (length >= 8 && (upper || numbers || special))
      strength = "Moderate";
    return strength;
  };

  const generatePassword = () => {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    const specialCharacters = "!@#%^&*()-_}'?{/>.<,]`~|[$";

    let validChars = lowerCaseChars;
    let guaranteedChars = [];

    if (includeUpperCase) {
      validChars += upperCaseChars;
      guaranteedChars.push(
        upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)]
      );
    }

    if (includeNumbers) {
      validChars += numbers;
      guaranteedChars.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }

    if (includeSpecialCharacter) {
      validChars += specialCharacters;
      guaranteedChars.push(
        specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
      );
    }

    let newPassword = guaranteedChars.join("");

    for (let i = guaranteedChars.length; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      newPassword += validChars.charAt(randomIndex);
    }

    newPassword = newPassword
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");

    setPassword(newPassword);
    setPasswordStrength(
      determineStrength(
        passwordLength,
        includeUpperCase,
        includeNumbers,
        includeSpecialCharacter
      )
    );
    setCopySuccess("");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopySuccess("Copied to clipboard!");
  };

  return (
    <div className="pt-8 text-white font-bold">
      <div className="flex flex-col items-center">
        <div className="bg-purple-800 w-full max-w-[370px] shadow-2xl hover:shadow-blue-900 rounded-md p-3">
          <div className="mb-4 flex items-center justify-between">
            <label htmlFor="passwordLength">Password Length: </label>
            <input
              value={passwordLength}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handlePasswordLengthChange}
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
          {password && (
            <div className="mt-4">
              <p className="font-normal text-white">
                Password Generated:{" "}
                <span
                  className="font-bold cursor-pointer"
                  onClick={copyToClipboard}
                >
                  {password}
                </span>
              </p>
              <p className="mt-2">
                Strength:{" "}
                <span className="text-green-400">{passwordStrength}</span>
              </p>
              {copySuccess && (
                <p className="mt-1 text-green-300">{copySuccess}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
