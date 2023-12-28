import React, { useState } from "react";

export default function Contact({ showMenuBar }: any) {
  const [successMessage, setSuccessMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSuccessMessage(true);
      setLoading(false);
    }, 2000);
  };
  return (
    <div
      id="contact"
      className={`flex items-center justify-center flex-wrap lg:h-screen h-screen w-full ${
        showMenuBar ? "blur-sm" : ""
      } `}
    >
      <div className="lg:w-[70%] about lg:px-10 py-10 lg:h-auto h-auto mt-20 lg:mt-20">
        <div className="text-center">
          <h1 className="font-extrabold sm:text-4xl text-3xl">Contact.</h1>
          <p className=" py-4 leading-7 lg:text-[18px] text-[16px] px-4">
            Feel free to reach out to me for any questions or opportunities!
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center flex-col gap-5 my-10"
        >
          <input
            type="text"
            placeholder="FullName..."
            required
            className="md:w-[530px] w-[300px] xl:w-[600px] p-4 rounded bg-black text-white border-none"
          />
          <input
            type="email"
            placeholder="Email..."
            required
            className="md:w-[530px] w-[300px] xl:w-[600px] p-4 rounded bg-black text-white border-none"
          />
          <textarea
            placeholder="Write your message..."
            required
            className="md:w-[530px] w-[300px]  xl:w-[600px] p-4 rounded bg-black text-white border-none"
          />
          <button className="px-2 p-4 w-[300px]  xl:w-[600px] touch rounded text-sm md:w-[530px]">
            {loading ? "Loading..." : "Send"}
          </button>
          {successMessage && (
            <h1 className=" text-green-600">
              Your Message Successfully Send! 🚀
            </h1>
          )}
        </form>
      </div>
    </div>
  );
}
