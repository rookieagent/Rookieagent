'use client';

import { useState } from 'react';

export default function UploadPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4" style={{ color: '#00D9FF' }}>
            Upload Your Photo
          </h1>
          <p className="text-xl text-gray-300">
            Step 1 of 3: Choose a clear headshot photo
          </p>
        </div>

        {/* Upload Area */}
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 mb-8">
          
          {!selectedImage ? (
            // Upload Zone
            <div className="border-4 border-dashed border-gray-600 rounded-xl p-12 text-center hover:border-cyan-500 transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="photo-upload"
              />
              <label htmlFor="photo-upload" className="cursor-pointer">
                <div className="text-6xl mb-4">📸</div>
                <p className="text-2xl font-bold mb-2" style={{ color: '#00D9FF' }}>
                  Click to Upload Photo
                </p>
                <p className="text-gray-400">
                  or drag and drop your image here
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  Supported formats: JPG, PNG, HEIC
                </p>
              </label>
            </div>
          ) : (
            // Preview
            <div className="text-center">
              <img
                src={selectedImage}
                alt="Preview"
                className="max-w-md mx-auto rounded-lg shadow-2xl mb-6"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="text-gray-400 hover:text-white underline"
              >
                Choose Different Photo
              </button>
            </div>
          )}
        </div>

        {/* Tips */}
        <div className="bg-gray-800 bg-opacity-30 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold mb-4" style={{ color: '#7B61FF' }}>
            📋 Tips for Best Results:
          </h3>
          <ul className="text-gray-300 space-y-2">
            <li>✓ Use a clear, well-lit photo</li>
            <li>✓ Face the camera directly</li>
            <li>✓ Avoid sunglasses or hats</li>
            <li>✓ Professional headshot works best</li>
          </ul>
        </div>

        {/* Next Button */}
        {selectedImage && (
          <div className="text-center">
            <button
              className="font-bold py-4 px-12 rounded-lg text-xl transition duration-200 transform hover:scale-105"
              style={{ backgroundColor: '#FF3D71', color: 'white' }}
            >
              Next: Record Voice →
            </button>
          </div>
        )}

        {/* Back to Home */}
        <div className="text-center mt-8">
          <a href="/" className="text-gray-400 hover:text-cyan-500 underline">
            ← Back to Home
          </a>
        </div>

      </div>
    </main>
  );
}