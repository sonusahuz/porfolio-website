export default function About({ showMenuBar, onClose }: any) {
  return (
    <div
      id="about"
      className={`flex  items-center justify-center flex-wrap lg:h-screen h-auto w-full ${
        showMenuBar ? "blur-sm" : ""
      } mb-12`}
    >
      <div className="lg:w-[70%] about py-8 px-4 p-2 lg:p-10 lg:h-[480px] h-auto mt-20 lg:mt-10">
        <h1 className="font-extrabold mb-4 lg:text-5xl text-3xl text-center">
          About Me.
        </h1>
        <p className="py-2 lg:leading-9 leading-7 tracking-normal text-[16px] lg:text-[18px]">
          Hello! My name is <span className="sonu font-medium">Sonu Sahu</span>
          {} I have a great passion for creating and designing websites. I
          started my web development career during my college days when I
          developed a blog website utilizing HTML, CSS, and JavaScript. This
          experience significantly amplified my interest in programming.
        </p>
        <p className="py-2 lg:leading-9 leading-7 text-[16px] lg:text-[18px]">
          Additionally, I have also learned more technologies such as React.js
          which is a JavaScript library for building user interfaces. Using this
          library I have created many projects such as social media website,
          e-commerce website and many more projects.
        </p>
      </div>
    </div>
  );
}
