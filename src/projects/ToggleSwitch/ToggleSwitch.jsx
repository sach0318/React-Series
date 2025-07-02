import { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  const checkIsOn = isOn ? "on" : "off";

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center bg-gray-50"
      onClick={handleToggleSwitch}
    >
      <h1 className="text-black text-center text-3xl font-bold mb-20 flex items-center gap-2">
        Toggle Switch
        <span className="text-red-500">⚡</span>
        <span className="text-blue-500">👤</span>
      </h1>

      <div
        className={`
          w-24 h-12 rounded-full relative cursor-pointer p-1 mt-5 
          transition-colors duration-300 ease-linear
          shadow-lg
          ${isOn ? "bg-green-500" : "bg-red-500"}
        `}
      >
        <div
          className={`
            w-10 h-10 rounded-full flex items-center justify-center
            text-white font-bold absolute top-1 transition-all duration-300 ease-linear
            border-2 border-gray-300 shadow-md text-xs
            ${
              isOn
                ? "bg-green-500 transform translate-x-12"
                : "bg-red-500 transform translate-x-0"
            }
          `}
        >
          <span className="uppercase tracking-tight">{checkIsOn}</span>
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
