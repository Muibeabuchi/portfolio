import aboutData from "/src/data/aboutData";
import { IoIosArrowForward } from "react-icons/io";
import BlurText from "/src/components/Reactbits/BlurText";

// import Lanyard from '/src/components/Reactbits/Lanyard'
import { IoMdPin } from "react-icons/io";
import SpotlightCard from "/src/components/Reactbits/SpotlightCard";
import Contact from "/src/components/sections/Contact";
import { techIcons } from "/src/data/aboutData";

// Images
import AdU from "/public/assets/futo-image.jpeg";
import HREP from "/public/assets/About/hrep.png";
import MyPic from "/public/assets/About/notme.png";

const About = () => {
  const handleAnimationComplete = () => {};
  return (
    <section id="about" className="max-w-4xl pt-10 m-auto">
      {/* <Lanyard
          position={[0, 0, 17]}
          gravity={[0, -40, 0]}
          className="absolute -top-120 right-0 z-10"
        /> */}
      {/* Introduction Section */}
      <div className="grid grid-cols-12 gap-4">
        {/* Left Column - Text */}
        <div className="col-span-9">
          <BlurText
            text="What am i Building?"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4"
          />
        </div>

        {/* Right Column - Image */}
        {/* <div className="col-span-3 lg:hidden">
          <img
            src={MyPic}
            alt="Profile"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div> */}
      </div>

      {/* Lanyard */}
      <div className="relative"></div>

      {/* Background Section */}
      <div className="pb-5 pt-5">
        <p className="text-zinc-400 pb-5 text-xs lg:text-base">
          {/* I discovered my passion for{" "}
          <span className="underline decoration-sky-500">design</span> when I
          found myself really invested in perfecting the{" "}
          <span className="underline decoration-sky-500">visuals</span> of the
          systems I was programming in freshman year. I started out focusing on{" "}
          <span className="underline decoration-sky-500">functionality</span>,
          but soon got interested in{" "}
          <span className="underline decoration-sky-500">design</span> and{" "}
          <span className="underline decoration-sky-500">user experience</span>.
          That led me to dive into the world of{" "}
          <span className="underline decoration-sky-500">UI</span>,{" "}
          <span className="underline decoration-sky-500">UX</span>, and{" "}
          <span className="underline decoration-sky-500">product design</span>. */}
          I'm currently working on{" "}
          <span className="underline decoration-sky-500 font-bold">INRI</span>,
          a modern restaurant and kitchen management platform combined with an
          intuitive online food ordering system. Inri is designed to streamline
          operations for small to mid-sized food businesses, offering features
          like real-time order tracking, menu customization, kitchen workflow
          management, and customer insights. The platform also includes a
          user-friendly interface for customers to browse menus, place orders,
          and track delivery status seamlessly. With Inri, I aim to bridge the
          gap between great food and efficient technology — helping kitchens run
          smoother while enhancing the dining experience for customers.{" "}
          <span className="underline decoration-sky-500 font-bold">INRI</span>
          ,has been a project i believe will solve a real world problem for food
          businesses and Restaurants and reflects my passion for building
          practical, scalable solutions with real-world impact.
        </p>
        <p className="text-zinc-500 flex items-center gap-1 mb-5 text-xs lg:text-sm xl:text-base 2xl:text-lg">
          <IoMdPin /> <span>PortHarcourt, Nigeria</span>
        </p>
      </div>

      {/* Skills Section */}
      <div className="pb-5">
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-light border-b border-zinc-700 mb-4 pb-3">
          Skills
        </h2>
        <div className="flex flex-wrap gap-3 pb-12">
          {Object.entries(techIcons).map(([, tech], index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-md shadow-sm hover:scale-105 transition-transform duration-200"
            >
              {/* Icon Image */}
              <img
                src={tech.url}
                alt={tech.name}
                className="w-5 h-5 lg:w-6 lg:h-6 object-contain"
              />

              {/* Icon Name */}
              <span className="text-xs lg:text-sm text-gray-300 font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}

      {/* Education Section */}
      <div className="pb-5">
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-light border-b border-zinc-700 mb-4 pb-3">
          Education
        </h2>
        <ul className="mb-12">
          {aboutData.education.content.map((item, idx) => (
            <li key={idx} className="flex items-center gap-4 mb-4">
              {/* Logo on the left side */}
              <img
                src={AdU}
                alt={`${item.degree} logo`}
                className="w-10 h-10 lg:w-15 lg:h-15 object-cover rounded-full"
              />

              {/* Content on the right side */}
              <div className="flex-grow">
                <h3 className="text-sm lg:text-xl font-semibold">
                  {item.degree}
                </h3>
                <p className="text-xs lg:text-base text-zinc-500">
                  {item.institution}
                </p>
              </div>
              {/* Period on the far right */}
              <span className="text-zinc-500 text-xs lg:text-sm self-start pt-2">
                {item.period}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Certifications Section */}

      {/* Design Process Section */}

      <Contact />
    </section>
  );
};

export default About;
