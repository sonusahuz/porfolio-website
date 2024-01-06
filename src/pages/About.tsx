export default function About({ showMenuBar }: any) {
  return (
    <div
      id="about"
      className={`flex  items-center justify-center flex-wrap lg:h-screen h-auto w-full ${
        showMenuBar ? "blur-sm" : ""
      } mb-12`}
    >
      <div className="lg:w-[70%] about py-8 px-4 p-2 lg:p-10 lg:h-auto h-auto mt-20 lg:mt-10">
        <h1 className="font-extrabold mb-4 lg:text-5xl text-3xl text-center">
          About Me.
        </h1>
        <p className="py-2 lg:leading-9 leading-7 tracking-normal text-[16px] lg:text-[18px]">
          Hello! My name is <span className="sonu font-medium">Sonu Sahu</span>,
          and I'm from Gurugram, Haryana. I have a great passion for creating
          and designing websites. I began my web development journey during my
          college days by creating a simple blog website using HTML, CSS, and
          JavaScript.
        </p>
        <p className="py-2 lg:leading-9 leading-7 tracking-normal text-[16px] lg:text-[18px]">
          I specialize in HTML, CSS, JavaScript, TypeScript, Tailwind CSS,
          React.js, Node.js, Next.js, React Native, Git, and GitHub. Leveraging
          these technologies, I've successfully completed various projects
          including social media websites, e-commerce platforms, and numerous
          other websites.
        </p>
        <p className="py-2 lg:leading-9 leading-7 text-[16px] lg:text-[18px]">
          Currently, I work as a full stack developer, creating websites and
          applications.
        </p>
      </div>
    </div>
  );
}
