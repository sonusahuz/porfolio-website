import { useState } from "react";
export default function Contact({ showMenuBar }: any) {
  const api = "https://655310e65449cfda0f2e0f1d.mockapi.io/blog/users";
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = {
      fullname: fullName,
      email: email,
      message: message,
    };
    fetch(api, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        alert("Your Message Successfully Send! 🚀");
        setEmail("");
        setFullName("");
        setMessage("");
      });
  };
  return (
    <div
      id="contact"
      className={`flex items-center justify-center flex-wrap lg:h-screen h-screen w-full ${
        showMenuBar ? "blur-sm" : ""
      } `}
    >
      <div className="lg:w-[70%] about lg:px-10 py-12 lg:h-[550px] h-auto mt-20 lg:mt-20">
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
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="md:w-[530px] w-[300px] xl:w-[600px] p-4 rounded bg-black text-white border-none"
          />
          <input
            type="email"
            placeholder="Email..."
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="md:w-[530px] w-[300px] xl:w-[600px] p-4 rounded bg-black text-white border-none"
          />
          <textarea
            placeholder="Write your message..."
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="md:w-[530px] w-[300px]  xl:w-[600px] p-4 rounded bg-black text-white border-none"
          />
          <button className="px-2 p-4 w-[300px]  xl:w-[600px] touch rounded text-sm md:w-[530px]">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
