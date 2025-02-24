import React, { useState, useMemo } from "react";

const projects = [
  {
    title: "My Project",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus dolor, imperdiet at cursus in, interdum id arcu. Aliquam a sem a libero fringilla dictum. Sed nec arcu metus. Suspendisse sed faucibus ex. Aliquam at facilisis tortor, pharetra rhoncus eros.",
    tags: ["React", "TailwindCSS", "JavaScript"],
    imageUrl: "/assets/img/yoshitomo.jpeg",
    path: "/projects/project1"
  },
  {
    title: "My Project 1",
    description: "This is my awesome project description",
    tags: ["WebGL"],
    imageUrl: "/assets/img/yoshitomo.jpeg",
    path: "/projects/project2"
  },
  {
    title: "My Project 2",
    description: "This is my awesome project description",
    tags: ["React", "TailwindCSS", "JavaScript"],
    imageUrl: "/assets/img/yoshitomo.jpeg",
    path: "/projects/project3"
  },
  {
    title: "My Project 3",
    description: "This is my awesome project description",
    tags: ["React", "TailwindCSS", "JavaScript"],
    imageUrl: "/assets/img/yoshitomo.jpeg",
    path: "/projects/project4"
  },
  // Add more projects here
];

function Work() {
  // State for active filter
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Extract unique tags from all projects
  const uniqueTags = useMemo(() => {
    const tags = projects.reduce((acc, project) => {
      project.tags.forEach(tag => acc.add(tag));
      return acc;
    }, new Set());
    return ['All', ...Array.from(tags)];
  }, []);

  // Filter projects based on active tag
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter(project =>
      project.tags.includes(activeFilter)
    );
  }, [activeFilter]);

  // Handle escape key press
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };

    if (selectedProject) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // Handle click outside modal
  const modalRef = React.useRef();
  const handleModalClick = (e) => {
    if (modalRef.current === e.target) {
      setSelectedProject(null);
    }
  };

  return (
    <div className='bg-repeat min-h-screen' style={{ backgroundImage: 'url(/grid_background.webp)' }}>
      <div class="flex h-screen">
        <div class="m-auto flex flex-col items-center pb-44">
          <h1 className='flex justify-center pb-10 font-bold text-3xl p-5'>˖ ࣪ ⊹ currently under construction ⊹ ࣪ ˖</h1>
        </div>
      </div>
      {/* Filter Tags */}
      {/* <div className="flex justify-center items-center gap-2 py-8 flex-wrap">
        <p className="font-bold">Filter by:</p>
        {uniqueTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`px-4 py-2 rounded-full border border-stone-600 text-sm font-medium
              ${activeFilter === tag 
                ? 'bg-pink-100' 
                : 'bg-transparent hover:bg-stone-100'
              }`}
          >
            {tag}
          </button>
        ))}
      </div> */}

      {/* Project Cards */}
      {/* <div className="container mx-auto max-w-screen-lg max-lg:max-w-screen-md max-md:max-w-md">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-md:gap-4">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              onClick={() => setSelectedProject(project)}
              className="bg-white p-4 shadow-lg cursor-pointer hover:-translate-y-1 transition-all
                         transform rotate-1 hover:rotate-0"
            >
              <div className="relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-64 max-sm:h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <h2 className="font-handwriting text-xl">{project.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Modal/Interstitial */}
      {/* {selectedProject && (
        <div
          ref={modalRef}
          onClick={handleModalClick}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        >
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>

              <div className="p-6">
                <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 mb-6">{selectedProject.description}</p>

                <a
                  href={selectedProject.path}
                  className="inline-block bg-stone-600 text-white px-6 py-2 rounded-full 
                           hover:bg-stone-700 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default Work;