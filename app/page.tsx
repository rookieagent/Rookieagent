export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            RookieAgent
          </h1>
          <p className="text-xl text-gray-600">
            AI Avatar Platform for Real Estate Agents
          </p>
        </header>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Create Your AI Avatar in Minutes
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Upload a photo, record your voice, and get a professional talking avatar. 
            No complicated tools. No multiple platforms. Just one button.
          </p>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition duration-200">
            Get Started
          </button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6">
            <div className="text-4xl mb-4">📸</div>
            <h3 className="text-xl font-bold mb-2">Upload Photo</h3>
            <p className="text-gray-600">Simple one-click photo upload</p>
          </div>
          
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🎤</div>
            <h3 className="text-xl font-bold mb-2">Record Voice</h3>
            <p className="text-gray-600">30-second voice sample</p>
          </div>
          
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🎬</div>
            <h3 className="text-xl font-bold mb-2">Get Avatar</h3>
            <p className="text-gray-600">Professional video in minutes</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 text-gray-500">
          <p>© 2026 RookieAgent.ai - Skip University, Use RookieAgent</p>
        </footer>

      </div>
    </main>
  );

