export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between px-8 py-6 border-b border-zinc-800">
        <h1 className="text-2xl font-bold">SoulStream</h1>

        <div className="flex gap-6">
          <button>Explore</button>
          <button>Creators</button>
          <button>Login</button>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center text-center py-40 px-6">
        <h2 className="text-6xl font-bold mb-6">
          The Future of AI Streaming
        </h2>

        <p className="text-zinc-400 max-w-2xl text-xl mb-10">
          Livestream. Monetize. Build AI-powered creator communities.
        </p>

        <div className="flex gap-4">
          <button className="px-8 py-4 bg-white text-black rounded-2xl font-semibold">
            Start Streaming
          </button>

          <button className="px-8 py-4 border border-zinc-700 rounded-2xl">
            Explore Creators
          </button>
        </div>
      </section>
    </main>
  );
}