export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <span className="text-lg font-bold tracking-tight text-white">
          Adam <span className="text-indigo-400">Khattak</span>
        </span>
        <div className="flex gap-6 text-sm font-medium text-gray-400">
          <a href="#about" className="hover:text-indigo-400 transition-colors duration-200">About</a>
          <a href="#projects" className="hover:text-indigo-400 transition-colors duration-200">Projects</a>
          <a href="#contact" className="hover:text-indigo-400 transition-colors duration-200">Contact</a>
        </div>
      </div>
    </nav>
  )
}
