"use client";

import React, { useEffect, useState } from "react";

const Form = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [randomNumber, setRandomNumber] = useState(0);
  const [captchaCorrect, setCaptchaCorrect] = useState<null|boolean>(null);

  const handleChange = (e) => {
    setOriginalUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const val = parseInt((document.getElementById("captcha") as HTMLInputElement).value);
    if (val !== randomNumber) {
        setCaptchaCorrect(false);
    }
    else {
        setCaptchaCorrect(true);
    }
    console.log(originalUrl, val);
  };

  const generateRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Generate a new random number when the component mounts
  useEffect(() => {
    setRandomNumber(generateRandomNumber(1000, 9999)); // Example: 4-digit number
  }, []);

  return (
    <div className="flex mx-auto m-2 p-2">
      <form className="max-w-sm mx-auto">
        <label
          htmlFor="original_url"
          className="block mb-2 text-sm font-medium"
        >
          Your long URL
        </label>
        <input
          type="url"
          id="original_url"
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:border-gray-200 dark:text-darkBackground"
          placeholder="website.com/so-long"
          onChange={handleChange}
        ></input>

        <label htmlFor="captcha" className="block mt-4 mb-2 text-sm font-medium">
          Enter the number you see
        </label>
        <div className="flex items-center">
          <div className="mr-4 px-4 py-2 rounded-lg font-bold bg-zinc-200 dark:text-darkBackground">
            {randomNumber}
          </div>
          <input
            type="number"
            id="captcha"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:border-gray-200 dark:text-darkBackground"
          ></input>
        </div>

        {captchaCorrect === false && <p className="text-red-500 font-semibold text-xs my-2">Incorrect captcha, please try again.</p>}
        
        <p
          id="helper-text-explanation"
          className="my-4 text-sm text-gray-500 dark:text-gray-400"
        >
          We’ll never sell your analytics. Read our{" "}
          <a
            href="#"
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Privacy Policy
          </a>
          .
        </p>
        {/* <button type="button" className="my-6 mx-auto w-full focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Shorten</button> */}
        
        <button
          type="button"
          className="mx-auto w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={handleSubmit}
        >
          Pico-fy!
        </button>
      </form>
    </div>
  );
};

export default Form;
