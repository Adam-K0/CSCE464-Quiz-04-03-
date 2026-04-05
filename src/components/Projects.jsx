const projects = [
  {
    id: 1,
    emoji: '⛳',
    title: '3D Printed Golf Putter',
    description:
      'Designed a custom golf putter from scratch using Fusion 360, then fabricated it with a Bambu Labs X1E 3D printer. The project combined precise parametric CAD modelling with careful material selection to achieve the right weight and balance.',
    tags: ['Fusion 360', '3D Printing', 'Bambu Labs X1E', 'CAD'],
    accent: 'from-indigo-500 to-purple-500',
    border: 'hover:border-indigo-500/60',
    glow: 'hover:shadow-indigo-500/20',
  },
  {
    id: 2,
    emoji: '🦇',
    title: 'Metal Batarangs',
    description:
      'Crafted a set of batarangs from 26 AWG steel sheet using the fiber laser cutter. Designed vector templates, dialled in the laser parameters, and finished each piece to a clean edge. A fun mix of pop-culture fandom and precision fabrication.',
    tags: ['Laser Cutting', 'Metal Fabrication', '26 AWG Steel', 'Vector Design'],
    accent: 'from-purple-500 to-pink-500',
    border: 'hover:border-purple-500/60',
    glow: 'hover:shadow-purple-500/20',
  },
]

function ProjectCard({ project }) {
  return (
    <div
      className={`group relative bg-gray-900 rounded-2xl p-8 border border-gray-800 ${project.border} hover:-translate-y-2 hover:shadow-xl ${project.glow} transition-all duration-300 cursor-default flex flex-col`}
    >
      {/* Gradient top bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="text-5xl mb-5">{project.emoji}</div>
      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
      <p className="text-gray-400 leading-relaxed mb-6 flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-400 border border-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Personal <span className="text-indigo-400">Projects</span>
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
          Things I've built, printed, and fabricated for fun and learning.
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
