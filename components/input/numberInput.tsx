import React, { useState, useEffect } from "react";

type NumberInputProps = {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
};

export default function NumberInput({
  value,
  min = 0,
  max = 500,
  onChange,
}: NumberInputProps) {
  const [displayValue, setDisplayValue] = useState(value.toFixed(1));
  const [error, setError] = useState(false);
  const [errorDicimal, setErrorDecimal] = useState(false);

  useEffect(() => {
    const currentNumber = parseFloat(displayValue);
    if (currentNumber !== value) {
      setDisplayValue(value.toFixed(1));
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;

    if (input === "") {
      setDisplayValue("");
      return;
    }

    if (!/^\d*\.?\d{0,1}$/.test(input)) {
      setErrorDecimal(true);
      return;
    }

    const number = parseFloat(input);
    if (number > max) {
      setError(true);
      return;
    }

    setDisplayValue(input);

    if (!isNaN(number)) {
      onChange(number);
    }
    setError(false);
  };

  const handleBlur = () => {
    setError(false);
    setErrorDecimal(false);
    let number = parseFloat(displayValue);
    if (isNaN(number)) number = min;

    const clamped = Math.min(max, Math.max(min, number));
    setDisplayValue(clamped.toFixed(1));
    onChange(clamped);
  };

  return (
    <div>
      <input
        type="number"
        inputMode="decimal"
        step="0.1"
        value={displayValue}
        onChange={handleChange}
        onBlur={handleBlur}
        className="mx-auto block w-full max-w-50 h-20 p-3 text-5xl rounded-lg border border-gray-200 text-[#051C56] focus:outline-none focus:ring-2 focus:ring-[#051C56] focus:border-[#051C56]"
      />

      <span
        className={`block mt-1 text-sm text-red-500 text-center h-px ${
          error || errorDicimal ? "visible" : "invisible"
        }`}
      >
        {error
          ? `Please enter a number between ${min} and ${max}.`
          : `Enter 1 decimal place number.`}
      </span>
    </div>
  );
}
