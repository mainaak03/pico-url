"use client";

import { useFormState } from "react-dom";
import { createShortUrl } from "../actions";

const initialState = {
  message: "",
};

const Form = () => {
  const [state, formAction] = useFormState(createShortUrl, initialState);

  return (
    <div className="flex mx-auto m-2 p-2">
      <form className="max-w-sm mx-auto" action={formAction}>
        <label
          htmlFor="original_url"
          className="block mb-2 text-sm font-medium"
        >
          Your long URL
        </label>
        <input
          type="text"
          id="original_url"
          name="original_url"
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:border-gray-200 dark:text-darkBackground"
          placeholder="website.com/so-long"
          required
        ></input>

        <p className="text-red-500 font-semibold text-xs my-2">
          {state?.url_error}
        </p>

        <label htmlFor="password" className="block my-2 text-sm font-medium">
          Enter password for viewing analytics
        </label>
        <input
          type="password"
          id="password"
          name="password"
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:border-gray-200 dark:text-darkBackground"
          placeholder="very-secure-password"
          // required
        ></input>

        <p className="text-red-500 font-semibold text-xs my-2">
          {state?.password_error}
        </p>

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

        <p className="text-red-500 font-semibold text-xs my-2">
          {state?.server_error}
        </p>
        <p className="text-red-500 font-semibold text-xs my-2">
          {state?.message}
        </p>

        <button
          type="submit"
          className="mx-auto w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"
        >
          Pico-fy!
        </button>
      </form>
    </div>
  );
};

export default Form;
