export default function Home() {
  return (
    <mc
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
               c
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

          {/* Video 6 */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <div className="relative" style={{ paddingBottom: '177.78%', height: 0 }}>
                <iframe
                  src="https://www.youtube.com/embed/jnR4L9lkzKA"
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
              <p className="text-center mt-3 text-gray-300 font-semibold">Downtown Huntsville</p>
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