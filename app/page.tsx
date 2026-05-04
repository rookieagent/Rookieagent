export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-16">
        
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4" style={{ color: '#00D9FF' }}>
            RookieAgent
          </h1>
          <p className="text-xl" style={{ color: '#7B61FF' }}>
            AI Avatar Platform for Real Estate Agents
          </p>
        </header>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Create Your AI Avatar in Minutes
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Upload a photo, record your voice, and get a professional talking avatar. 
            No complicated tools. No multiple platforms. Just one button.
          </p>
          
          <button 
            className="font-bold py-4 px-8 rounded-lg text-xl transition duration-200 transform hover:scale-105"
            style={{ backgroundColor: '#FF3D71', color: 'white' }}
          >
            Get Started
          </button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 rounded-lg bg-gray-800 bg-opacity-50 backdrop-blur-sm">
            <div className="text-4xl mb-4">📸</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#00D9FF' }}>
              Upload Photo
            </h3>
            <p className="text-gray-300">Simple one-click photo upload</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-gray-800 bg-opacity-50 backdrop-blur-sm">
            <div className="text-4xl mb-4">🎤</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#00D9FF' }}>
              Record Voice
            </h3>
            <p className="text-gray-300">30-second voice sample</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-gray-800 bg-opacity-50 backdrop-blur-sm">
            <div className="text-4xl mb-4">🎬</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#00D9FF' }}>
              Get Avatar
            </h3>
            <p className="text-gray-300">Professional video in minutes</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16" style={{ color: '#7B61FF' }}>
          <p>© 2026 RookieAgent.ai - Skip University, Use RookieAgent</p>
        </footer>

      </div>
    </main>
  );
}