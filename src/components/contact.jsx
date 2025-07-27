import React from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    const access_key = import.meta.env.VITE_ACCESS_KEY;

    formData.append("access_key", access_key);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="text-white sm:h-[100vh] p-10 sm:p-20 sm:grid grid-cols-2 grid-rows-6 place-items-center gap-4"
    >
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent col-span-2 sm:text-5xl text-3xl">
        Contacts
      </div>

      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent sm:text-4xl text-2xl ">
        Let's talk
      </div>

      <div className="row-start-3">
        I'm currently avaliable to take on new projects, so feel free to send me
        a message about anything that you want me to work on. You can contact
        anytime.
      </div>

      <div className="row-start-4 w-full h-full grid grid-rows-2">
        <p className="inline text-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="inline size-6 mr-2 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          sharmabikram061@gmail.com
        </p>

        <p className="mt-5 inline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="inline size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          +975-77232320 / +975-17825220
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="w-full h-full sm:grid col-start-2 row-start-2 row-span-4 grid-rows-5 gap-1 mt-5"
      >
        <div className="w-full h-full text-white">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            className="w-full h-10 border mt-2 rounded-lg bg-gray-900 px-2"
            required
          />
        </div>

        <div className="w-full h-full">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            className="w-full h-10 border mt-2 rounded-lg bg-gray-900 px-2"
            required
          />
        </div>

        <div className="row-span-2 w-full h-full">
          <label htmlFor="email">Write your message here</label>
          <textarea
            name="message"
            className="w-full border mt-2 h-30 rounded-lg bg-gray-900 px-2"
            required
          />
        </div>
        <div className="w-full h-full flex items-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full h-[40px] my-2 sm:h-4/6 px-5 "
          >
            {result ? result : "Submit now"}
          </button>
        </div>
      </form>

      <div className="row-start-6 col-span-2  w-full h-full">
        <hr className="w-full bg-white" />
        <br />
        <p className="">&copy; 2025 Bikram Sharma</p>
      </div>
    </div>
  );
}
