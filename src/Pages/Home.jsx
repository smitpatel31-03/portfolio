import React from 'react';

const projects = [
  {
    title: "E-commerce Website Using MERN Technology(User) - MERN",
    image: "/images/project1.jpg",
    url: "https://project-import-and-export.vercel.app",
  },
  {
    title: "E-commerce Website Using MERN Technology(Admin) - MERN",
    image: "/images/project2.jpg",
    url: "https://import-and-export-admin-nine.vercel.app",
  },
  {
    title: "Savi Import Export Blog Website - Wordpress",
    image: "/images/project3.jpg",
    url: "https://new.saviexim.com/",
  },
  {
    title: "  MegaBlog - MERN",
    image: "/images/project4.jpg",
    url: "https://mega-blog-eosin-nine.vercel.app",
  },
];

const skills = [
  { name: "HTML", icon: "/icons/html.png" },
  { name: "CSS", icon: "/icons/css.png" },
  { name: "JavaScript", icon: "/icons/js.png" },
  { name: "React JS", icon: "/icons/reactjs.png" },
  { name: "Tailwind css", icon: "/icons/tailwindcss.png" },
  { name: "Node JS", icon: "/icons/nodejs.png" },
  { name: "Express JS", icon: "/icons/expressjs.svg" },
  { name: "Mongodb", icon: "/icons/mongodb.png" },
  { name: "Java", icon: "/icons/java.png" },
  { name: "Python", icon: "/icons/python.png" },
  { name: "C", icon: "/icons/c.png" },
  { name: "git", icon: "/icons/git.png" },
  { name: "Github", icon: "/icons/github.png" },
  { name: "Wordpress", icon: "/icons/wordpress.png" },
];

const Home = () => {
  return (
    <div className="bg-zinc-900 text-white font-sans">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug">
          Performance-Optimized Websites
        </h1>
        <button className="bg-orange-500 px-6 py-2 mt-6 rounded-full hover:bg-orange-600 transition" href="tel:+919726045883">
          Contact Me
        </button>
      </section>

      {/* About Section */}
      {/* <section className="py-16 px-4 md:px-20 flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Let’s get know about me closer
          </h2>
          <button className="bg-orange-500 px-5 py-2 rounded-full hover:bg-orange-600 transition">
            About Me
          </button>
        </div>
        <img
          src="/images/profile.jpg"
          alt="profile"
          className="w-60 h-60 md:w-64 md:h-64 rounded-xl object-cover"
        />
      </section> */}

      {/* Projects Section */}
      <section className="px-4 md:px-20 py-16">
  <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
    My Projects Highlight
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {projects.map((project, index) => (
      <a
        key={index}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-zinc-800 p-4 rounded-xl hover:scale-105 transition-transform shadow-lg flex flex-col h-full"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-lg font-semibold text-white line-clamp-2 flex-grow">
          {project.title}
        </h3>
      </a>
    ))}
  </div>
</section>

      {/* Skills Section */}
      <section className="min-h-screen bg-zinc-900 text-white py-20 px-6">
  <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {skills.map((skill, index) => (
      <div
        key={index}
        className="flex items-center bg-orange-300 justify-center h-32 border border-blue-500 rounded-md hover:shadow-lg hover:shadow-blue-500 transition duration-300"
      >
        <img src={skill.icon} alt={skill.name} className="h-12 w-12" />
      </div>
    ))}
  </div>
</section>


    </div>
  );
};

export default Home;
