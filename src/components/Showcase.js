import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Card from './Card';

function Showcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    breakpoints: {
      '(min-width: 1024px)': { slidesToScroll: 2 },
      '(max-width: 760px)': { slidesToScroll: 1 }
    }
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const projects = [
    {
      title: "My Project",
      description: "This is my awesome project description",
      tags: ["React", "TailwindCSS", "JavaScript"],
      imageUrl: "/assets/img/yoshitomo.jpeg",
      path: "https://github.com/mykyhuynh"
    },
    {
      title: "My Project 1",
      description: "This is my awesome project description",
      tags: ["WebGL"],
      imageUrl: "/assets/img/yoshitomo.jpeg",
      path: "/blog/my-project"
    },
    {
      title: "My Project 2",
      description: "This is my awesome project description",
      tags: ["React", "TailwindCSS", "JavaScript"],
      imageUrl: "/assets/img/yoshitomo.jpeg",
      path: "/blog/my-project"
    },
    {
      title: "My Project 3",
      description: "This is my awesome project description",
      tags: ["React", "TailwindCSS", "JavaScript"],
      imageUrl: "/assets/img/yoshitomo.jpeg",
      path: "/blog/my-project"
    },
    // Add more projects here
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projects.map((project, index) => (
            <div key={index} className="flex-[0_0_320px] min-w-0 px-2">
              <Card
                title={project.title}
                description={project.description}
                tags={project.tags}
                imageUrl={project.imageUrl}
                path={project.path}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center mt-3'>
        <button
          className="mr-3 text-xl"
          onClick={scrollPrev}
        >
          ←
        </button>
        <button
          className="ml-3 text-xl"
          onClick={scrollNext}
        >
          →
        </button>
      </div>
    </div>
  );
}

export default Showcase;