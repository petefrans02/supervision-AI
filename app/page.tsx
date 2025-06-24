'use client';

import { useState } from 'react';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const handleGenerate = async () => {
    setLoading(true);
    setVideoUrl('');

    // Simulation de génération (tu remplaceras ça plus tard par une vraie API)
    setTimeout(() => {
      setVideoUrl('https://example.com/fake-video.mp4');
      setLoading(false);
    }, 2000);
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Supervision AI</h1>
      <p>Enter a description and generate a video using AI.</p>

      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe your scene (e.g. A man walking in the rain)"
        style={{
          width: '100%',
          maxWidth: '500px',
          padding: '0.5rem',
          marginTop: '1rem',
        }}
      />
      <br />

      <button
        onClick={handleGenerate}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#333',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {loading ? 'Generating...' : 'Generate Video'}
      </button>

      {videoUrl && (
        <div style={{ marginTop: '2rem' }}>
          <p>Here is your video:</p>
          <a href={videoUrl} target="_blank" rel="noopener noreferrer">
            {videoUrl}
          </a>
        </div>
      )}
    </main>
  );
}
