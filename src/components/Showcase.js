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
      title: "Weather Simulation",
      description: "Inspired by Monet's \"Haystacks\", this project seeked to showcase the effects of time of day, snow, and rain on a singular scene",
      tags: ["C++", "OpenGL"],
      imageUrl: "/assets/img/weather-proj.jpeg",
      path: "https://docs.google.com/presentation/d/1fS3Rr0e6InCOjAGcQDe32s74RygyNonYMGmTt35AbWs/edit?usp=sharing"
    },
    {
      title: "Spotify Deep Dive",
      description: "Data visualizations that were created using data from Spotify's API to identify trends in listening history",
      tags: ["Python", "Spotify API"],
      imageUrl: "/assets/img/spotify-deep-dive.jpeg",
      path: "https://github.com/szaqadir/SpotifyDeepDive"
    },
    {
      title: "Portfolio Site",
      description: "What you're looking at currently! This was a project to establish my personal style on the worldwide web",
      tags: ["React", "Tailwind CSS", "Javascript", "Contentful"],
      imageUrl: "/assets/img/hero.png",
      path: "https://github.com/mykyhuynh/mykyhuynh.github.io"
    },
    // Add more projects here
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projects.map((project, index) => (
            <div key={index} className="flex-[0_0_430px] max-sm:flex-[0_0_320px] min-w-0 px-2">
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