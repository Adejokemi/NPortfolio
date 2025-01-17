import ProjectCard from "./ProjectCard";



const Project = () => {
  const projects = [
    {
      liveLink: "https://logistic-rho.vercel.app/",
      imageSrc: "https://i.imgur.com/ICbosIP.png",
      projectName: "APS Logistics",
      description:
        "APS Logistics is a logistics platform that simplifies the process of booking deliveries. It allows users to schedule pickups, track shipments, and manage delivery details efficiently for smoother operations.",
      tools: "React.js, TailwindCss, Laravel",
    },
    {
      liveLink: "https://cabashexchange.netlify.app/",
      imageSrc: "https://i.imgur.com/ptnIIwM.png",
      projectName: "Cabash Exchange",
      description:
        "Cabash Exchange, a Pan-African payment platform, offers a swift, secure, and convenient solution for individuals and businesses to seamlessly send and receive money across Africa in their preferred currencies..",
      tools: "React.js, TailwindCss, Laravel",
    },

    {
      liveLink: "https://goriolafarms.com.ng/",
      imageSrc: "https://i.imgur.com/XDWjhmN.png",
      projectName: "Goriola Farms",
      description:
        "Goriola Farms, is committed to providing high-quality poultry products, including eggs, chickens, and fish. With a passion for sustainable farming, they ensure that their products are fresh, healthy, and ethically sourced.",
      tools: "React.js, TailwindCSS",
    },
    {
      liveLink: "https://phairy.vercel.app/",
      imageSrc: "https://i.imgur.com/BhGEASk.png",
      projectName: "Phairy",
      description:
        "Phairy is a platform designed to connect clients with trusted Afro-Caribbean hairstylists. Users can easily discover, view portfolios, and book highly-rated stylists, simplifying the process for both clients and professionals.",
      tools: "TailwindCSS, React.js",
    },
    {
      liveLink: "https://med-ease.vercel.app/",
      imageSrc: "https://i.imgur.com/4Zcr1Ag.png",
      projectName: "MedEase",
      description:
        "MedEase is a medication management software, streamlining the process of tracking medications. With user-friendly features, it ensures medication adherence, providing an accessible platform for users to manage their health with ease.",
      tools: "React.js, TailwindCss, Node.js",
    },
    // {
    //   liveLink: "https://sync-website-vumc.vercel.app/",
    //   imageSrc: "https://i.imgur.com/4EqoOkV.png",
    //   projectName: "Sync Website",
    //   description:
    //     "The Sync website is the online gateway to our powerful church management software. Explore comprehensive features, from member management to event planning. Connect with us seamlessly through our user-friendly website.",
    //   tools: "Next.js, TailwindCss, Laravel",
    // },
    {
      liveLink: "https://techshire.ng/",
      imageSrc: "https://i.imgur.com/HAsjIEU.png",
      projectName: "TechShire",
      description:
        "Techshire, is more than just an IT solution provider; they are your dedicated partner in navigating the ever-evolving landscape of technology. With a firm commitment to excellence, innovation, and customer satisfaction.",
      tools: "React.js, TailwindCss, PHP",
    },
  ];

  return (
    <div className="lg:my-8">
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
