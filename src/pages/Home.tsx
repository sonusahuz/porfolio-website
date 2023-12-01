export default function Home({ showMenuBar }: any) {
  return (
    <div
      className={`${
        showMenuBar ? "blur-sm" : ""
      } flex items-center lg:justify-between justify-center mx-auto lg:h-screen h-auto w-full flex-wrap pt-28 lg:pt-0 mb-20 lg:mb-0 mt-[-10px]`}
    >
      <div className="text-center lg:text-left mt-4 lg:mt-0">
        <h1
          className="text-4xl
         lg:text-4xl font-extrabold mb-2"
        >
          Hi, I am
        </h1>
        <h1 className="lg:text-6xl font-extrabold sm:text-4xl md:text-6xl text-4xl">
          Sonu Sahu.
        </h1>
        <h1 className="lg:text-5xl text-4xl tracking-wider font-extrabold hidden lg:block py-2">
          Exploring the world of web.
        </h1>
        <p className=" text-[16px] lg:text-xl md:leading-9 leading-6 sm:[400px] lg:w-[700px] mt-4">
          I'm Web Designer &{" "}
          <span className="sonu font-bold">Front-End Developer </span>
          focused on crafting clean & user-friendly experiences, i am passionate
          about building excellent software that improves the lives of those
          around me.
        </p>
        <div className="mt-6">
          <button className="touch py-3 px-6 rounded-full">
            <a href="mailto: sonusahu8930@gmail.com">Get In Touch</a>
          </button>
        </div>
      </div>
      <div className="order-first lg:order-last rounded-full mb-0">
        <img src={"/sonusahu.png"} className="lg:w-96 rounded-full w-60" />
      </div>
    </div>
  );
}
