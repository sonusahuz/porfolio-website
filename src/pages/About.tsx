export default function About({ showMenuBar, setShowMenuBar }: any) {
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
        <p className="py-2 lg:leading-9 leading-7 tracking-normal text-[18px]">
          Hello! I'm <span className="sonu font-medium">Sonu Sahu</span> and I'm
          passionate about making a difference in people's lives through my
          creative projects. My fascination with programming began during my
          early college days. As I delved deeper into the world of technology, I
          discovered the power of web development using HTML, CSS, and JS to
          create websites.
        </p>
        <p className="py-2 lg:leading-9 leading-7 text-[18px]">
          My learning journey started with FreeCodeCamp, where I found my love
          for coding. Over time, I honed my skills and embarked on various
          personal projects.
        </p>
      </div>
    </div>
  );
}
