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
        <div className="text-center mb-16"><div className="text-8xl mb-6">
            🤖
          </div>
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

    {/* Video Demo Section */}
        <div className="mt-16 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8" style={{ color: '#00D9FF' }}>
            See Your AI Avatar In Action
          </h3>
          
          <div className="max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl">
            <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src="https://www.youtube.com/embed/OaoxMSFnMo0?controls=0&modestbranding=1&rel=0&showinfo=0"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>      
        </div>

       
       
       {/* Video Gallery Section */}
        <div className="mt-16 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8" style={{ color: '#00D9FF' }}>
            See Different Styles & Settings
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Video 1 */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <div className="relative" style={{ paddingBottom: '177.78%', height: 0 }}>
                <iframe
                  src="https://www.youtube.com/embed/rTcZkdBVKHM"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none'
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-center mt-3 text-gray-300 font-semibold">Professional Style</p>
            </div>

            {/* Video 2 */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <div className="relative" style={{ paddingBottom: '177.78%', height: 0 }}>
                <iframe
                  src="https://www.youtube.com/embed/mb7eaGgvd1g"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none'
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-center mt-3 text-gray-300 font-semibold">Dynamic Movement</p>
            </div>

            {/* Video 3 */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <div className="relative" style={{ paddingBottom: '177.78%', height: 0 }}>
                <iframe
                  src="https://www.youtube.com/embed/H7ho3i4hbDw"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none'
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-center mt-3 text-gray-300 font-semibold">Casual Setting</p>
            </div>

            {/* Video 4 */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <div className="relative" style={{ paddingBottom: '177.78%', height: 0 }}>
                <iframe
                  src="https://www.youtube.com/embed/vnYbW_SHeNI"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none'
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-center mt-3 text-gray-300 font-semibold">Office Look</p>
            </div>

            {/* Video 5 */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <div className="relative" style={{ paddingBottom: '177.78%', height: 0 }}>
                <iframe
                  src="https://www.youtube.com/embed/eK7aogxcKdY"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none'
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-center mt-3 text-gray-300 font-semibold">Creative Space</p>
            </div>
          </div>
        </div> {/* Features */}
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