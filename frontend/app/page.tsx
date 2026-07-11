export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <header className="bg-white dark:bg-slate-900 shadow">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-emerald-600">Skill2Income</h1>
          <ul className="flex gap-6">
            <li><a href="#">Features</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">From Skills to Sustainable Income</h2>
          <p className="text-xl text-slate-300 mb-8">Your personalized AI roadmap to economic mobility</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg">Start Free</button>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg">Watch Demo</button>
          </div>
        </section>
      </main>
    </div>
  );
}
