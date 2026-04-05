export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="text-center max-w-3xl mx-auto">
        {/* Avatar placeholder */}
        <div className="mx-auto mb-6 w-28 h-28 rounded-full bg-indigo-600 flex items-center justify-center text-4xl font-bold text-white shadow-lg shadow-indigo-500/30">
          AK
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Adam Khattak
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 mb-8 leading-relaxed">
          Undergraduate Student at the{' '}
          <span className="text-white font-semibold">University of Nebraska Lincoln</span>
          {' '}— builder, designer, and maker.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/40 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-gray-600 hover:border-indigo-400 text-gray-300 hover:text-indigo-400 font-semibold transition-all duration-200 hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce text-gray-600">
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
