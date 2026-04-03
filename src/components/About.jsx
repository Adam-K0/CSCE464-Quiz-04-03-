const skills = [
  'Fusion 360',
  '3D Printing',
  'Fiber Laser Cutting',
  'Metal Fabrication',
  'CAD / CAM',
  'React',
]

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          About <span className="text-indigo-400">Me</span>
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
          A little bit about who I am and what I do.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Bio */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-white">Background</h3>
            <p className="text-gray-400 leading-relaxed">
              I'm Adam Khattak, an undergraduate student at the{' '}
              <span className="text-white font-medium">University of Nebraska Lincoln</span>.
              I have a passion for combining digital design with hands-on fabrication — from
              parametric CAD models to laser-cut metal art. When I'm not studying, you'll find
              me at the makerspace turning ideas into real objects.
            </p>
          </div>

          {/* Skills */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-white">Skills &amp; Tools</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 rounded-full bg-indigo-600/20 text-indigo-300 text-sm font-medium border border-indigo-500/30 hover:bg-indigo-600/40 hover:border-indigo-400 transition-colors duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
