export default function Footer() {
  return (
    <footer id="contact" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Let's <span className="text-indigo-400">Connect</span>
        </h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          I'm always open to interesting conversations, collaborations, or just a good chat
          about making things.
        </p>

        <a
          href="mailto:akhattak@huskers.unl.edu"
          className="inline-block px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/40 hover:-translate-y-0.5"
        >
          Say Hello ✉️
        </a>

        <p className="mt-12 text-sm text-gray-600">
          © {new Date().getFullYear()} Adam Khattak — University of Nebraska Lincoln
        </p>
      </div>
    </footer>
  )
}
