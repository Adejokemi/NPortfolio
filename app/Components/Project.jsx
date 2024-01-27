

import ProjectCard from "../components/ProjectCard";

const Project = () => {
  const projects = [
    {
      liveLink: "https://mpos.smarthivetechsolution.com/",
      imageSrc: "https://i.imgur.com/L20dM8K.png",
      projectName: "Mpos",
      description:
        "MPOS is a versatile business management software, offering comprehensive solutions for efficient operations. With features like inventory management and sales tracking, it empowers businesses to streamline processes and enhance overall productivity.",
      tools: "React.js, Sass/Scss, Firebase",
    },
    {
      liveLink: "https://natours-hazel.vercel.app/",
      imageSrc: "https://i.imgur.com/zXqHIZH.png",
      projectName: "Natours",
      description:
        "Natours is a vibrant tour booking website designed for seamless user interaction. Its intuitive interface ensures easy navigation, providing a visually engaging platform for hassle-free tour reservations.",
      tools: "Html, Sass/Scss, Javascript",
    },
    {
      liveLink: "https://sync-frontends.vercel.app/",
      imageSrc: "https://i.imgur.com/ilAglB3.png",
      projectName: "Sync",
      description:
        "Sync is a church management software designed to streamline administrative tasks, enhance communication within religious communities. With intuitive features, it facilitates member engagement, event planning, and resource management, fostering a connected church environment.",
      tools: "React.js, TailwindCss, Laravel",
    },
    {
      liveLink: "https://med-ease.vercel.app/",
      imageSrc: "https://i.imgur.com/4Zcr1Ag.png",
      projectName: "MedEase",
      description:
        "MedEase is a medication management software, streamlining the process of tracking medications. With user-friendly features, it ensures medication adherence, providing an accessible platform for users to manage their health with ease.",
      tools: "React.js, TailwindCss, Node.js",
    },
    {
      liveLink: "https://omnifood-jonas-process.netlify.app/",
      imageSrc: "https://i.imgur.com/XsiHPA5.png",
      projectName: "OmniFood",
      description:
        "Omnifood's website is your gateway to a world of culinary convenience. Explore our AI-powered food delivery service online, browse a diverse menu, and enjoy a seamless ordering experience right from the comfort of your home.",
      tools: "Html, CSS, Javascript",
    },
    {
      liveLink: "https://sync-website-vumc.vercel.app/",
      imageSrc: "https://i.imgur.com/4EqoOkV.png",
      projectName: "Sync Website",
      description:
        "The Sync website is the online gateway to our powerful church management software. Explore comprehensive features, from member management to event planning. Connect with us seamlessly through our user-friendly website.",
      tools: "Next.js, TailwindCss, Laravel",
    },
    {
      liveLink: "https://emma-laundromat.netlify.app/",
      imageSrc: "https://i.imgur.com/zuedEFC.png",
      projectName: "Laundromat",
      description:
        "The Laundromat website serves as an informative hub, detailing the company's services and offerings. Visitors can explore from the services provided to company details, and easily connect through the provided contact options for inquiries.",
      tools: "Html, TailwindCss, Javascript",
    },
    {
      liveLink: "https://dee-dee-adejokemi.vercel.app/",
      imageSrc: "https://i.imgur.com/Q3sGmv9.png",
      projectName: "DeeDee Hotel",
      description:
        "Discover Dee Dee Hotel through our inviting website. Experience the epitome of hospitality with elegant room showcases, amenities, and seamless reservation options. Your perfect stay begins with a visit to our online home.",
      tools: "Html, CSS, Javascript",
    },
    {
      liveLink: "/",
      imageSrc: "https://i.imgur.com/ptnIIwM.png",
      projectName: "Cabash Exchange",
      description:
        "Cabash Exchange, a Pan-African payment platform, offers a swift, secure, and convenient solution for individuals and businesses to seamlessly send and receive money across Africa in their preferred currencies..",
      tools: "React.js, TailwindCss, Laravel",
    },
  ];

  return (
    <div className="">
      <div className="flex justify-center items-center">
        <div className="w-full">
          <h2 className="lg:text-3xl text-xl my-3">Featured and <span className="font-bold">Personal</span> Projects</h2>
          <div className="">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
