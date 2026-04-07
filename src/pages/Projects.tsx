import { motion } from 'motion/react';

export default function Projects() {
  const ease = [0.16, 1, 0.3, 1];

  const projects = [
    {
      id: 1,
      title: 'Exterior Renovation',
      category: 'General Carpentry',
      image: 'https://i.imgur.com/1M9iggT.jpg'
    },
    {
      id: 2,
      title: 'Custom Woodwork',
      category: 'Carpentry',
      image: 'https://i.imgur.com/YBnP7MI.jpg'
    },
    {
      id: 3,
      title: 'Siding Upgrade',
      category: 'Siding',
      image: 'https://i.imgur.com/Sh6cX71.jpg'
    },
    {
      id: 4,
      title: 'Window Installation',
      category: 'Windows',
      image: 'https://i.imgur.com/FlZp7UV.jpg'
    },
    {
      id: 5,
      title: 'Door Replacement',
      category: 'Doors',
      image: 'https://i.imgur.com/WWlGK34.jpg'
    },
    {
      id: 6,
      title: 'Deck Construction',
      category: 'General Carpentry',
      image: 'https://i.imgur.com/WPgKWrX.jpg'
    },
    {
      id: 7,
      title: 'Home Exterior',
      category: 'Siding & Windows',
      image: 'https://i.imgur.com/K02fRv2.jpg'
    },
    {
      id: 8,
      title: 'Trim & Molding',
      category: 'Carpentry',
      image: 'https://i.imgur.com/aoANsTc.jpg'
    },
    {
      id: 9,
      title: 'Patio Doors',
      category: 'Doors',
      image: 'https://i.imgur.com/ntUA5JQ.jpg'
    },
    {
      id: 10,
      title: 'Vinyl Siding',
      category: 'Siding',
      image: 'https://i.imgur.com/yraAedl.jpg'
    },
    {
      id: 11,
      title: 'Energy Efficient Windows',
      category: 'Windows',
      image: 'https://i.imgur.com/KeipCbM.jpg'
    },
    {
      id: 12,
      title: 'Custom Entryway',
      category: 'Doors',
      image: 'https://i.imgur.com/b9xu6Tx.jpg'
    },
    {
      id: 13,
      title: 'Structural Repair',
      category: 'General Carpentry',
      image: 'https://i.imgur.com/hM3DkRV.jpg'
    },
    {
      id: 14,
      title: 'Complete Overhaul',
      category: 'Exterior Upgrades',
      image: 'https://i.imgur.com/X8w4v6V.jpg'
    }
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Header */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          className="max-w-3xl"
        >
          <span className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-6 block">Portfolio</span>
          <h1 className="font-serif text-5xl md:text-7xl text-primary-deep leading-tight mb-8">
            Our <span className="italic text-accent">Work</span>
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            A curated selection of our recent carpentry and exterior projects across Massachusetts.
          </p>
        </motion.div>
      </section>

      {/* Gallery Grid - Masonry style feel */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: (index % 2) * 0.2, ease }}
                className={`group relative overflow-hidden ${index % 2 === 1 ? 'md:mt-24' : ''}`}
              >
                <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/90 via-primary-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-10">
                  <div className="w-8 h-0.5 bg-accent mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                  <span className="text-accent font-bold text-xs uppercase tracking-widest mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                    {project.category}
                  </span>
                  <h3 className="text-white font-serif text-3xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
