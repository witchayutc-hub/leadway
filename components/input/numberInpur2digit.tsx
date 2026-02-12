"use client";
import React, { useState, useEffect } from "react";

type NumberInputProps = {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
};

export default function NumberInput2digit({
  value,
  min = 0,
  max = 500,
  step = 0.01,
  onChange,
}: NumberInputProps) {
  const [display, setDisplay] = useState(value.toFixed(1));
  const [error, setError] = useState(false);
  const [errorDicimal, setErrorDecimal] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (!isFocused) {
      setDisplay(value.toFixed(2));
    }
  }, [value, isFocused]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    if (input === "") {
      setDisplay("");
      return;
    }

    if (!/^\d*\.?\d{1,2}$/.test(input)) {
      setErrorDecimal(true);
      return;
    }

    const number = parseFloat(input);

    if (!isNaN(number) && number > max) {
      setError(true);
      return;
    }

    setError(false);
    setErrorDecimal(false);
    setDisplay(input);

    if (!isNaN(number) && number !== value) {
      onChange(number);
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    setError(false);
    setErrorDecimal(false);

    let number = parseFloat(display);
    if (isNaN(number)) number = min;

    const clamped = Math.min(max, Math.max(min, number));
    const formatted = Number(clamped.toFixed(2));

    setDisplay(formatted.toFixed(1));

    if (formatted !== value) {
      onChange(formatted);
    }
  };

  return (
    <div>
      <input
        type="number"
        inputMode="decimal"
        value={display}
        step={step}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        className="mx-auto block w-full max-w-50 h-20 p-2 text-5xl rounded-lg border border-gray-200 text-[#051C56] focus:outline-none focus:ring-2 focus:ring-[#051C56] focus:border-[#051C56]"
      />
      <span
        className={`block mt-1 text-sm text-red-500 text-center h-px whitespace-nowrap ${
          error || errorDicimal ? "visible" : "invisible"
        }`}
      >
        {error
          ? `Number must not exceed ${max}`
          : "Enter must 2 decimal place number."}
      </span>
    </div>
  );
}
