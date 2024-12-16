import React, { useState } from "react";

export const Body = () => {
  const [temp, setTemp] = useState(""); 
  const [unit, setUnit] = useState("");
  const [result, setResult] = useState(""); 
  const [dropdownOpen, setDropdownOpen] = useState(false); 

  const handleConversion = () => {
    if (!temp || isNaN(temp)) {
      setResult("Please enter a valid number!");
      return;
    }

    const tempValue = parseFloat(temp);

    if (unit === "Celsius") {
      // Convert Celsius to Fahrenheit
      const converted = (tempValue * 9) / 5 + 32;
      setResult(`${converted.toFixed(2)} °F`);
    } else if (unit === "Fahrenheit") {
      // Convert Fahrenheit to Celsius
      const converted = ((tempValue - 32) * 5) / 9;
      setResult(`${converted.toFixed(2)} °C`);
    } else {
      setResult("Please select a unit to convert.");
    }
  };

  const handleClear = () => {
    setTemp(""); // Clear the temperature input
    setUnit(""); // Clear the selected unit
    setResult(""); // Clear the result
  };

  const handleUnitSelect = (selectedUnit) => {
    setUnit(selectedUnit); // Update the unit
    setDropdownOpen(false); // Close the dropdown
  };

  return (
    <div className="bg-blue-600 h-[700px]">
     

      <div className="flex justify-center py-5">
        <input
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
          type="text"
          placeholder="Enter temperature"
          className="input input-bordered w-full max-w-xs text-center"
        />
      </div>

      <div className="flex justify-center my-5 relative">
        <button
          className="btn m-1"
          onClick={() => setDropdownOpen((prev) => !prev)}
        >
          {unit ? `Selected: ${unit}` : "Click to select unit"}
        </button>
        {dropdownOpen && (
          <ul className="absolute menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <button onClick={() => handleUnitSelect("Celsius")}>Celsius</button>
            </li>
            <li>
              <button onClick={() => handleUnitSelect("Fahrenheit")}>
                Fahrenheit
              </button>
            </li>
          </ul>
        )}
      </div>

      <div className="flex justify-center">
        <p className="text-2xl text-center bg-green-300 p-4 rounded">
          Result: {result}
        </p>
      </div>

      <div className="flex justify-center my-5 space-x-4">
        <button
          onClick={handleConversion}
          className="bg-red-300 px-5 py-2 rounded hover:bg-red-400"
        >
          Convert
        </button>
        <button
          onClick={handleClear}
          className="bg-gray-300 px-5 py-2 rounded hover:bg-gray-400"
        >
          Clear
        </button>
      </div>
    </div>
  );
};
