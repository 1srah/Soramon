import { RevealOnScroll } from "./RevealOnScroll";

export const Project = () => {
  return (
    <section
      id="project"
      className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">
              Snake Identifier Application
            </h3>
            <p className="text-gray-400 mb-4">
              The thesis project, an application for
              identifying snake species from images and assisting in
              decision-making.
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              {[
                "Python",
                "Tensorflow",
                "Flutter",
                "Firebase",
                "Dialogflow"
              ].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Portfolio Web Project</h3>
            <p className="text-gray-400 mb-4">
              The final project of Selected Topic Subject, a website meant to
              showcase my profile along with my works and various projects.
            </p>
            <div className="mb-4">
              {[
                "React",
                "Node.js",
                "TailwindCss"
              ].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-blue-400 transition-colors hover:text-blue-300"
              >
                {" "}
                View Project ➞
              </a>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
